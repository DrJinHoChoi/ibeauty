import { createBrowserRouter } from 'react-router'
import { lazy, Suspense } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import Spinner from '@/components/ui/Spinner'

const HomePage = lazy(() => import('@/pages/HomePage'))
const UploadPage = lazy(() => import('@/pages/UploadPage'))
const StyleSelectPage = lazy(() => import('@/pages/StyleSelectPage'))
const ResultPage = lazy(() => import('@/pages/ResultPage'))
const TutorialViewPage = lazy(() => import('@/pages/TutorialViewPage'))
const GalleryPage = lazy(() => import('@/pages/GalleryPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function LazyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <Spinner size="lg" />
      </div>
    }>
      {children}
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { path: '/', element: <LazyWrapper><HomePage /></LazyWrapper> },
      { path: '/upload', element: <LazyWrapper><UploadPage /></LazyWrapper> },
      { path: '/style-select', element: <LazyWrapper><StyleSelectPage /></LazyWrapper> },
      { path: '/result', element: <LazyWrapper><ResultPage /></LazyWrapper> },
      { path: '/tutorial/:styleId', element: <LazyWrapper><TutorialViewPage /></LazyWrapper> },
      { path: '/gallery', element: <LazyWrapper><GalleryPage /></LazyWrapper> },
      { path: '*', element: <LazyWrapper><NotFoundPage /></LazyWrapper> },
    ],
  },
])
