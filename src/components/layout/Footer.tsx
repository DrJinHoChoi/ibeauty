import { useTranslation } from 'react-i18next'
import { Heart } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-primary-400 fill-primary-400" /> {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-gray-600 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
