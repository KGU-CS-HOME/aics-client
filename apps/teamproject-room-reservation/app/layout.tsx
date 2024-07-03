import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ViewTransitions } from 'next-view-transitions'

import '@aics/ui/globals.css'
import { cn } from '@aics/ui/lib/utils'

const wantedSans = localFont({
  src: '../public/fonts/wanted-sans-variable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI컴퓨터공학부 팀프로젝트실 예약 시스템',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="ko">
      <body className={cn('bg-background antialiased', wantedSans.className)}>
        <ViewTransitions>{children}</ViewTransitions>
      </body>
    </html>
  )
}
