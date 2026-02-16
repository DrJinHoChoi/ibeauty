import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Camera, Sparkles, BookOpen, Download, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HomePage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const features = [
    {
      icon: Camera,
      titleKo: '사진 업로드',
      titleEn: 'Upload Photo',
      descKo: '셀피 또는 사진을 업로드하세요',
      descEn: 'Upload a selfie or photo',
    },
    {
      icon: Sparkles,
      titleKo: 'AI 메이크업 변환',
      titleEn: 'AI Makeup Transform',
      descKo: '8가지 스타일의 메이크업을 체험해보세요',
      descEn: 'Try 8 different makeup styles',
    },
    {
      icon: BookOpen,
      titleKo: '튜토리얼 제공',
      titleEn: 'Step-by-Step Tutorial',
      descKo: '단계별 메이크업 방법을 알려드려요',
      descEn: 'Learn how to recreate the look',
    },
    {
      icon: Download,
      titleKo: '결과 저장 & 공유',
      titleEn: 'Save & Share',
      descKo: '결과를 다운로드하거나 공유하세요',
      descEn: 'Download or share your results',
    },
  ]

  const isKo = t('appName') === '아이비유티'

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AI Powered Makeup
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {isKo ? (
              <>
                나만의 <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">AI 메이크업</span>
                <br />체험하기
              </>
            ) : (
              <>
                Try Your <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">AI Makeup</span>
                <br />Experience
              </>
            )}
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
            {isKo
              ? '사진 한 장으로 다양한 메이크업 스타일을 체험하고, 단계별 튜토리얼까지 받아보세요'
              : 'Experience various makeup styles with just one photo and get step-by-step tutorials'}
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/upload')}
            className="text-lg px-10"
          >
            {t('actions.start')}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
          {isKo ? '이렇게 사용해요' : 'How It Works'}
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-md mx-auto">
          {isKo
            ? '간단한 4단계로 나만의 메이크업을 찾아보세요'
            : 'Find your perfect makeup in 4 simple steps'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {isKo ? feature.titleKo : feature.titleEn}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {isKo ? feature.descKo : feature.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Styles Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {isKo ? '8가지 메이크업 스타일' : '8 Makeup Styles'}
          </h2>
          <p className="text-gray-500 mb-12">
            {isKo ? '데일리부터 웨딩까지, 원하는 스타일을 선택하세요' : 'From daily to wedding, choose your style'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['🌸 데일리', '💼 오피스', '🎉 파티', '💐 웨딩', '🍃 내추럴', '✨ 글램', '💕 데이트', '🤝 면접'].map(
              (style) => (
                <span
                  key={style}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium shadow-sm hover:shadow-md hover:border-primary-300 transition-all cursor-default"
                >
                  {style}
                </span>
              ),
            )}
          </div>
          <Button
            variant="outline"
            size="lg"
            className="mt-10"
            onClick={() => navigate('/upload')}
          >
            {isKo ? '지금 체험하기' : 'Try Now'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
