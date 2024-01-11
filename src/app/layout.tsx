import '@/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'

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
        {children}
      </body>
    </html>
  )
}
