import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/components/ui/Spinner'

export default function LoadingOverlay() {
  const { t } = useTranslation('result')
  const tips = t('loading.tips', { returnObjects: true }) as string[]
  const [tipIndex, setTipIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [tips.length])

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="relative mb-8">
        <Spinner size="lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">💄</span>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {t('loading.title')}
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        {t('loading.subtitle')}
      </p>
      <div className="max-w-sm w-full bg-primary-50 rounded-xl p-4 text-center transition-all">
        <p className="text-sm text-primary-600 font-medium animate-fade-in" key={tipIndex}>
          💡 {tips[tipIndex]}
        </p>
      </div>
    </div>
  )
}
