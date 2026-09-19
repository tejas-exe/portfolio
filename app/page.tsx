import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StoryMotion from '@/components/StoryMotion'
import SceneBackdrop from '@/components/SceneBackdrop'

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SceneBackdrop />
      <Navigation />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <StoryMotion />
    </>
  )
}
