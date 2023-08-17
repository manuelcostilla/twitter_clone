import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twitter clon',
  description: 'Clon de Twitter para practicar conceptos de programacion.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> {children} </body>
    </html>
  )
}
