'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Maximize2, Sprout, X } from 'lucide-react'

type ProjectCategory = 'All' | 'Enterprise & Cloud' | 'Full-Stack' | 'Web Apps' | 'APIs & Automation' | 'Healthcare'

interface Project {
  title: string
  subtitle?: string
  category: ProjectCategory
  description: string
  image: string
  badge: string
  tech: string[]
  highlights: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'Aryos AI – Solar Energy Monitoring Platform',
    subtitle: 'Enterprise CleanTech Platform',
    category: 'Enterprise & Cloud',
    image: '/projects/Aryos.jpeg',
    badge: 'Live Platform',
    description:
      'Built a comprehensive solar-energy monitoring system tracking generation, system performance, and estimated savings with real-time charts. Delivered automated reports, configurable notifications via BullMQ, and a super-admin control panel.',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'AWS S3', 'Docker', 'BullMQ'],
    highlights: [
      'Real-time generation telemetry refreshed every 5 minutes',
      'Automated daily and weekly PDF energy output reports',
      'Multi-stage solar site onboarding and device management',
      'Super-admin panel for clients, staff roles, and analytics',
    ],
    link: 'https://aryos.ai',
    github: '#',
  },
  {
    title: 'Jaina – Digital Humanities Research Platform',
    subtitle: 'Stanford University Research Project',
    category: 'Web Apps',
    image: '/projects/jaina.avif',
    badge: 'Stanford Univ',
    description:
      'Built a public research website and admin data-management panel for Stanford University. Enabled researchers to create, connect, and organize people, scriptures, events, locations, and families with interactive visualizations.',
    tech: ['Next.js', 'React', 'D3.js', 'React Flow', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Interactive relationship networks and interactive family trees',
      'Hierarchy, precedence, and historical lineage visualizers',
      'Dynamic geographic maps with historical location coordinates',
      'Researcher data management panel with bulk editing tools',
    ],
    link: 'https://jaina.stanford.edu',
    github: '#',
  },
  {
    title: 'DXC Technology Dashboard',
    subtitle: 'Internal Enterprise Analytics',
    category: 'Enterprise & Cloud',
    image: '/projects/DXC.jpg',
    badge: 'Enterprise',
    description:
      'Built an internal admin dashboard with React and Redux Toolkit. Integrated REST APIs for real-time SEO data tracking. Deployed on AWS with secure email alerts using Nodemailer.',
    tech: ['React', 'Redux Toolkit', 'REST APIs', 'AWS', 'Nodemailer', 'Node.js', 'Tailwind CSS'],
    highlights: [
      'Real-time SEO performance tracking and analytical metrics',
      'High-throughput multi-source REST API data synchronization',
      'Cloud deployment on AWS infrastructure with high availability',
      'Automated secure email notifications and alerts with Nodemailer',
    ],
    link: '#',
    github: '#',
  },
  {
    title: 'Magirsha Industries Inventory System',
    subtitle: 'Industrial Supply Chain & ERP',
    category: 'Full-Stack',
    image: '/projects/magirsha.jpg',
    badge: 'ERP & Logistics',
    description:
      'Developed an inventory management system with React, Express.js, and MySQL. Designed product, raw material, and production tracking modules with RBAC.',
    tech: ['React', 'Express.js', 'MySQL', 'Node.js', 'RBAC', 'REST APIs'],
    highlights: [
      'End-to-end raw material and finished product stock management',
      'Comprehensive production lifecycle monitoring modules',
      'Granular Role-Based Access Control (RBAC) security system',
      'Optimized relational database schemas with high-speed querying',
    ],
    link: '#',
    github: '#',
  },
  {
    title: 'V2 HR Admin Panel',
    subtitle: 'Enterprise HR & Operations Portal',
    category: 'Enterprise & Cloud',
    image: '/projects/v2-hr.jpg',
    badge: 'HRTech Portal',
    description:
      'Created an HR system to track attendance, tasks, and leave. Implemented JWT-based authentication and a responsive UI using React.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
    highlights: [
      'Automated employee attendance, tasks, and leave management',
      'Secure JWT authentication with session token validation',
      'Performance evaluation and employee lifecycle tracking modules',
      'Modern, highly-responsive administrative UI components',
    ],
    link: '#',
    github: '#',
  },
  {
    title: 'Healthcare Web App – Healing Leaves PharmaCann',
    subtitle: 'Telehealth & Pharmacy Orders',
    category: 'Healthcare',
    image: '/projects/healing-leaves.png',
    badge: 'Telehealth',
    description:
      'Enabled virtual consultations and medicine orders. Integrated government APIs and created dashboards for doctors and patients.',
    tech: ['React', 'Node.js', 'Express.js', 'Government APIs', 'MongoDB', 'REST APIs'],
    highlights: [
      'Virtual doctor video/chat consultations and prescription scheduling',
      'Integrated pharmaceutical medicine ordering and delivery flow',
      'Compliant integration with official government health APIs',
      'Custom role-tailored dashboards for doctors and patients',
    ],
    link: '#',
    github: '#',
  },
  {
    title: 'Premium Sports Ticket Booking',
    subtitle: 'High-Performance Ticketing Engine',
    category: 'Web Apps',
    image: '/projects/premium-sport-tickets.avif',
    badge: 'Live Events',
    description:
      'Built a real-time ticket booking platform with secure payments, using Node.js and Vanilla JS. Included email confirmations and dynamic seat availability.',
    tech: ['Node.js', 'Vanilla JS', 'Express.js', 'Payment Gateway', 'Nodemailer', 'WebSockets'],
    highlights: [
      'Real-time interactive seat availability engine with instant locking',
      'Secure online payment gateway checkout integration',
      'Automated PDF ticket generation and email booking confirmations',
      'Ultra-fast Vanilla JavaScript client-side rendering',
    ],
    link: '#',
    github: '#',
  },
  {
    title: 'Delonghi Return Label Generator',
    subtitle: 'Logistics & Barcode Printing System',
    category: 'Enterprise & Cloud',
    image: '/projects/delonghi.jpg',
    badge: 'Logistics API',
    description:
      'React-based app using FedEx Web Store API to print barcoded return labels with ZPL. Integrated customer support tools for status tracking.',
    tech: ['React', 'FedEx API', 'ZPL', 'Node.js', 'Barcode Printing', 'REST APIs'],
    highlights: [
      'Automated barcoded return label rendering with Zebra (ZPL)',
      'FedEx Web Store API integration for instantaneous parcel creation',
      'Real-time shipment tracking and return order status pipeline',
      'Integrated customer support tools for quick resolution',
    ],
    link: '#',
    github: '#',
  },
  {
    title: 'RateChecker API Automation',
    subtitle: 'Financial Rate Scraper & Cron Pipeline',
    category: 'APIs & Automation',
    image: '/projects/ratechecker.jpg',
    badge: 'Automation',
    description:
      'Node.js script for mortgage rate tracking via XML APIs. Automated daily email updates using NodeCron and MongoDB.',
    tech: ['Node.js', 'XML APIs', 'NodeCron', 'MongoDB', 'Nodemailer', 'REST APIs'],
    highlights: [
      'Automated mortgage rate tracking via external XML APIs',
      'Scheduled recurring daily cron jobs with NodeCron',
      'Historical rate storage and schema indexing in MongoDB',
      'Automated daily rate comparison email notifications to users',
    ],
    link: '#',
    github: '#',
  },
]


