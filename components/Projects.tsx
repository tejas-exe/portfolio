'use client'

import { useState } from 'react'
import {
  Github,
  Layers,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  Code2,
  Cpu,
  Globe,
  Database,
  ArrowUpRight,
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
    border: 'border-[#B8F2E6]/90',
    hoverBorder: 'hover:border-[#0D9488]',
    badgeBg: 'bg-[#B8F2E6]/40',
    badgeText: 'text-[#0D9488]',
    badgeBorder: 'border-[#B8F2E6]',
    chipBg: 'bg-[#B8F2E6]/25',
    chipText: 'text-[#0F766E]',
    chipBorder: 'border-[#B8F2E6]/60',
    glowShadow: 'hover:shadow-pastel-mint',
  },
  'Web Apps': {
    border: 'border-[#BDE0FE]/90',
    hoverBorder: 'hover:border-[#2563EB]',
    badgeBg: 'bg-[#BDE0FE]/40',
    badgeText: 'text-[#2563EB]',
    badgeBorder: 'border-[#BDE0FE]',
    chipBg: 'bg-[#BDE0FE]/25',
    chipText: 'text-[#1D4ED8]',
    chipBorder: 'border-[#BDE0FE]/60',
    glowShadow: 'hover:shadow-pastel-blue',
  },
  'Full-Stack': {
    border: 'border-[#FFD6BA]/90',
    hoverBorder: 'hover:border-[#EA580C]',
    badgeBg: 'bg-[#FFD6BA]/40',
    badgeText: 'text-[#EA580C]',
    badgeBorder: 'border-[#FFD6BA]',
    chipBg: 'bg-[#FFD6BA]/25',
    chipText: 'text-[#C2410C]',
    chipBorder: 'border-[#FFD6BA]/60',
    glowShadow: 'hover:shadow-pastel-peach',
  },
  'APIs & Automation': {
    border: 'border-[#C9B8FF]/90',
    hoverBorder: 'hover:border-[#7C5CFF]',
    badgeBg: 'bg-[#C9B8FF]/40',
    badgeText: 'text-[#7C5CFF]',
    badgeBorder: 'border-[#C9B8FF]',
    chipBg: 'bg-[#C9B8FF]/25',
    chipText: 'text-[#6D28D9]',
    chipBorder: 'border-[#C9B8FF]/60',
    glowShadow: 'hover:shadow-pastel-lavender',
  },
  'Healthcare': {
    border: 'border-[#FFC8DD]/90',
    hoverBorder: 'hover:border-[#DB2777]',
    badgeBg: 'bg-[#FFC8DD]/40',
    badgeText: 'text-[#DB2777]',
    badgeBorder: 'border-[#FFC8DD]',
    chipBg: 'bg-[#FFC8DD]/25',
    chipText: 'text-[#BE185D]',
    chipBorder: 'border-[#FFC8DD]/60',
    glowShadow: 'hover:shadow-pastel-pink',
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
  { label: 'All', icon: Layers, color: 'text-[#7C5CFF]' },
  { label: 'Enterprise & Cloud', icon: Cpu, color: 'text-[#0D9488]' },
  { label: 'Full-Stack', icon: Database, color: 'text-[#EA580C]' },
  { label: 'Web Apps', icon: Globe, color: 'text-[#2563EB]' },
  { label: 'APIs & Automation', icon: Code2, color: 'text-[#7C5CFF]' },
  { label: 'Healthcare', icon: Sparkles, color: 'text-[#DB2777]' },
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
      {/* Background ambient pastel blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#C9B8FF]/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#B8F2E6]/20 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="section-kicker">Featured Portfolio</p>
            <h2 className="section-heading mb-3">
              Crafted <span className="gradient-pastel-text">Projects & Systems</span>
            </h2>
            <p className="text-[#6B6570] max-w-2xl text-base sm:text-lg leading-relaxed font-normal">
              A showcase of scalable full-stack applications, enterprise platforms, real-time dashboards, and automation pipelines built for high performance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-full border border-[#C9B8FF]/80 bg-white/80 text-[#7C5CFF] text-xs font-bold shadow-soft">
              {projects.length} Production Projects
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-[#C9B8FF] to-[#FFC8DD] text-[#2D2A32] shadow-soft-md scale-[1.02] border border-white'
                    : 'border border-[#2D2A32]/8 bg-white/70 text-[#6B6570] hover:text-[#2D2A32] hover:bg-white hover:border-[#C9B8FF]/50 shadow-soft'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#2D2A32]' : cat.color}`} />
                <span>{cat.label}</span>
                <span
                  className={`ml-1 text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-white/80 text-[#2D2A32]'
                      : 'bg-[#2D2A32]/5 text-[#6B6570]'
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
            const hasLiveLink = Boolean(project.link && project.link !== '#')
            const hasGithub = Boolean(project.github && project.github !== '#')
            const style = categoryStyles[project.category] || categoryStyles['Full-Stack']

            return (
              <div
                key={project.title}
                className={`group flex flex-col justify-between rounded-[28px] bg-white/90 p-5 sm:p-6 backdrop-blur-xl border ${style.border} ${style.hoverBorder} ${style.glowShadow} shadow-soft hover:-translate-y-1.5 transition-all duration-300`}
              >
                <div>
                  {/* Project Image Preview with Overlay */}
                  <div className="relative mb-5 overflow-hidden rounded-[20px] border border-black/5 bg-[#FFF9F5] aspect-[16/9] shadow-inner">
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
                      className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 text-[#2D2A32] hover:bg-white backdrop-blur-md opacity-0 group-hover:opacity-100 shadow-soft transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Subtitle bottom banner */}
                    {project.subtitle && (
                      <div className="absolute bottom-2.5 left-3 right-3 text-xs font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] truncate">
                        {project.subtitle}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills (Pastel Chips) */}
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
                  <h3 className="mb-2 font-heading text-lg font-bold leading-snug text-[#2D2A32] transition-colors group-hover:text-[#7C5CFF]">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B6570] text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5 pt-3.5 border-t border-[#2D2A32]/8">
                    <h4 className="text-xs font-bold text-[#7C5CFF] uppercase tracking-wider mb-2.5">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-xs text-[#6B6570] flex items-start gap-2 leading-tight">
                          <span className="text-[#7C5CFF] font-bold text-sm leading-none mt-0.5">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-4 border-t border-[#2D2A32]/8 flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2.5">
                    {hasLiveLink ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-[#2D2A32] hover:text-[#7C5CFF] transition-colors px-3 py-1.5 rounded-xl bg-[#C9B8FF]/25 hover:bg-[#C9B8FF]/45 border border-[#C9B8FF]/60 shadow-soft"
                      >
                        <span>Visit Live</span>
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-[#6B6570] flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-[#0D9488]" />
                        Production Shipped
                      </span>
                    )}

                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#6B6570] hover:text-[#2D2A32] transition-colors px-2 py-1 rounded-lg hover:bg-black/5"
                      >
                        <Github size={13} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                    className="text-[11px] text-[#6B6570] hover:text-[#7C5CFF] transition-colors font-semibold flex items-center gap-1"
                  >
                    <span>Preview</span>
                    <Maximize2 size={11} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D2A32]/70 p-4 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-[#FFF9F5] border border-white/80 rounded-[32px] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2A32]/8 bg-white/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7C5CFF] animate-pulse" />
                  <h3 className="font-heading font-bold text-[#2D2A32] text-base sm:text-lg">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-xl bg-white hover:bg-[#C9B8FF]/20 text-[#2D2A32] shadow-soft transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="p-4 sm:p-6 flex items-center justify-center overflow-auto bg-white/50">
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-full border border-white/90 bg-white/80 px-6 py-3.5 backdrop-blur-xl shadow-soft">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#0D9488] animate-ping" />
            <span className="text-sm text-[#6B6570] font-medium">
              Need a custom full-stack web application, enterprise dashboard, or automated API pipeline?
            </span>
            <a
              href="#contact"
              className="text-xs font-bold text-[#7C5CFF] hover:text-[#DB2777] underline underline-offset-4 sm:ml-2"
            >
              Let&apos;s build it together &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
