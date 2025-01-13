import './globals.css'
import '../public/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Productora Audiovisual - Marketing Digital y Contenido Comercial',
  description: 'Somos una productora audiovisual independiente especializada en marketing digital y creación de contenido comercial para redes sociales.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