const categories: ProjectCategory[] = ['All', 'Enterprise & Cloud', 'Full-Stack', 'Web Apps', 'APIs & Automation', 'Healthcare']

export default function Projects() {
  const [category, setCategory] = useState<ProjectCategory>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (!selected) return
    const element = dialog.current
    const previousOverflow = document.body.style.overflow
    element?.showModal()
    document.body.style.overflow = 'hidden'
    return () => { element?.close(); document.body.style.overflow = previousOverflow }
  }, [selected])
  const filtered = category === 'All' ? projects : projects.filter(project => project.category === category)
  return <section id="projects" className="projects-section section-space">
    <div className="shell">
      <div className="section-top" data-reveal="up"><div><p className="eyebrow">01 / The field journal</p><h2>Ideas planted.<br /><em>Real things built.</em></h2></div><div className="section-aside"><p>Full-stack applications, enterprise platforms, and little pieces of a bigger picture.</p><span className="handwritten">A collection of {projects.length} projects ↙</span></div></div>
      <div className="filter-bar" role="group" aria-label="Filter projects">{categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}{item === 'All' && <span>{projects.length}</span>}</button>)}</div>
      <p className="sr-only" aria-live="polite">{filtered.length} projects shown</p>
      <div className="project-grid">
        {filtered.map((project, index) => <article key={project.title} className="project-entry" data-reveal={index % 2 ? 'right' : 'up'}>
          <div className="project-paper">
            <div className="project-image-wrap">
              <button className="project-preview" onClick={() => setSelected(project)} aria-label={`Enlarge preview of ${project.title}`}>
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 650px) 90vw, (max-width: 980px) 45vw, 560px" className="project-image" />
                <span className="image-zoom"><Maximize2 size={16} /> Explore preview</span>
              </button>
              <span className="project-index">FIELD NOTE / {String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
            </div>
            <div className="project-body"><p className="project-category">{project.category} <span>· {project.badge}</span></p><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p>
              <div className="tech-tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
              <details className="project-details"><summary>Behind the build <span>+</span></summary><ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></details>
              {project.link && project.link !== '#' && <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">Visit live project <ArrowUpRight size={16} /></a>}
              {project.github && project.github !== '#' && <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">View source <ArrowUpRight size={16} /></a>}
            </div>
          </div>
        </article>)}
      </div>
      <div className="project-outro" data-reveal="up"><Sprout size={23} /><p>Have an idea ready to take root?</p><a className="text-link" href="#contact">Let’s build it together <ArrowUpRight size={17} /></a></div>
    </div>
    <dialog ref={dialog} className="preview-dialog" aria-labelledby="preview-title" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null) }}>
      {selected && <div className="preview-content"><div className="preview-heading"><h2 id="preview-title">{selected.title}</h2><button autoFocus onClick={() => setSelected(null)} aria-label="Close preview"><X size={22} /></button></div><div className="preview-full-image"><Image src={selected.image} alt={selected.title} fill sizes="90vw" style={{ objectFit: 'contain' }} /></div></div>}
    </dialog>
  </section>
}
