import { useRef, useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Camera, RotateCcw } from 'lucide-react'
import Button from '@/components/ui/Button'
import { toast } from '@/components/ui/Toast'

interface WebcamCaptureProps {
  onCapture: (dataUrl: string) => void
  onClose: () => void
}

export default function WebcamCapture({ onCapture, onClose }: WebcamCaptureProps) {
  const { t } = useTranslation('upload')
  const videoRef = useRef<HTMLVideoElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [captured, setCaptured] = useState<string | null>(null)

  const startCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
      })
      setStream(mediaStream)
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
    } catch {
      toast({ type: 'error', message: '카메라에 접근할 수 없습니다' })
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    startCamera()
    return () => {
      stream?.getTracks().forEach((track) => track.stop())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const capture = () => {
    const video = videoRef.current
    if (!video) return

    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext('2d')!
    ctx.translate(canvas.width, 0)
    ctx.scale(-1, 1)
    ctx.drawImage(video, 0, 0)
    setCaptured(canvas.toDataURL('image/jpeg', 0.9))
  }

  const retake = () => {
    setCaptured(null)
  }

  const confirm = () => {
    if (captured) {
      stream?.getTracks().forEach((track) => track.stop())
      onCapture(captured)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-2xl overflow-hidden bg-black aspect-[4/3]">
        {captured ? (
          <img src={captured} alt="Captured" className="w-full h-full object-cover" />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover -scale-x-100"
          />
        )}
      </div>

      <div className="flex gap-3 justify-center">
        {captured ? (
          <>
            <Button variant="secondary" onClick={retake}>
              <RotateCcw className="h-4 w-4" />
              {t('webcam.retake')}
            </Button>
            <Button onClick={confirm}>
              {t('preview.crop')}
            </Button>
          </>
        ) : (
          <Button onClick={capture} size="lg" className="rounded-full w-16 h-16 p-0">
            <Camera className="h-7 w-7" />
          </Button>
        )}
      </div>
    </div>
  )
}
