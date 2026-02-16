import { useTranslation } from 'react-i18next'
import { cn } from '@/utils/cn'

interface CategoryFilterProps {
  categories: readonly { id: string }[]
  activeId: string
  onChange: (id: string) => void
}

export default function CategoryFilter({ categories, activeId, onChange }: CategoryFilterProps) {
  const { t } = useTranslation('makeup')

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer',
            activeId === cat.id
              ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          )}
        >
          {t(`categories.${cat.id}`)}
        </button>
      ))}
    </div>
  )
}
