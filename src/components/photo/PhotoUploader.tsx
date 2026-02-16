import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useTranslation } from 'react-i18next'
import { Upload, ImagePlus } from 'lucide-react'
import { cn } from '@/utils/cn'
import { validateImageFile, compressImage } from '@/utils/image.utils'
import { toast } from '@/components/ui/Toast'

interface PhotoUploaderProps {
  onImageSelected: (dataUrl: string, file: File) => void
}

export default function PhotoUploader({ onImageSelected }: PhotoUploaderProps) {
  const { t } = useTranslation('upload')

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (!file) return

      const validationError = validateImageFile(file)
      if (validationError) {
        toast({ type: 'error', message: t(`validation.${validationError}`) })
        return
      }

      try {
        const compressed = await compressImage(file)
        onImageSelected(compressed, file)
      } catch {
        toast({ type: 'error', message: t('validation.fileType') })
      }
    },
    [onImageSelected, t],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': [], 'image/png': [], 'image/webp': [] },
    maxFiles: 1,
    multiple: false,
  })

  return (
    <div
      {...getRootProps()}
      className={cn(
        'relative flex flex-col items-center justify-center p-10 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-200',
        isDragActive
          ? 'border-primary-400 bg-primary-50 scale-[1.02]'
          : 'border-gray-200 bg-gray-50/50 hover:border-primary-300 hover:bg-primary-50/30',
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-4">
        <div className={cn(
          'w-16 h-16 rounded-2xl flex items-center justify-center transition-colors',
          isDragActive ? 'bg-primary-200' : 'bg-primary-100',
        )}>
          {isDragActive ? (
            <Upload className="h-8 w-8 text-primary-500 animate-bounce" />
          ) : (
            <ImagePlus className="h-8 w-8 text-primary-400" />
          )}
        </div>
        <div className="text-center">
          <p className="text-base font-medium text-gray-700 mb-1">
            {t('dropzone.title')}
          </p>
          <p className="text-sm text-gray-400">
            {t('dropzone.subtitle')}
          </p>
        </div>
      </div>
    </div>
  )
}
