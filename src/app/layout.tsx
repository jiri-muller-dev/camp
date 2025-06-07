import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: 'Camp',
  description: 'Youth camp registration',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[hsl(46,21%,83%)]">
        <div className="text-center">
          <img
            src="/logo-v2-camp-thrive.png"
            className="mx-auto my-4 max-h-40"
          />
        </div>
        <Navigation />
        <div>{children}</div>
      </body>
    </html>
  )
}
