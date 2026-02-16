import { Router } from 'express'
import multer from 'multer'
import { transformWithOpenAI } from '../services/openai.service.js'
import { buildMakeupPrompt } from '../utils/prompts.js'

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } })
export const transformRouter = Router()

// Rate limiting: simple in-memory tracker
const requestCounts = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 10
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour

transformRouter.post('/transform', upload.single('image'), async (req, res) => {
  try {
    // Simple rate limiting
    const ip = req.ip || 'unknown'
    const now = Date.now()
    const record = requestCounts.get(ip)
    if (record && now < record.resetAt) {
      if (record.count >= RATE_LIMIT) {
        res.status(429).json({ success: false, error: { message: 'Rate limit exceeded. Try again later.' } })
        return
      }
      record.count++
    } else {
      requestCounts.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    }

    if (!req.file) {
      res.status(400).json({ success: false, error: { message: 'No image provided' } })
      return
    }

    const options = JSON.parse(req.body.options || '{}')
    const prompt = buildMakeupPrompt(options)

    console.log(`[Transform] Style: ${options.styleId}, Intensity: ${options.intensity}`)

    // Generate 2 variations
    const results = await Promise.all([
      transformWithOpenAI(req.file.buffer, prompt),
      transformWithOpenAI(req.file.buffer, prompt + ' Slightly vary the makeup application for a different look.'),
    ])

    const data = results.map((imageBase64, i) => ({
      id: `${Date.now()}-${i}`,
      originalImage: `data:image/jpeg;base64,${req.file!.buffer.toString('base64')}`,
      transformedImage: `data:image/png;base64,${imageBase64}`,
      style: options.styleId,
      options,
      createdAt: new Date().toISOString(),
    }))

    res.json({ success: true, data })
  } catch (error) {
    console.error('[Transform Error]', error)
    const message = error instanceof Error ? error.message : 'Transform failed'
    res.status(500).json({ success: false, error: { message } })
  }
})
