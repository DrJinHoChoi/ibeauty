import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import Button from '@/components/ui/Button'

export default function NotFoundPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="text-8xl mb-6">💄</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">404</h1>
      <p className="text-gray-500 mb-8">{t('errors.notFound')}</p>
      <Button onClick={() => navigate('/')}>
        {t('nav.home')}
      </Button>
    </div>
  )
}
