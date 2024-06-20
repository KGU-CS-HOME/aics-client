import { LeftNavigationBar } from '../../../components/left-navigation-bar'

export default function LnbLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex max-w-screen-2xl gap-20 pt-6">
      <div className="hidden w-64 lg:block">
        <LeftNavigationBar />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  )
}
