import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactQueryProvider } from './ReactQueryProvider'
import { ThemeProvider } from '@/components/theme-provider'

import Header from '@/components/header'
import { AppProvider } from '@/context/app.context'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Sonic Việt Nam | Xem chương trình truyền hình trực tuyến, Xem phim trực tuyến',
   description:
      'Xem trực tuyến các bộ phim và chương trình truyền hình của Sonic hoặc phát trực tuyến ngay trên TV thông minh, máy chơi game, máy tính, Mac, di động, máy tính bảng và nhiều thiết bị khác nữa.',
   openGraph: {
      images: '/ogImage.png'
   }
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <ReactQueryProvider>
         <html lang='en' suppressHydrationWarning>
            <body className={inter.className}>
               <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                  <AppProvider>
                     <Header />
                     <main className='container mt-20 mb-5 min-h-screen'>{children}</main>
                     <Footer />
                     <Toaster />
                  </AppProvider>
               </ThemeProvider>
            </body>
         </html>
      </ReactQueryProvider>
   )
}
