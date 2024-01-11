import '@/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: '경기대학교 AI컴퓨터공학부',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={cn('font-pretendard', pretendard.variable)}>
        <div className="flex min-h-screen flex-col bg-background">
          <SiteHeader />
          <div className="container flex-1 px-6">{children}</div>
        </div>
      </body>
    </html>
  )
}
