import { Link, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Home, Camera, Image } from 'lucide-react'
import { cn } from '@/utils/cn'

export default function MobileNav() {
  const { t } = useTranslation()
  const location = useLocation()

  const items = [
    { path: '/', icon: Home, label: t('nav.home') },
    { path: '/upload', icon: Camera, label: t('nav.upload') },
    { path: '/gallery', icon: Image, label: t('nav.gallery') },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-lg border-t border-gray-100 safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-4">
        {items.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-colors',
                isActive ? 'text-primary-500' : 'text-gray-400 hover:text-gray-600',
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[11px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
