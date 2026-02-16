import type { Tutorial } from '@/types/tutorial.types'

export const dailyTutorial: Tutorial = {
  styleId: 'daily',
  titleKo: '데일리 내추럴 메이크업',
  titleEn: 'Daily Natural Makeup',
  totalDuration: '약 20분',
  difficulty: 'beginner',
  steps: [
    {
      stepNumber: 1,
      titleKo: '베이스 - 파운데이션',
      titleEn: 'Base - Foundation',
      descriptionKo: '깨끗한 피부 위에 파운데이션을 얇게 펴 발라주세요. 스펀지를 사용하면 더욱 자연스러운 마무리가 가능합니다. 이마, 양쪽 볼, 코, 턱에 소량씩 덜어 바깥쪽으로 블렌딩해주세요.',
      descriptionEn: 'Apply a thin layer of foundation over clean skin. Using a beauty sponge gives a more natural finish. Dot small amounts on forehead, cheeks, nose, and chin, then blend outward.',
      category: 'foundation',
      tips: [
        { textKo: '파운데이션은 피부톤과 가장 가까운 색상을 선택하세요', textEn: 'Choose a foundation shade closest to your skin tone' },
        { textKo: '촉촉한 스킨케어 후 바로 적용하면 밀착력이 좋아져요', textEn: 'Apply right after moisturizing for better adherence' },
      ],
      products: [
        { nameKo: '촉촉 글로우 파운데이션', nameEn: 'Dewy Glow Foundation', brand: 'CLIO', category: 'foundation', priceRange: '₩25,000 ~ ₩35,000' },
      ],
      duration: '3분',
    },
    {
      stepNumber: 2,
      titleKo: '눈썹 정리',
      titleEn: 'Eyebrow Shaping',
      descriptionKo: '눈썹 펜슬로 빈 부분을 자연스럽게 채워주세요. 눈썹 앞머리는 가볍게, 꼬리 부분은 살짝 진하게 그려주면 자연스럽습니다. 스크류 브러시로 결을 정리하며 마무리합니다.',
      descriptionEn: 'Fill in sparse areas with an eyebrow pencil. Draw lighter strokes at the front and slightly darker at the tail for a natural look. Brush through with a spoolie to blend.',
      category: 'eyebrow',
      tips: [
        { textKo: '눈썹 색상은 머리카락보다 한 톤 밝은 것이 자연스러워요', textEn: 'Choose a brow color one shade lighter than your hair' },
      ],
      products: [
        { nameKo: '슬림 아이브로 펜슬', nameEn: 'Slim Brow Pencil', brand: 'INNISFREE', category: 'eyebrow', priceRange: '₩8,000 ~ ₩12,000' },
      ],
      duration: '3분',
    },
    {
      stepNumber: 3,
      titleKo: '립 - MLBB 립 틴트',
      titleEn: 'Lip - MLBB Lip Tint',
      descriptionKo: '입술 안쪽부터 립 틴트를 가볍게 톡톡 찍어 발라주세요. 자연스러운 그라데이션 립을 만들기 위해 입술 중앙에 한 번 더 덧발라줍니다. 자연스럽게 번지도록 손가락으로 블렌딩해주세요.',
      descriptionEn: 'Apply lip tint starting from the inner lips, patting gently. Layer an extra application in the center for a natural gradient effect. Blend with your finger for a seamless finish.',
      category: 'lip',
      tips: [
        { textKo: 'MLBB 컬러는 자신의 입술색보다 살짝 진한 톤을 선택하세요', textEn: 'Choose an MLBB shade slightly darker than your natural lip color' },
      ],
      products: [
        { nameKo: '쥬시 래스팅 틴트', nameEn: 'Juicy Lasting Tint', brand: 'ROMAND', category: 'lip', priceRange: '₩10,000 ~ ₩14,000' },
      ],
      duration: '2분',
    },
    {
      stepNumber: 4,
      titleKo: '블러셔',
      titleEn: 'Blush',
      descriptionKo: '광대뼈 위에 블러셔를 살짝 올려주세요. 피치 또는 코랄 톤이 데일리 메이크업에 잘 어울립니다. 미소를 지었을 때 볼록하게 올라오는 부분에 자연스럽게 블렌딩해주세요.',
      descriptionEn: 'Lightly apply blush on the apples of your cheeks. Peach or coral tones work great for daily makeup. Blend naturally on the area that pops up when you smile.',
      category: 'blush',
      tips: [
        { textKo: '블러셔는 소량씩 레이어링하는 것이 포인트예요', textEn: 'The key is layering blush in small amounts' },
      ],
      products: [
        { nameKo: '베러 댄 치크', nameEn: 'Better Than Cheek', brand: 'ROMAND', category: 'blush', priceRange: '₩9,000 ~ ₩13,000' },
      ],
      duration: '2분',
    },
  ],
}
