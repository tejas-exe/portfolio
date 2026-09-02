'use client'

import { useState } from 'react'
import {
  ExternalLink,
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
} from 'lucide-react'

type ProjectCategory = 'All' | 'Enterprise & Cloud' | 'Full-Stack' | 'Web Apps' | 'APIs & Automation' | 'Healthcare'

interface Project {
  title: string
  subtitle?: string
  category: ProjectCategory
  description: string
  image: string
  badge: string
  badgeColor?: string
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
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
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
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
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
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
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
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
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
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
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
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
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
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
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
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
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
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
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

const categories: { label: ProjectCategory; icon: any }[] = [
  { label: 'All', icon: Layers },
  { label: 'Enterprise & Cloud', icon: Cpu },
  { label: 'Full-Stack', icon: Database },
  { label: 'Web Apps', icon: Globe },
  { label: 'APIs & Automation', icon: Code2 },
  { label: 'Healthcare', icon: Sparkles },
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
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="section-kicker">Featured Portfolio</p>
            <h2 className="section-heading mb-3">
              Crafted <span className="gradient-text">Projects & Systems</span>
            </h2>
            <p className="text-white/60 max-w-2xl text-base sm:text-lg">
              A showcase of scalable full-stack applications, enterprise platforms, real-time dashboards, and automation pipelines built for high performance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm font-semibold">
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-400 to-amber-500 text-zinc-950 shadow-lg shadow-orange-500/25 scale-[1.02]'
                    : 'border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-orange-400/40 hover:bg-white/[0.07]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span
                  className={`ml-1 text-[11px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-zinc-950/20 text-zinc-950 font-bold'
                      : 'bg-white/10 text-white/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const hasLiveLink = Boolean(project.link && project.link !== '#')
            const hasGithub = Boolean(project.github && project.github !== '#')

            return (
              <div
                key={project.title}
                className="card group flex flex-col justify-between border-white/[0.08] hover:border-orange-400/50 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div>
                  {/* Project Image Preview with Overlay */}
                  <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/80 aspect-[16/9]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback in case of missing image
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${
                          project.badgeColor || 'bg-orange-500/20 text-orange-300 border-orange-500/30'
                        }`}
                      >
                        {project.badge}
                      </span>
                    </div>

                    {/* Image Preview / Zoom button */}
                    <button
                      onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                      title="View full preview"
                      className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 text-white/70 hover:text-white hover:bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Subtitle bottom banner */}
                    {project.subtitle && (
                      <div className="absolute bottom-2.5 left-3 right-3 text-xs font-medium text-white/80 drop-shadow truncate">
                        {project.subtitle}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] font-semibold bg-orange-400/10 text-orange-300 border border-orange-400/20 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="mb-2 text-lg font-bold leading-snug text-white transition-colors group-hover:text-orange-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5 pt-3 border-t border-white/[0.06]">
                    <h4 className="text-xs font-semibold text-orange-400/90 uppercase tracking-wider mb-2.5">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-xs text-white/60 flex items-start gap-2 leading-tight">
                          <span className="text-orange-400 text-sm leading-none mt-0.5">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3">
                    {hasLiveLink ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-orange-300 hover:text-orange-200 transition-colors px-3 py-1.5 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20"
                      >
                        <span>Visit Live</span>
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="text-xs font-medium text-white/40 flex items-center gap-1">
                        <CheckCircle2 size={13} className="text-emerald-400/70" />
                        Production Shipped
                      </span>
                    )}

                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-orange-300 transition-colors"
                      >
                        <Github size={13} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                    className="text-[11px] text-white/40 hover:text-orange-300 transition-colors font-medium flex items-center gap-1"
                  >
                    <span>Inspect</span>
                    <Maximize2 size={11} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Lightbox / Image Preview Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-zinc-950 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-zinc-900/60">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse" />
                  <h3 className="font-bold text-white text-base sm:text-lg">{selectedImage.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="p-3 sm:p-5 flex items-center justify-center overflow-auto bg-black/40">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-sm text-white/70">
              Need a custom full-stack web application, enterprise dashboard, or automated API pipeline?
            </span>
            <a
              href="#contact"
              className="text-xs font-bold text-orange-400 hover:text-orange-300 underline underline-offset-4 sm:ml-2"
            >
              Let&apos;s build it together &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
