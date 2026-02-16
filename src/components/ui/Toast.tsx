import { useEffect, useState } from 'react'
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface ToastData {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
}

let addToastFn: ((toast: Omit<ToastData, 'id'>) => void) | null = null

export function toast(data: Omit<ToastData, 'id'>) {
  addToastFn?.(data)
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastData[]>([])

  useEffect(() => {
    addToastFn = (data) => {
      const id = crypto.randomUUID()
      setToasts((prev) => [...prev, { ...data, id }])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, data.duration ?? 3000)
    }
    return () => { addToastFn = null }
  }, [])

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <AlertCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            'flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-lg border animate-in slide-in-from-right',
            t.type === 'error' && 'border-red-200',
            t.type === 'success' && 'border-green-200',
            t.type === 'info' && 'border-blue-200',
          )}
        >
          {icons[t.type]}
          <span className="text-sm text-gray-700">{t.message}</span>
          <button
            onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))}
            className="p-0.5 rounded hover:bg-gray-100 ml-2 cursor-pointer"
          >
            <X className="h-3.5 w-3.5 text-gray-400" />
          </button>
        </div>
      ))}
    </div>
  )
}
