import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tejas Kumarley | Full-Stack Engineer',
  description: 'Portfolio of Tejas Kumarley - Full-Stack Software Engineer with 4+ years of experience building web applications, scalable APIs, and real-time systems.',
  openGraph: {
    title: 'Tejas Kumarley | Full-Stack Engineer',
    description: 'Portfolio showcasing projects in React, Next.js, Node.js, and modern cloud technologies',
    url: 'https://portfolio-b117d.web.app',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='%230A1830' stroke='%23F5C542' stroke-width='4'/><circle cx='35' cy='42' r='5' fill='%23EAF4FB'/><circle cx='65' cy='42' r='5' fill='%23EAF4FB'/><path d='M35 65 Q50 74 65 65' stroke='%23F5C542' stroke-width='5' fill='none' stroke-linecap='round'/></svg>"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
