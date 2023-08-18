import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'I/O: Bright/Dark/In',
  description: 'Compare the various mixes of Peter Gabriel’s I/O',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'inter.className'}>{children}</body>
    </html>
  )
}
