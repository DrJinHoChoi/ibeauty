import { useTranslation } from 'react-i18next'
import { Lightbulb, Clock } from 'lucide-react'
import type { TutorialStep as TutorialStepType } from '@/types/tutorial.types'

interface TutorialStepProps {
  step: TutorialStepType
}

export default function TutorialStep({ step }: TutorialStepProps) {
  const { t, i18n } = useTranslation('tutorial')
  const isKo = i18n.language === 'ko'

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center">
            {step.stepNumber}
          </span>
          <h3 className="text-lg font-semibold text-gray-900">
            {isKo ? step.titleKo : step.titleEn}
          </h3>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-400">
          <Clock className="h-3.5 w-3.5" />
          {step.duration}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed pl-11">
        {isKo ? step.descriptionKo : step.descriptionEn}
      </p>

      {step.tips.length > 0 && (
        <div className="ml-11 space-y-2">
          {step.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-100">
              <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-700">
                {isKo ? tip.textKo : tip.textEn}
              </p>
            </div>
          ))}
        </div>
      )}

      {step.products.length > 0 && (
        <div className="ml-11">
          <p className="text-sm font-medium text-gray-500 mb-2">{t('recommendedProducts')}</p>
          <div className="flex flex-wrap gap-2">
            {step.products.map((product, i) => (
              <div
                key={i}
                className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-sm"
              >
                <span className="font-medium text-gray-700">
                  {isKo ? product.nameKo : product.nameEn}
                </span>
                <span className="text-gray-400 ml-1.5">
                  {product.brand}
                </span>
                {product.priceRange && (
                  <span className="text-primary-500 ml-1.5 text-xs">
                    {product.priceRange}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
