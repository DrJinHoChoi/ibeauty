import { cn } from '@/utils/cn'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-primary-200 border-t-primary-500',
        {
          'h-5 w-5 border-2': size === 'sm',
          'h-8 w-8 border-3': size === 'md',
          'h-12 w-12 border-4': size === 'lg',
        },
        className,
      )}
    />
  )
}
