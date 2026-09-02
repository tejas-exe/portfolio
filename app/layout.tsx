import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tejas Kumarley | Full-Stack Engineer',
  description: 'Portfolio of Tejas Kumarley - Full-Stack Software Engineer with 4+ years of experience',
  openGraph: {
    title: 'Tejas Kumarley | Full-Stack Engineer',
    description: 'Portfolio showcasing projects in React, Next.js, Node.js, and more',
    url: 'https://portfolio-b117d.web.app',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23ff6b35'>T</text></svg>" />
      </head>
      <body className="bg-primary text-white antialiased">
        {children}
      </body>
    </html>
  )
}
