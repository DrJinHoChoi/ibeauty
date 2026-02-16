import OpenAI, { toFile } from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function transformWithOpenAI(
  imageBuffer: Buffer,
  prompt: string,
): Promise<string> {
  const imageFile = await toFile(imageBuffer, 'photo.png', { type: 'image/png' })

  const response = await openai.images.edit({
    model: 'gpt-image-1',
    image: imageFile,
    prompt,
    size: '1024x1024',
    quality: 'medium',
  })

  const imageBase64 = response.data?.[0]?.b64_json
  if (!imageBase64) {
    throw new Error('No image data returned from OpenAI')
  }

  return imageBase64
}
