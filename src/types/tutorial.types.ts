import type { MakeupCategory, MakeupStyleId } from './makeup.types'

export interface TutorialTip {
  textKo: string
  textEn: string
}

export interface ProductRecommendation {
  nameKo: string
  nameEn: string
  brand: string
  category: MakeupCategory
  priceRange?: string
}

export interface TutorialStep {
  stepNumber: number
  titleKo: string
  titleEn: string
  descriptionKo: string
  descriptionEn: string
  category: MakeupCategory
  tips: TutorialTip[]
  products: ProductRecommendation[]
  duration: string
}

export interface Tutorial {
  styleId: MakeupStyleId
  titleKo: string
  titleEn: string
  totalDuration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  steps: TutorialStep[]
}
