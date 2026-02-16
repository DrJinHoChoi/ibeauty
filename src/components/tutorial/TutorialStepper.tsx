import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import TutorialStep from './TutorialStep'
import ProgressBar from '@/components/ui/ProgressBar'
import Button from '@/components/ui/Button'
import type { Tutorial } from '@/types/tutorial.types'

interface TutorialStepperProps {
  tutorial: Tutorial
  onComplete: () => void
}

export default function TutorialStepper({ tutorial, onComplete }: TutorialStepperProps) {
  const { t, i18n } = useTranslation('tutorial')
  const [currentStep, setCurrentStep] = useState(0)
  const isKo = i18n.language === 'ko'
  const total = tutorial.steps.length
  const step = tutorial.steps[currentStep]

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-red-100 text-red-700',
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {isKo ? tutorial.titleKo : tutorial.titleEn}
        </h2>
        <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
          <span>{tutorial.totalDuration}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[tutorial.difficulty]}`}>
            {t(`difficulty.${tutorial.difficulty}`)}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-400">
          <span>{t('step')} {currentStep + 1} {t('of')} {total}</span>
          <span>{Math.round(((currentStep + 1) / total) * 100)}%</span>
        </div>
        <ProgressBar value={currentStep + 1} max={total} />
      </div>

      {/* Step Content */}
      <div className="min-h-[200px]">
        <TutorialStep step={step} />
      </div>

      {/* Navigation */}
      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <Button
          variant="secondary"
          onClick={() => setCurrentStep((s) => s - 1)}
          disabled={currentStep === 0}
          className="flex-1"
        >
          <ChevronLeft className="h-4 w-4" />
          {t('navigation.prev')}
        </Button>

        {currentStep < total - 1 ? (
          <Button
            onClick={() => setCurrentStep((s) => s + 1)}
            className="flex-1"
          >
            {t('navigation.next')}
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={onComplete} className="flex-1">
            <Check className="h-4 w-4" />
            {t('navigation.complete')}
          </Button>
        )}
      </div>
    </div>
  )
}
