import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { BookOpen, RotateCcw, ArrowLeft } from 'lucide-react'
import BeforeAfter from '@/components/result/BeforeAfter'
import ResultGallery from '@/components/result/ResultGallery'
import LoadingOverlay from '@/components/result/LoadingOverlay'
import Button from '@/components/ui/Button'
import { usePhotoStore } from '@/stores/usePhotoStore'
import { useMakeupStore } from '@/stores/useMakeupStore'
import { useResultStore } from '@/stores/useResultStore'
import { transformService } from '@/services/transform.service'
import { toast } from '@/components/ui/Toast'

export default function ResultPage() {
  const { t } = useTranslation('result')
  const navigate = useNavigate()
  const { originalImage } = usePhotoStore()
  const { selectedStyle, options } = useMakeupStore()
  const {
    currentResults, savedResults, isTransforming, error,
    setResults, saveResult, setTransforming, setError, reset,
  } = useResultStore()

  const savedIds = useMemo(
    () => new Set(savedResults.map((r) => r.id)),
    [savedResults],
  )

  useEffect(() => {
    if (!originalImage || !selectedStyle) {
      navigate('/upload', { replace: true })
      return
    }

    if (currentResults.length > 0) return

    const doTransform = async () => {
      setTransforming(true)
      setError(null)
      try {
        const results = await transformService.generateMakeup(originalImage, options)
        setResults(results)
      } catch (err) {
        const msg = err instanceof Error ? err.message : t('error.failed')
        setError(msg)
        toast({ type: 'error', message: msg })
      } finally {
        setTransforming(false)
      }
    }

    doTransform()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!originalImage || !selectedStyle) return null

  if (isTransforming) {
    return <LoadingOverlay />
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="text-6xl mb-4">😢</div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{t('error.failed')}</h2>
        <p className="text-gray-500 mb-6">{error}</p>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => navigate('/style-select')}>
            <ArrowLeft className="h-4 w-4" />
            {t('common:actions.back')}
          </Button>
          <Button onClick={() => { reset(); window.location.reload() }}>
            <RotateCcw className="h-4 w-4" />
            {t('common:actions.retry')}
          </Button>
        </div>
      </div>
    )
  }

  const firstResult = currentResults[0]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t('title')}</h1>
        <p className="text-gray-500">{t('subtitle')}</p>
      </div>

      {firstResult && (
        <div className="mb-10">
          <BeforeAfter before={originalImage} after={firstResult.transformedImage} />
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('variations')}</h2>
        <ResultGallery
          results={currentResults}
          savedIds={savedIds}
          onSave={(result) => {
            saveResult(result)
            toast({ type: 'success', message: t('saved') })
          }}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {selectedStyle && (
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => navigate(`/tutorial/${selectedStyle}`)}
          >
            <BookOpen className="h-5 w-5" />
            {t('viewTutorial')}
          </Button>
        )}
        <Button
          variant="secondary"
          size="lg"
          className="flex-1"
          onClick={() => {
            reset()
            navigate('/upload')
          }}
        >
          <RotateCcw className="h-5 w-5" />
          {t('newMakeup')}
        </Button>
      </div>
    </div>
  )
}
