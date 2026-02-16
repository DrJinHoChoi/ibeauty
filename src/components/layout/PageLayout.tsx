import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ToastContainer from '@/components/ui/Toast'

export default function PageLayout() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
      <ToastContainer />
    </>
  )
}
