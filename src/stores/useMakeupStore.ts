import { create } from 'zustand'
import type { MakeupStyleId, MakeupOptions } from '@/types/makeup.types'

interface MakeupState {
  selectedStyle: MakeupStyleId | null
  options: MakeupOptions
  setStyle: (style: MakeupStyleId) => void
  setIntensity: (value: number) => void
  setLipColor: (color: string) => void
  setEyeshadowColor: (color: string) => void
  setSkinTone: (tone: MakeupOptions['skinTone']) => void
  setCustomPrompt: (prompt: string) => void
  reset: () => void
}

const defaultOptions: MakeupOptions = {
  styleId: 'daily',
  intensity: 50,
}

export const useMakeupStore = create<MakeupState>((set) => ({
  selectedStyle: null,
  options: defaultOptions,
  setStyle: (style) =>
    set((state) => ({
      selectedStyle: style,
      options: { ...state.options, styleId: style },
    })),
  setIntensity: (value) =>
    set((state) => ({ options: { ...state.options, intensity: value } })),
  setLipColor: (color) =>
    set((state) => ({ options: { ...state.options, lipColor: color } })),
  setEyeshadowColor: (color) =>
    set((state) => ({ options: { ...state.options, eyeshadowColor: color } })),
  setSkinTone: (tone) =>
    set((state) => ({ options: { ...state.options, skinTone: tone } })),
  setCustomPrompt: (prompt) =>
    set((state) => ({ options: { ...state.options, customPrompt: prompt } })),
  reset: () => set({ selectedStyle: null, options: defaultOptions }),
}))
