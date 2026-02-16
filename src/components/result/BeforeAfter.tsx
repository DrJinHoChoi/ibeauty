import { useState, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

interface BeforeAfterProps {
  before: string
  after: string
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  const { t } = useTranslation('result')
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percent)
  }, [])

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = () => {
    isDragging.current = false
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-500 text-center">{t('beforeAfter')}</h3>
      <div
        ref={containerRef}
        className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto select-none touch-none cursor-col-resize"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* After (bottom layer) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

        {/* Before (top layer, clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current?.offsetWidth }}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-gray-400 rounded" />
              <div className="w-0.5 h-4 bg-gray-400 rounded" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/50 text-white text-xs font-medium">
          Before
        </div>
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/50 text-white text-xs font-medium">
          After
        </div>
      </div>
    </div>
  )
}
