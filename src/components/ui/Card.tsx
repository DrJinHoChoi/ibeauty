import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
  selected?: boolean
}

export default function Card({ className, hoverable, selected, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden',
        hoverable && 'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer',
        selected && 'ring-2 ring-primary-500 border-primary-300',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
