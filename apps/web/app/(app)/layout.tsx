import { SiteFooter } from '../../components/site-footer'
import { SiteHeader } from '../../components/site-header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mb-20 flex-1 py-6 lg:mb-28">{children}</main>
      <SiteFooter />
    </div>
  )
}
