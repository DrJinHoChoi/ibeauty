import { Link, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Sparkles, Globe } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { cn } from '@/utils/cn'

export default function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const { language, setLanguage } = useAppStore()

  const toggleLanguage = () => {
    const newLang = language === 'ko' ? 'en' : 'ko'
    setLanguage(newLang)
    i18n.changeLanguage(newLang)
  }

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/upload', label: t('nav.upload') },
    { path: '/gallery', label: t('nav.gallery') },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Sparkles className="h-6 w-6 text-primary-500 group-hover:text-primary-600 transition-colors" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            {t('appName')}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                location.pathname === item.path
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <Globe className="h-4 w-4" />
          <span>{language === 'ko' ? 'EN' : '한국어'}</span>
        </button>
      </div>
    </header>
  )
}
