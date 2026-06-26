import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { DownloadToast } from '@/components/DownloadToast'
import './globals.css'

const beVietnamPro = localFont({
  variable: '--font-be-vietnam-pro',
  display: 'swap',
  src: [
    { path: '../fonts/BeVietnamPro-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/BeVietnamPro-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/BeVietnamPro-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../fonts/BeVietnamPro-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/BeVietnamPro-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: '../fonts/BeVietnamPro-Black.ttf', weight: '900', style: 'normal' },
  ],
})

const shouldEnableAnalytics = process.env.VERCEL === '1'

export const metadata: Metadata = {
  title: 'PlantCare Hub - Chăm cây thông minh bằng AI',
  description: 'Ứng dụng chăm cây thông minh giúp chẩn đoán bệnh cây bằng AI, nhắc lịch chăm sóc và quản lý vườn nhà lẫn vườn ươm.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <DownloadToast />
        {shouldEnableAnalytics && <Analytics />}
      </body>
    </html>
  )
}

