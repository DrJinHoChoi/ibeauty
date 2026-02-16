import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { TransformResult } from '@/types/makeup.types'

interface ResultState {
  currentResults: TransformResult[]
  savedResults: TransformResult[]
  isTransforming: boolean
  error: string | null
  setResults: (results: TransformResult[]) => void
  saveResult: (result: TransformResult) => void
  removeSavedResult: (id: string) => void
  setTransforming: (value: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

export const useResultStore = create<ResultState>()(
  persist(
    (set) => ({
      currentResults: [],
      savedResults: [],
      isTransforming: false,
      error: null,
      setResults: (results) => set({ currentResults: results, error: null }),
      saveResult: (result) =>
        set((state) => ({ savedResults: [result, ...state.savedResults] })),
      removeSavedResult: (id) =>
        set((state) => ({
          savedResults: state.savedResults.filter((r) => r.id !== id),
        })),
      setTransforming: (value) => set({ isTransforming: value }),
      setError: (error) => set({ error }),
      reset: () => set({ currentResults: [], isTransforming: false, error: null }),
    }),
    {
      name: 'ibeauty-results',
      partialize: (state) => ({ savedResults: state.savedResults }),
    },
  ),
)
