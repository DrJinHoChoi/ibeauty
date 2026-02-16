import { apiClient } from './api.client'
import { dataURItoBlob } from '@/utils/image.utils'
import type { MakeupOptions, TransformResult } from '@/types/makeup.types'

interface TransformResponse {
  success: boolean
  data: TransformResult[]
}

export const transformService = {
  async generateMakeup(imageBase64: string, options: MakeupOptions): Promise<TransformResult[]> {
    const formData = new FormData()
    formData.append('image', dataURItoBlob(imageBase64), 'photo.jpg')
    formData.append('options', JSON.stringify(options))

    const response = await apiClient.post<TransformResponse>('/transform', formData)
    return response.data
  },
}
