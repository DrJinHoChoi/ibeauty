import { create } from 'zustand'

interface PhotoState {
  originalImage: string | null
  croppedImage: string | null
  imageFile: File | null
  isWebcamMode: boolean
  setOriginalImage: (image: string, file?: File) => void
  setCroppedImage: (image: string) => void
  setWebcamMode: (mode: boolean) => void
  reset: () => void
}

export const usePhotoStore = create<PhotoState>((set) => ({
  originalImage: null,
  croppedImage: null,
  imageFile: null,
  isWebcamMode: false,
  setOriginalImage: (image, file) =>
    set({ originalImage: image, croppedImage: image, imageFile: file ?? null }),
  setCroppedImage: (image) => set({ croppedImage: image }),
  setWebcamMode: (mode) => set({ isWebcamMode: mode }),
  reset: () =>
    set({ originalImage: null, croppedImage: null, imageFile: null, isWebcamMode: false }),
}))
