import type { Tutorial } from '@/types/tutorial.types'
import type { MakeupStyleId } from '@/types/makeup.types'
import { dailyTutorial } from './daily.tutorial'

// All tutorials share a similar structure. For brevity, generate simple versions for other styles.
function createTutorial(
  styleId: MakeupStyleId,
  titleKo: string,
  titleEn: string,
  difficulty: Tutorial['difficulty'],
  totalDuration: string,
): Tutorial {
  const baseSteps = [
    {
      category: 'foundation' as const,
      titleKo: '베이스 메이크업',
      titleEn: 'Base Makeup',
      descriptionKo: '피부 타입에 맞는 파운데이션을 선택하여 얼굴 전체에 균일하게 발라주세요. 스펀지나 브러시로 꼼꼼하게 블렌딩하여 자연스러운 피부결을 만들어줍니다.',
      descriptionEn: 'Choose a foundation for your skin type and apply evenly. Blend thoroughly with a sponge or brush for a natural skin texture.',
      tips: [{ textKo: '파운데이션 전에 프라이머를 사용하면 지속력이 좋아져요', textEn: 'Using primer before foundation improves longevity' }],
      products: [{ nameKo: '더블 래스팅 파운데이션', nameEn: 'Double Lasting Foundation', brand: 'ETUDE', category: 'foundation' as const, priceRange: '₩20,000 ~ ₩30,000' }],
      duration: '4분',
    },
    {
      category: 'contour' as const,
      titleKo: '컨투어링',
      titleEn: 'Contouring',
      descriptionKo: '얼굴 측면, 코 옆, 턱선을 따라 셰이딩 제품을 발라 자연스러운 입체감을 만들어주세요. T존과 광대뼈 위에 하이라이터를 살짝 더해줍니다.',
      descriptionEn: 'Apply shading along the sides of your face, nose, and jawline for natural definition. Add a touch of highlighter on the T-zone and cheekbones.',
      tips: [{ textKo: '컨투어는 자연광 아래에서 확인하면서 블렌딩하세요', textEn: 'Blend contour while checking under natural light' }],
      products: [{ nameKo: '페이스 컨투어 팔레트', nameEn: 'Face Contour Palette', brand: 'TOO COOL FOR SCHOOL', category: 'contour' as const, priceRange: '₩15,000 ~ ₩22,000' }],
      duration: '3분',
    },
    {
      category: 'eyebrow' as const,
      titleKo: '아이브로',
      titleEn: 'Eyebrows',
      descriptionKo: '자연스러운 눈썹 모양을 살리면서 빈 부분을 채워주세요. 펜슬로 결을 따라 그린 후 스크류 브러시로 정리합니다.',
      descriptionEn: 'Fill in sparse areas while maintaining a natural brow shape. Draw following the hair direction with a pencil, then groom with a spoolie.',
      tips: [{ textKo: '눈썹 앞머리는 연하게, 꼬리는 진하게 그려야 자연스러워요', textEn: 'Draw lighter at the front and darker at the tail for a natural look' }],
      products: [{ nameKo: '드로잉 아이브로', nameEn: 'Drawing Eyebrow', brand: 'ETUDE', category: 'eyebrow' as const, priceRange: '₩5,000 ~ ₩8,000' }],
      duration: '3분',
    },
    {
      category: 'eyeshadow' as const,
      titleKo: '아이섀도',
      titleEn: 'Eyeshadow',
      descriptionKo: '아이홀 전체에 밝은 베이스 컬러를 깔아주세요. 눈두덩이 중앙에 포인트 컬러를 올리고, 눈꼬리 쪽으로 자연스럽게 블렌딩합니다.',
      descriptionEn: 'Apply a light base color across the lid. Place the point color in the center and blend naturally toward the outer corner.',
      tips: [{ textKo: '아이섀도 브러시를 다양한 크기로 사용하면 디테일한 표현이 가능해요', textEn: 'Using various brush sizes allows more detailed application' }],
      products: [{ nameKo: '프로 아이 팔레트', nameEn: 'Pro Eye Palette', brand: 'CLIO', category: 'eyeshadow' as const, priceRange: '₩30,000 ~ ₩42,000' }],
      duration: '4분',
    },
    {
      category: 'eyeline' as const,
      titleKo: '아이라인',
      titleEn: 'Eyeliner',
      descriptionKo: '속눈썹 사이사이를 메워주듯이 가늘게 라인을 그려주세요. 눈꼬리 부분은 자연스럽게 빼주면 눈이 커 보이는 효과가 있습니다.',
      descriptionEn: 'Draw a thin line filling between the lashes. Extend slightly at the outer corner for an eye-opening effect.',
      tips: [{ textKo: '아이라인은 눈을 반쯤 뜬 상태에서 그리면 라인이 자연스러워요', textEn: 'Drawing eyeliner with eyes half-open creates a more natural line' }],
      products: [{ nameKo: '슈퍼 슬림 펜 라이너', nameEn: 'Super Slim Pen Liner', brand: 'CLIO', category: 'eyeline' as const, priceRange: '₩14,000 ~ ₩18,000' }],
      duration: '3분',
    },
    {
      category: 'mascara' as const,
      titleKo: '마스카라',
      titleEn: 'Mascara',
      descriptionKo: '뷰러로 속눈썹을 컬링한 후, 마스카라를 뿌리부터 지그재그로 올려주세요. 하단 속눈썹에도 가볍게 발라주면 눈이 더 또렷해집니다.',
      descriptionEn: 'Curl lashes with an eyelash curler, then apply mascara in zigzag motions from root to tip. Lightly coat lower lashes for more defined eyes.',
      tips: [{ textKo: '마스카라가 뭉치지 않도록 여러 번 가볍게 레이어링하세요', textEn: 'Layer lightly multiple times to prevent clumping' }],
      products: [{ nameKo: '래쉬 수퍼 롱', nameEn: 'Lash Super Long', brand: 'MISSHA', category: 'mascara' as const, priceRange: '₩12,000 ~ ₩16,000' }],
      duration: '2분',
    },
    {
      category: 'blush' as const,
      titleKo: '블러셔',
      titleEn: 'Blush',
      descriptionKo: '미소를 지었을 때 볼록하게 올라오는 부분에 블러셔를 자연스럽게 올려주세요. 브러시를 사용하여 관자놀이 쪽으로 부드럽게 쓸어 올립니다.',
      descriptionEn: 'Apply blush on the apples of your cheeks when smiling. Use a brush to sweep gently toward the temples.',
      tips: [{ textKo: '크림 블러셔는 파운데이션 위에, 파우더 블러셔는 파우더 위에 사용하세요', textEn: 'Use cream blush over foundation, powder blush over setting powder' }],
      products: [{ nameKo: '베러 댄 치크', nameEn: 'Better Than Cheek', brand: 'ROMAND', category: 'blush' as const, priceRange: '₩9,000 ~ ₩13,000' }],
      duration: '2분',
    },
    {
      category: 'lip' as const,
      titleKo: '립 메이크업',
      titleEn: 'Lip Makeup',
      descriptionKo: '입술 보습 후 립 제품을 발라주세요. 입술 안쪽부터 바깥으로 자연스럽게 블렌딩하면 한국식 그라데이션 립이 완성됩니다.',
      descriptionEn: 'Moisturize lips first, then apply your lip product. Blend from the inner lips outward for the Korean gradient lip effect.',
      tips: [{ textKo: '립 라이너로 입술 라인을 잡아주면 더 선명한 모양이 가능해요', textEn: 'Using a lip liner helps create a more defined shape' }],
      products: [{ nameKo: '블러 퍼지 틴트', nameEn: 'Blur Fudge Tint', brand: 'ROMAND', category: 'lip' as const, priceRange: '₩12,000 ~ ₩15,000' }],
      duration: '2분',
    },
  ]

  // Map categories to steps based on style
  const styleCategories: Record<MakeupStyleId, string[]> = {
    daily: ['foundation', 'eyebrow', 'lip', 'blush'],
    office: ['foundation', 'contour', 'eyebrow', 'eyeshadow', 'eyeline', 'lip'],
    party: ['foundation', 'contour', 'eyebrow', 'eyeshadow', 'eyeline', 'mascara', 'lip', 'blush'],
    wedding: ['foundation', 'contour', 'eyebrow', 'eyeshadow', 'eyeline', 'mascara', 'lip', 'blush'],
    natural: ['foundation', 'eyebrow', 'lip'],
    glam: ['foundation', 'contour', 'eyebrow', 'eyeshadow', 'eyeline', 'mascara', 'lip', 'blush'],
    date: ['foundation', 'eyebrow', 'eyeshadow', 'eyeline', 'mascara', 'lip', 'blush'],
    interview: ['foundation', 'contour', 'eyebrow', 'eyeline', 'lip'],
  }

  const categories = styleCategories[styleId]
  const steps = baseSteps
    .filter((s) => categories.includes(s.category))
    .map((s, i) => ({ ...s, stepNumber: i + 1 }))

  return { styleId, titleKo, titleEn, totalDuration, difficulty, steps }
}

const tutorials: Record<MakeupStyleId, Tutorial> = {
  daily: dailyTutorial,
  office: createTutorial('office', '오피스 프로페셔널 메이크업', 'Office Professional Makeup', 'intermediate', '약 25분'),
  party: createTutorial('party', '파티 글래머러스 메이크업', 'Glamorous Party Makeup', 'advanced', '약 40분'),
  wedding: createTutorial('wedding', '우아한 웨딩 메이크업', 'Elegant Wedding Makeup', 'advanced', '약 45분'),
  natural: createTutorial('natural', '노메이크업 메이크업', 'No-Makeup Makeup', 'beginner', '약 10분'),
  glam: createTutorial('glam', '풀 글램 메이크업', 'Full Glam Makeup', 'advanced', '약 45분'),
  date: createTutorial('date', '로맨틱 데이트 메이크업', 'Romantic Date Makeup', 'intermediate', '약 30분'),
  interview: createTutorial('interview', '깔끔한 면접 메이크업', 'Clean Interview Makeup', 'beginner', '약 20분'),
}

export function getTutorial(styleId: MakeupStyleId): Tutorial | null {
  return tutorials[styleId] ?? null
}
