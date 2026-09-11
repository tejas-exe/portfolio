'use client'

import { useState } from 'react'
import {
  Layers,
  Sparkles,
  Maximize2,
  X,
  Code2,
  Cpu,
  Globe,
  Database,
} from 'lucide-react'

type ProjectCategory = 'All' | 'Enterprise & Cloud' | 'Full-Stack' | 'Web Apps' | 'APIs & Automation' | 'Healthcare'

interface CategoryStyle {
  border: string
  hoverBorder: string
  badgeBg: string
  badgeText: string
  badgeBorder: string
  chipBg: string
  chipText: string
  chipBorder: string
  glowShadow: string
}

const categoryStyles: Record<string, CategoryStyle> = {
  'Enterprise & Cloud': {
    border: 'border-spirit-400/30',
    hoverBorder: 'hover:border-spirit-400/70',
    badgeBg: 'bg-spirit-500/20',
    badgeText: 'text-spirit-300',
    badgeBorder: 'border-spirit-400/40',
    chipBg: 'bg-spirit-500/15',
    chipText: 'text-spirit-300',
    chipBorder: 'border-spirit-400/30',
    glowShadow: 'hover:shadow-spirit-glow',
  },
  'Web Apps': {
    border: 'border-sea-300/30',
    hoverBorder: 'hover:border-sea-300/70',
    badgeBg: 'bg-sea-500/25',
    badgeText: 'text-sea-200',
    badgeBorder: 'border-sea-300/40',
    chipBg: 'bg-sea-500/20',
    chipText: 'text-sea-200',
    chipBorder: 'border-sea-300/30',
    glowShadow: 'hover:shadow-sea-glow',
  },
  'Full-Stack': {
    border: 'border-lantern-500/30',
    hoverBorder: 'hover:border-lantern-400/70',
    badgeBg: 'bg-lantern-500/20',
    badgeText: 'text-lantern-300',
    badgeBorder: 'border-lantern-500/40',
    chipBg: 'bg-lantern-500/15',
    chipText: 'text-lantern-300',
    chipBorder: 'border-lantern-500/30',
    glowShadow: 'hover:shadow-lantern',
  },
  'APIs & Automation': {
    border: 'border-noface/40',
    hoverBorder: 'hover:border-noface-300',
    badgeBg: 'bg-noface/25',
    badgeText: 'text-noface-300',
    badgeBorder: 'border-noface-300/40',
    chipBg: 'bg-noface/20',
    chipText: 'text-noface-300',
    chipBorder: 'border-noface-300/30',
    glowShadow: 'hover:shadow-sea-glow',
  },
  'Healthcare': {
    border: 'border-sakura-400/30',
    hoverBorder: 'hover:border-sakura-300/70',
    badgeBg: 'bg-sakura-500/20',
    badgeText: 'text-sakura-300',
    badgeBorder: 'border-sakura-400/40',
    chipBg: 'bg-sakura-500/15',
    chipText: 'text-sakura-300',
    chipBorder: 'border-sakura-400/30',
    glowShadow: 'hover:shadow-lantern',
  },
}

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

