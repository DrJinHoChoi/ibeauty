import type { MakeupStyle } from '@/types/makeup.types'

export const makeupStyles: MakeupStyle[] = [
  {
    id: 'daily',
    nameKo: '데일리',
    nameEn: 'Daily',
    descriptionKo: '자연스럽고 가벼운 매일 메이크업',
    descriptionEn: 'Natural and light everyday makeup',
    emoji: '🌸',
    categories: ['foundation', 'eyebrow', 'lip', 'blush'],
    promptTemplate:
      'Apply natural daily Korean makeup with light foundation, groomed natural eyebrows, MLBB (my lips but better) lip tint, and subtle peachy blush. Keep the look fresh, dewy, and minimal. Skin should look glowing and healthy.',
    intensity: 'light',
  },
  {
    id: 'office',
    nameKo: '오피스',
    nameEn: 'Office',
    descriptionKo: '단정하고 프로페셔널한 오피스 메이크업',
    descriptionEn: 'Neat and professional office makeup',
    emoji: '💼',
    categories: ['foundation', 'contour', 'eyebrow', 'eyeshadow', 'eyeline', 'lip'],
    promptTemplate:
      'Apply professional Korean office makeup with even matte foundation, subtle contour, natural brown eyeshadow, thin precise eyeliner, groomed eyebrows, and muted rose lip color. The look should be polished and workplace-appropriate.',
    intensity: 'medium',
  },
  {
    id: 'party',
    nameKo: '파티',
    nameEn: 'Party',
    descriptionKo: '화려하고 눈에 띄는 파티 메이크업',
    descriptionEn: 'Glamorous and eye-catching party makeup',
    emoji: '🎉',
    categories: ['foundation', 'contour', 'eyebrow', 'eyeshadow', 'eyeline', 'mascara', 'lip', 'blush'],
    promptTemplate:
      'Apply glamorous Korean party makeup with flawless full-coverage foundation, sculpted contour and highlight, dramatic smoky eyeshadow with shimmer, bold winged eyeliner, volumized mascara, defined eyebrows, vibrant red or berry lips, and glowing blush. The look should be bold and festive.',
    intensity: 'bold',
  },
  {
    id: 'wedding',
    nameKo: '웨딩',
    nameEn: 'Wedding',
    descriptionKo: '우아하고 아름다운 웨딩 메이크업',
    descriptionEn: 'Elegant and beautiful wedding makeup',
    emoji: '💐',
    categories: ['foundation', 'contour', 'eyebrow', 'eyeshadow', 'eyeline', 'mascara', 'lip', 'blush'],
    promptTemplate:
      'Apply elegant Korean wedding makeup with luminous flawless skin base, soft contour, champagne and rose gold eyeshadow, delicate eyeliner, natural lash-enhancing mascara, perfectly shaped eyebrows, soft pink or coral lips, and radiant blush. The look should be timeless, romantic, and photograph beautifully.',
    intensity: 'medium',
  },
  {
    id: 'natural',
    nameKo: '내추럴',
    nameEn: 'Natural',
    descriptionKo: '있는 듯 없는 듯 자연스러운 메이크업',
    descriptionEn: 'Barely-there natural makeup',
    emoji: '🍃',
    categories: ['foundation', 'eyebrow', 'lip'],
    promptTemplate:
      'Apply very subtle no-makeup Korean makeup look with sheer tinted moisturizer for a skin-like finish, lightly groomed natural eyebrows, and a nude lip balm or very subtle lip tint. The result should look like naturally beautiful bare skin with almost no visible makeup.',
    intensity: 'light',
  },
  {
    id: 'glam',
    nameKo: '글램',
    nameEn: 'Glam',
    descriptionKo: '매혹적이고 강렬한 글래머러스 메이크업',
    descriptionEn: 'Seductive and intense glamorous makeup',
    emoji: '✨',
    categories: ['foundation', 'contour', 'eyebrow', 'eyeshadow', 'eyeline', 'mascara', 'lip', 'blush'],
    promptTemplate:
      'Apply full glamorous Korean makeup with flawless high-coverage dewy foundation, dramatic sculpted contour with strong highlight, deep smoky eyeshadow with glitter, thick winged eyeliner, full dramatic lashes, bold arched eyebrows, deep red or plum lips, and sculpted blush. The look should be magazine-editorial-worthy.',
    intensity: 'bold',
  },
  {
    id: 'date',
    nameKo: '데이트',
    nameEn: 'Date',
    descriptionKo: '사랑스럽고 로맨틱한 데이트 메이크업',
    descriptionEn: 'Lovely and romantic date makeup',
    emoji: '💕',
    categories: ['foundation', 'eyebrow', 'eyeshadow', 'eyeline', 'mascara', 'lip', 'blush'],
    promptTemplate:
      'Apply sweet romantic Korean date makeup with dewy luminous skin, soft pink or peach eyeshadow, subtle brown eyeliner, natural curled lashes with mascara, gently shaped eyebrows, gradient cherry or pink lip tint, and adorable peach blush on the apples of the cheeks. The look should be youthful, lovely, and approachable.',
    intensity: 'medium',
  },
  {
    id: 'interview',
    nameKo: '면접',
    nameEn: 'Interview',
    descriptionKo: '깔끔하고 신뢰감을 주는 면접 메이크업',
    descriptionEn: 'Clean and trustworthy interview makeup',
    emoji: '🤝',
    categories: ['foundation', 'contour', 'eyebrow', 'eyeline', 'lip'],
    promptTemplate:
      'Apply clean professional Korean interview makeup with natural semi-matte foundation for a neat complexion, very subtle contour, clean and well-groomed straight eyebrows, thin natural brown eyeliner, and understated MLBB lip color. The look should convey competence, neatness, and trustworthiness. Avoid any shimmery or flashy elements.',
    intensity: 'light',
  },
]

export const styleCategories = [
  { id: 'all', filter: () => true },
  { id: 'natural', filter: (s: MakeupStyle) => s.intensity === 'light' },
  { id: 'glam', filter: (s: MakeupStyle) => s.intensity === 'bold' },
  { id: 'special', filter: (s: MakeupStyle) => ['wedding', 'party', 'date'].includes(s.id) },
] as const
