import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Download, Share2, Bookmark, BookmarkCheck } from 'lucide-react'
import Card from '@/components/ui/Card'
import { downloadImage } from '@/utils/image.utils'
import { toast } from '@/components/ui/Toast'
import type { TransformResult } from '@/types/makeup.types'

interface ResultCardProps {
  result: TransformResult
  isSaved: boolean
  onSave: () => void
}

export default function ResultCard({ result, isSaved, onSave }: ResultCardProps) {
  const { t } = useTranslation('result')
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleDownload = () => {
    downloadImage(result.transformedImage, `ibeauty-${result.style}-${Date.now()}.png`)
    toast({ type: 'success', message: '다운로드 완료!' })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        const blob = await (await fetch(result.transformedImage)).blob()
        const file = new File([blob], 'makeup.png', { type: 'image/png' })
        await navigator.share({ files: [file], title: '아이비유티 메이크업 결과' })
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(window.location.href)
      toast({ type: 'info', message: '링크가 복사되었습니다' })
    }
  }

  return (
    <Card className="group">
      <div className="relative aspect-square bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}
        <img
          src={result.transformedImage}
          alt="Makeup result"
          className="w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="flex gap-1">
          <button
            onClick={handleDownload}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            title={t('common:actions.download')}
          >
            <Download className="h-4 w-4 text-gray-500" />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            title={t('common:actions.share')}
          >
            <Share2 className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        <button
          onClick={onSave}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          title={isSaved ? t('saved') : t('saveToGallery')}
        >
          {isSaved ? (
            <BookmarkCheck className="h-4 w-4 text-primary-500" />
          ) : (
            <Bookmark className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </div>
    </Card>
  )
}
