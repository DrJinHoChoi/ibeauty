import ResultCard from './ResultCard'
import type { TransformResult } from '@/types/makeup.types'

interface ResultGalleryProps {
  results: TransformResult[]
  savedIds: Set<string>
  onSave: (result: TransformResult) => void
}

export default function ResultGallery({ results, savedIds, onSave }: ResultGalleryProps) {
  if (results.length === 0) return null

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {results.map((result) => (
        <ResultCard
          key={result.id}
          result={result}
          isSaved={savedIds.has(result.id)}
          onSave={() => onSave(result)}
        />
      ))}
    </div>
  )
}
