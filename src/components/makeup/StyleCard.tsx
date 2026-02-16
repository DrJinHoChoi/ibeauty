import { useTranslation } from 'react-i18next'
import Card from '@/components/ui/Card'
import type { MakeupStyle } from '@/types/makeup.types'

interface StyleCardProps {
  style: MakeupStyle
  selected: boolean
  onClick: () => void
}

export default function StyleCard({ style, selected, onClick }: StyleCardProps) {
  const { i18n } = useTranslation()
  const isKo = i18n.language === 'ko'

  return (
    <Card hoverable selected={selected} onClick={onClick} className="p-4">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-3xl">{style.emoji}</span>
        <div>
          <h3 className="font-semibold text-gray-900">
            {isKo ? style.nameKo : style.nameEn}
          </h3>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            {isKo ? style.descriptionKo : style.descriptionEn}
          </p>
        </div>
        <div className="flex gap-1 flex-wrap justify-center">
          {style.categories.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="px-2 py-0.5 rounded-full bg-primary-50 text-primary-500 text-[10px] font-medium"
            >
              {cat}
            </span>
          ))}
          {style.categories.length > 3 && (
            <span className="px-2 py-0.5 rounded-full bg-gray-50 text-gray-400 text-[10px]">
              +{style.categories.length - 3}
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}
