import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Camera } from 'lucide-react'
import PhotoUploader from '@/components/photo/PhotoUploader'
import WebcamCapture from '@/components/photo/WebcamCapture'
import PhotoPreview from '@/components/photo/PhotoPreview'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import { usePhotoStore } from '@/stores/usePhotoStore'
import { validateImageDimensions } from '@/utils/image.utils'
import { toast } from '@/components/ui/Toast'

export default function UploadPage() {
  const { t } = useTranslation('upload')
  const navigate = useNavigate()
  const { originalImage, setOriginalImage, reset } = usePhotoStore()
  const [showWebcam, setShowWebcam] = useState(false)

  const handleImageSelected = async (dataUrl: string, file?: File) => {
    const dimError = await validateImageDimensions(dataUrl)
    if (dimError) {
      toast({ type: 'error', message: t(`validation.${dimError}`) })
      return
    }
    setOriginalImage(dataUrl, file)
  }

  const handleAccept = () => {
    navigate('/style-select')
  }

  const handleChange = () => {
    reset()
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t('title')}</h1>
        <p className="text-gray-500">{t('subtitle')}</p>
      </div>

      {originalImage ? (
        <PhotoPreview
          imageUrl={originalImage}
          onAccept={handleAccept}
          onChange={handleChange}
        />
      ) : (
        <div className="flex flex-col gap-4">
          <PhotoUploader onImageSelected={handleImageSelected} />

          <div className="relative flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">또는</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowWebcam(true)}
            className="w-full"
          >
            <Camera className="h-5 w-5" />
            {t('webcam.button')}
          </Button>
        </div>
      )}

      <Modal isOpen={showWebcam} onClose={() => setShowWebcam(false)} title={t('webcam.title')}>
        <WebcamCapture
          onCapture={(dataUrl) => {
            handleImageSelected(dataUrl)
            setShowWebcam(false)
          }}
          onClose={() => setShowWebcam(false)}
        />
      </Modal>
    </div>
  )
}
