import { useTranslation } from 'react-i18next'
import { RefreshCw, Check } from 'lucide-react'
import Button from '@/components/ui/Button'

interface PhotoPreviewProps {
  imageUrl: string
  onAccept: () => void
  onChange: () => void
}

export default function PhotoPreview({ imageUrl, onAccept, onChange }: PhotoPreviewProps) {
  const { t } = useTranslation('upload')

  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
        <img
          src={imageUrl}
          alt="Preview"
          className="w-full max-h-[500px] object-contain"
        />
      </div>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onChange} className="flex-1">
          <RefreshCw className="h-4 w-4" />
          {t('preview.change')}
        </Button>
        <Button onClick={onAccept} className="flex-1">
          <Check className="h-4 w-4" />
          {t('nextStep')}
        </Button>
      </div>
    </div>
  )
}
