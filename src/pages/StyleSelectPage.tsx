import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Sparkles, ArrowLeft } from 'lucide-react'
import StyleSelector from '@/components/makeup/StyleSelector'
import CategoryFilter from '@/components/makeup/CategoryFilter'
import MakeupOptions from '@/components/makeup/MakeupOptions'
import Button from '@/components/ui/Button'
import { usePhotoStore } from '@/stores/usePhotoStore'
import { useMakeupStore } from '@/stores/useMakeupStore'
import { makeupStyles, styleCategories } from '@/data/makeup-styles'

export default function StyleSelectPage() {
  const { t } = useTranslation('makeup')
  const navigate = useNavigate()
  const { originalImage } = usePhotoStore()
  const {
    selectedStyle, options, setStyle, setIntensity,
    setLipColor, setEyeshadowColor, setSkinTone,
  } = useMakeupStore()
  const [activeCategory, setActiveCategory] = useState('all')

  // Redirect if no photo
  if (!originalImage) {
    navigate('/upload', { replace: true })
    return null
  }

  const filteredStyles = useMemo(() => {
    const cat = styleCategories.find((c) => c.id === activeCategory)
    return cat ? makeupStyles.filter(cat.filter) : makeupStyles
  }, [activeCategory])

  const handleStart = () => {
    if (!selectedStyle) return
    navigate('/result')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/upload')}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-6 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('common:actions.back')}
      </button>

      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t('title')}</h1>
        <p className="text-gray-500">{t('subtitle')}</p>
      </div>

      {/* Uploaded photo thumbnail */}
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary-200 shadow-lg">
          <img src={originalImage} alt="Uploaded" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="space-y-6">
        <CategoryFilter
          categories={styleCategories}
          activeId={activeCategory}
          onChange={setActiveCategory}
        />

        <StyleSelector
          styles={filteredStyles}
          selectedId={selectedStyle}
          onSelect={setStyle}
        />

        {selectedStyle && (
          <>
            <MakeupOptions
              options={options}
              onIntensityChange={setIntensity}
              onLipColorChange={setLipColor}
              onEyeshadowColorChange={setEyeshadowColor}
              onSkinToneChange={setSkinTone}
            />

            <Button size="lg" className="w-full" onClick={handleStart}>
              <Sparkles className="h-5 w-5" />
              {t('startMakeup')}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
