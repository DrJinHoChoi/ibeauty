import { useParams, useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import TutorialStepper from '@/components/tutorial/TutorialStepper'
import Button from '@/components/ui/Button'
import { getTutorial } from '@/data/tutorials'
import type { MakeupStyleId } from '@/types/makeup.types'
import { toast } from '@/components/ui/Toast'

export default function TutorialViewPage() {
  const { styleId } = useParams<{ styleId: string }>()
  const { t } = useTranslation('tutorial')
  const navigate = useNavigate()

  const tutorial = getTutorial(styleId as MakeupStyleId)

  if (!tutorial) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
        <div className="text-6xl mb-4">📚</div>
        <p className="text-gray-500 mb-4">{t('common:errors.notFound')}</p>
        <Button onClick={() => navigate('/')}>{t('common:nav.home')}</Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-6 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('backToResult')}
      </button>

      <TutorialStepper
        tutorial={tutorial}
        onComplete={() => {
          toast({ type: 'success', message: '튜토리얼을 완료했습니다! 🎉' })
          navigate('/gallery')
        }}
      />
    </div>
  )
}
