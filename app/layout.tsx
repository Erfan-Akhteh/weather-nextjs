import type { Metadata } from 'next'

import './globals.css'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[url(../public/sky-background-video-conferencing_23-2148639325.jpg)] ' suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
