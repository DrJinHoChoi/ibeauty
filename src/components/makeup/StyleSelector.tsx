import StyleCard from './StyleCard'
import type { MakeupStyle, MakeupStyleId } from '@/types/makeup.types'

interface StyleSelectorProps {
  styles: MakeupStyle[]
  selectedId: MakeupStyleId | null
  onSelect: (id: MakeupStyleId) => void
}

export default function StyleSelector({ styles, selectedId, onSelect }: StyleSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {styles.map((style) => (
        <StyleCard
          key={style.id}
          style={style}
          selected={selectedId === style.id}
          onClick={() => onSelect(style.id)}
        />
      ))}
    </div>
  )
}
