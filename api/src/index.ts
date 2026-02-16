import express from 'express'
import cors from 'cors'
import { transformRouter } from './routes/transform.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }))
app.use(express.json({ limit: '20mb' }))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api', transformRouter)

app.listen(PORT, () => {
  console.log(`🚀 iBeauty API running on http://localhost:${PORT}`)
})
