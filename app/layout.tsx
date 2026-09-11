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
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='%23C9B8FF'/><text x='50' y='68' font-size='56' font-family='sans-serif' font-weight='bold' text-anchor='middle' fill='%232D2A32'>TK</text></svg>"
        />
      </head>
      <body className="bg-[#FFF9F5] text-[#2D2A32] antialiased selection:bg-[#FFC8DD] selection:text-[#2D2A32]">
        {children}
      </body>
    </html>
  )
}
