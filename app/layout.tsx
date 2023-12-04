import type { Metadata } from 'next'
import './globals.css'
import Modal from '@/components/Modal'

export const metadata: Metadata = {
  title: 'my-flow',
  description: 'Your flow, your way',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#f5f5f5]'>
        {children}
        <Modal />
      </body>
    </html>
  )
}
