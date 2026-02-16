const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

export class ApiError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async post<T>(endpoint: string, body: FormData | object, options?: RequestInit): Promise<T> {
    const isFormData = body instanceof FormData
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: isFormData ? undefined : { 'Content-Type': 'application/json' },
      body: isFormData ? body : JSON.stringify(body),
      signal: AbortSignal.timeout(120_000),
      ...options,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      throw new ApiError(response.status, errorData?.error?.message || `HTTP ${response.status}`)
    }

    return response.json()
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`)
    if (!response.ok) {
      throw new ApiError(response.status, `HTTP ${response.status}`)
    }
    return response.json()
  }
}

export const apiClient = new ApiClient(API_BASE_URL)
