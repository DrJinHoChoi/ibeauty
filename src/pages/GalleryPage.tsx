import { useMemo } from 'react'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Camera } from 'lucide-react'
import ResultGallery from '@/components/result/ResultGallery'
import Button from '@/components/ui/Button'
import { useResultStore } from '@/stores/useResultStore'

export default function GalleryPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { savedResults, removeSavedResult } = useResultStore()

  const savedIds = useMemo(
    () => new Set(savedResults.map((r) => r.id)),
    [savedResults],
  )

  if (savedResults.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <div className="text-6xl mb-4">🖼️</div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {t('nav.gallery')}
        </h2>
        <p className="text-gray-500 mb-6">
          저장된 메이크업 결과가 없습니다
        </p>
        <Button onClick={() => navigate('/upload')}>
          <Camera className="h-4 w-4" />
          메이크업 시작하기
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('nav.gallery')}</h1>
          <p className="text-gray-500 text-sm mt-1">{savedResults.length}개의 저장된 결과</p>
        </div>
      </div>

      <ResultGallery
        results={savedResults}
        savedIds={savedIds}
        onSave={(result) => removeSavedResult(result.id)}
      />
    </div>
  )
}
