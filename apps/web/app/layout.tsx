import type { Metadata } from 'next'
import localFont from 'next/font/local'

import '@repo/ui/globals.css'
import { cn } from '@repo/ui/lib/utils'

const wantedSans = localFont({
  src: '../public/fonts/wanted-sans-variable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '경기대학교 AI컴퓨터공학부',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="ko">
      <body className={cn('bg-background antialiased', wantedSans.className)}>
        {children}
      </body>
    </html>
  )
}
