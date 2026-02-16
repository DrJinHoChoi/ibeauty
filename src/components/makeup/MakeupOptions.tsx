import { useTranslation } from 'react-i18next'
import type { MakeupOptions as MakeupOptionsType } from '@/types/makeup.types'

interface MakeupOptionsProps {
  options: MakeupOptionsType
  onIntensityChange: (value: number) => void
  onLipColorChange: (color: string) => void
  onEyeshadowColorChange: (color: string) => void
  onSkinToneChange: (tone: MakeupOptionsType['skinTone']) => void
}

const lipColors = ['#C44569', '#E77F8F', '#B83B5E', '#D4A5A5', '#8B0000', '#FF6B6B']
const eyeshadowColors = ['#D4A574', '#C9A0DC', '#8B7355', '#CD853F', '#DDA0DD', '#4A3728']
const skinTones = ['fair', 'light', 'medium', 'tan', 'deep'] as const

export default function MakeupOptions({
  options,
  onIntensityChange,
  onLipColorChange,
  onEyeshadowColorChange,
  onSkinToneChange,
}: MakeupOptionsProps) {
  const { t } = useTranslation('makeup')

  return (
    <div className="space-y-6 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{t('options.title')}</h3>

      {/* Intensity Slider */}
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">{t('options.intensity')}</label>
          <span className="text-sm text-primary-500 font-medium">{options.intensity}%</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">{t('options.intensityLight')}</span>
          <input
            type="range"
            min={10}
            max={100}
            value={options.intensity}
            onChange={(e) => onIntensityChange(Number(e.target.value))}
            className="flex-1 accent-primary-500 h-2 rounded-full"
          />
          <span className="text-xs text-gray-400">{t('options.intensityBold')}</span>
        </div>
      </div>

      {/* Lip Color */}
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">{t('options.lipColor')}</label>
        <div className="flex gap-2.5">
          {lipColors.map((color) => (
            <button
              key={color}
              onClick={() => onLipColorChange(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer ${
                options.lipColor === color
                  ? 'border-primary-500 scale-110 shadow-md'
                  : 'border-gray-200 hover:scale-105'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Eyeshadow Color */}
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">{t('options.eyeshadowColor')}</label>
        <div className="flex gap-2.5">
          {eyeshadowColors.map((color) => (
            <button
              key={color}
              onClick={() => onEyeshadowColorChange(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer ${
                options.eyeshadowColor === color
                  ? 'border-primary-500 scale-110 shadow-md'
                  : 'border-gray-200 hover:scale-105'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Skin Tone */}
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">{t('options.skinTone')}</label>
        <div className="flex gap-2 flex-wrap">
          {skinTones.map((tone) => (
            <button
              key={tone}
              onClick={() => onSkinToneChange(tone)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all cursor-pointer ${
                options.skinTone === tone
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t(`options.skinTones.${tone}`)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
