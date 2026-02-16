import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import koCommon from './ko/common.json'
import koUpload from './ko/upload.json'
import koMakeup from './ko/makeup.json'
import koResult from './ko/result.json'
import koTutorial from './ko/tutorial.json'
import enCommon from './en/common.json'
import enUpload from './en/upload.json'
import enMakeup from './en/makeup.json'
import enResult from './en/result.json'
import enTutorial from './en/tutorial.json'

i18n.use(initReactI18next).init({
  resources: {
    ko: {
      common: koCommon,
      upload: koUpload,
      makeup: koMakeup,
      result: koResult,
      tutorial: koTutorial,
    },
    en: {
      common: enCommon,
      upload: enUpload,
      makeup: enMakeup,
      result: enResult,
      tutorial: enTutorial,
    },
  },
  lng: 'ko',
  fallbackLng: 'ko',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
})

export default i18n
