export type MakeupStyleId =
  | 'daily'
  | 'office'
  | 'party'
  | 'wedding'
  | 'natural'
  | 'glam'
  | 'date'
  | 'interview'

export type MakeupCategory =
  | 'foundation'
  | 'contour'
  | 'eyeline'
  | 'eyeshadow'
  | 'mascara'
  | 'eyebrow'
  | 'lip'
  | 'blush'

export interface MakeupStyle {
  id: MakeupStyleId
  nameKo: string
  nameEn: string
  descriptionKo: string
  descriptionEn: string
  emoji: string
  categories: MakeupCategory[]
  promptTemplate: string
  intensity: 'light' | 'medium' | 'bold'
}

export interface MakeupOptions {
  styleId: MakeupStyleId
  intensity: number
  skinTone?: 'fair' | 'light' | 'medium' | 'tan' | 'deep'
  lipColor?: string
  eyeshadowColor?: string
  customPrompt?: string
}

export interface TransformRequest {
  imageBase64: string
  options: MakeupOptions
}

export interface TransformResult {
  id: string
  originalImage: string
  transformedImage: string
  style: MakeupStyleId
  options: MakeupOptions
  createdAt: string
}