const categories: { label: ProjectCategory; icon: any; color: string }[] = [
  { label: 'All', icon: Layers, color: 'text-lantern-300' },
  { label: 'Enterprise & Cloud', icon: Cpu, color: 'text-spirit-300' },
  { label: 'Full-Stack', icon: Database, color: 'text-lantern-400' },
  { label: 'Web Apps', icon: Globe, color: 'text-sea-200' },
  { label: 'APIs & Automation', icon: Code2, color: 'text-noface-300' },
  { label: 'Healthcare', icon: Sparkles, color: 'text-sakura-300' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 sm:py-28 overflow-hidden">
      {/* Background ambient night mists */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-sea-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-spirit-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      {/* Star dust layer */}
      <div className="starfield-dust pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="section-kicker">Featured Portfolio</p>
            <h2 className="section-heading mb-3">
              Crafted <span className="gradient-lantern-text font-display">Projects &amp; Systems</span>
            </h2>
            <p className="text-mist max-w-2xl text-base sm:text-lg leading-relaxed font-normal">
              A showcase of scalable full-stack applications, enterprise platforms, real-time dashboards, and automation pipelines built for high performance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-full border border-lantern-500/40 bg-night-900/80 text-lantern-300 text-xs font-bold shadow-soft backdrop-blur-md">
              ✦ {projects.length} Production Projects
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon
            const count =
              cat.label === 'All'
                ? projects.length
                : projects.filter((p) => p.category === cat.label).length
            const isActive = activeCategory === cat.label

            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap backdrop-blur-md ${
                  isActive
                    ? 'bg-gradient-to-r from-lantern-300 to-lantern-500 text-[#1A1206] shadow-lantern scale-[1.02] border border-lantern-200'
                    : 'border border-sea-300/20 bg-night-900/70 text-mist hover:text-ink hover:bg-night-800/80 hover:border-lantern-500/40 shadow-soft'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#1A1206]' : cat.color}`} />
                <span>{cat.label}</span>
                <span
                  className={`ml-1 text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-night-950/20 text-[#1A1206]'
                      : 'bg-sea-300/10 text-mist-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const style = categoryStyles[project.category] || categoryStyles['Full-Stack']

            return (
              <div
                key={project.title}
                className={`group flex flex-col rounded-[28px] bg-night-900/55 p-5 sm:p-6 backdrop-blur-xl border ${style.border} ${style.hoverBorder} ${style.glowShadow} shadow-soft hover:-translate-y-1.5 transition-all duration-300`}
              >
                <div>
                  {/* Project Image Preview with Overlay */}
                  <div className="relative mb-5 overflow-hidden rounded-[20px] border border-sea-300/15 bg-night-950/60 aspect-[16/9] shadow-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-md shadow-sm ${style.badgeBg} ${style.badgeText} ${style.badgeBorder}`}
                      >
                        {project.badge}
                      </span>
                    </div>

                    {/* Image Preview / Zoom button */}
                    <button
                      onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                      title="View full preview"
                      className="absolute top-3 right-3 p-2 rounded-xl bg-night-950/80 text-ink hover:bg-night-900 backdrop-blur-md opacity-0 group-hover:opacity-100 shadow-soft transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Subtitle bottom banner */}
                    {project.subtitle && (
                      <div className="absolute bottom-2.5 left-3 right-3 text-xs font-semibold text-ink drop-shadow-[0_1px_3px_rgba(3,10,24,0.95)] truncate">
                        {project.subtitle}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border ${style.chipBg} ${style.chipText} ${style.chipBorder}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="mb-2 font-heading text-lg font-bold leading-snug text-ink transition-colors group-hover:text-lantern-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-mist text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5 pt-3.5 border-t border-sea-300/15">
                    <h4 className="text-xs font-bold text-lantern-300 uppercase tracking-wider mb-2.5">
                      ✦ Key Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-xs text-mist flex items-start gap-2 leading-tight">
                          <span className="text-spirit-400 font-bold text-sm leading-none mt-0.5">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-night-950/85 p-4 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-night-950/85 border border-sea-300/25 rounded-[32px] overflow-hidden shadow-soft-lg flex flex-col backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-sea-300/15 bg-night-950/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-lantern-400 animate-pulse shadow-lantern" />
                  <h3 className="font-heading font-bold text-ink text-base sm:text-lg">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-xl bg-night-800 hover:bg-lantern-500/20 text-ink shadow-soft transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="p-4 sm:p-6 flex items-center justify-center overflow-auto bg-night-950/60">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-soft-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-full border border-sea-300/20 bg-night-900/80 px-6 py-3.5 backdrop-blur-xl shadow-soft">
            <span className="flex h-2.5 w-2.5 rounded-full bg-spirit-400 animate-ping" />
            <span className="text-sm text-mist font-medium">
              Need a custom full-stack web application, enterprise dashboard, or automated API pipeline?
            </span>
            <a
              href="#contact"
              className="text-xs font-bold text-lantern-300 hover:text-lantern-200 underline underline-offset-4 sm:ml-2"
            >
              Let&apos;s build it together &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
