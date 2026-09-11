'use client'

import { useState } from 'react'
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  BarChart3,
  Boxes,
  Sparkles,
  Zap,
  CheckCircle2,
  Layers,
} from 'lucide-react'
import SkillLogo from './SkillLogo'

interface SkillCategory {
  category: string
  description: string
  icon: React.ElementType
  gradientBg: string
  borderClass: string
  iconBadgeBg: string
  iconColor: string
  items: {
    name: string
    highlight?: string
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    description: 'Modern, reactive & accessible web interfaces',
    icon: Code2,
    gradientBg: 'from-night-950/60 to-sea-700/25',
    borderClass: 'border-sea-300/30',
    iconBadgeBg: 'bg-sea-500/25 text-sea-200',
    iconColor: 'text-sea-200',
    items: [
      { name: 'React.js', highlight: 'Hooks & Architecture' },
      { name: 'Next.js', highlight: 'App Router & SSR' },
      { name: 'TypeScript', highlight: 'Strict Typing & Generics' },
      { name: 'Tailwind CSS', highlight: 'Responsive Design System' },
      { name: 'Redux', highlight: 'Global State Management' },
      { name: 'Jotai', highlight: 'Atomic State' },
      { name: 'React Hook Form', highlight: 'Performant Validation' },
      { name: 'TanStack Query', highlight: 'Async State & Caching' },
    ],
  },
  {
    category: 'Backend',
    description: 'Scalable APIs, real-time engines & event pipelines',
    icon: Server,
    gradientBg: 'from-night-950/60 to-spirit-700/20',
    borderClass: 'border-spirit-400/30',
    iconBadgeBg: 'bg-spirit-500/20 text-spirit-300',
    iconColor: 'text-spirit-300',
    items: [
      { name: 'Node.js', highlight: 'Asynchronous Runtime' },
      { name: 'Express.js', highlight: 'RESTful Routing' },
      { name: 'REST APIs', highlight: 'Clean Endpoint Design' },
      { name: 'GraphQL', highlight: 'Schema & Resolvers' },
      { name: 'BullMQ', highlight: 'Background Jobs & Queues' },
      { name: 'WebSockets', highlight: 'Bi-directional Streaming' },
    ],
  },
  {
    category: 'Databases',
    description: 'Relational, NoSQL, migrations & schema architecture',
    icon: Database,
    gradientBg: 'from-night-950/60 to-lantern-700/15',
    borderClass: 'border-lantern-500/30',
    iconBadgeBg: 'bg-lantern-500/20 text-lantern-300',
    iconColor: 'text-lantern-300',
    items: [
      { name: 'MongoDB', highlight: 'Document Aggregation' },
      { name: 'PostgreSQL', highlight: 'Relational Modeling' },
      { name: 'MySQL', highlight: 'High Throughput' },
      { name: 'Prisma ORM', highlight: 'Type-safe Schema' },
      { name: 'Drizzle ORM', highlight: 'Lightweight SQL' },
    ],
  },
  {
    category: 'Auth & Security',
    description: 'Enterprise authentication, token policies & RBAC',
    icon: ShieldCheck,
    gradientBg: 'from-night-950/60 to-noface/15',
    borderClass: 'border-noface-300/30',
    iconBadgeBg: 'bg-noface/25 text-noface-300',
    iconColor: 'text-noface-300',
    items: [
      { name: 'JWT', highlight: 'Stateless Tokens' },
      { name: 'OAuth', highlight: 'Third-party Providers' },
      { name: 'Role-Based Access Control (RBAC)', highlight: 'Granular Permissions' },
      { name: 'Secure Authentication', highlight: 'OWASP Best Practices' },
    ],
  },
  {
    category: 'Data & Visualization',
    description: 'Interactive analytics, graphs & live dashboards',
    icon: BarChart3,
    gradientBg: 'from-night-950/60 to-sakura-500/10',
    borderClass: 'border-sakura-400/30',
    iconBadgeBg: 'bg-sakura-500/20 text-sakura-300',
    iconColor: 'text-sakura-300',
    items: [
      { name: 'D3.js', highlight: 'Custom Visualizations' },
      { name: 'React Flow', highlight: 'Node-based Workflows' },
      { name: 'Real-Time Charts', highlight: 'Live Data Streams' },
      { name: 'Advanced Graphs', highlight: 'Lineage & Networks' },
    ],
  },
  {
    category: 'DevOps & Tools',
    description: 'Containerization, cloud infrastructure & CI/CD',
    icon: Boxes,
    gradientBg: 'from-night-950/60 to-sea-600/20',
    borderClass: 'border-sea-400/30',
    iconBadgeBg: 'bg-sea-500/25 text-sea-200',
    iconColor: 'text-sea-200',
    items: [
      { name: 'Docker', highlight: 'Containerization' },
      { name: 'Kubernetes', highlight: 'Cluster Orchestration' },
      { name: 'AWS (S3)', highlight: 'Cloud Storage & CDN' },
      { name: 'Git/GitHub', highlight: 'Version Control & Actions' },
      { name: 'Vite', highlight: 'Lightning Fast Bundling' },
      { name: 'Postman', highlight: 'API Automation & Testing' },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredCategories =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeCategory)

  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  )

  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 sm:py-28 overflow-hidden">
      {/* Background ambient glow + star dust */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-lantern-500/10 blur-[140px] rounded-full -z-10" />
      <div className="starfield-dust pointer-events-none absolute inset-0 -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="section-kicker">Core Stack &amp; Expertise</p>
            <h2 className="section-heading mb-0">
              Technical <span className="gradient-lantern-text font-display">Skills</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-mist bg-night-900/80 border border-sea-300/20 px-4 py-2.5 rounded-full w-fit backdrop-blur-md shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-lantern-300 animate-pulse" />
            <span>
              <strong className="text-ink">{totalSkillsCount}+</strong> verified technologies &amp; frameworks
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 backdrop-blur-md ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-lantern-300 to-lantern-500 text-[#1A1206] shadow-lantern scale-[1.02] border border-lantern-200'
                : 'bg-night-900/70 border border-sea-300/20 text-mist hover:text-ink hover:bg-night-800/80 hover:border-lantern-500/40 shadow-soft'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            All Categories ({totalSkillsCount})
          </button>
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            const isSelected = activeCategory === cat.category
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 backdrop-blur-md ${
                  isSelected
                    ? 'bg-gradient-to-r from-lantern-300 to-lantern-500 text-[#1A1206] shadow-lantern scale-[1.02] border border-lantern-200'
                    : 'bg-night-900/70 border border-sea-300/20 text-mist hover:text-ink hover:bg-night-800/80 hover:border-lantern-500/40 shadow-soft'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#1A1206]' : cat.iconColor}`} />
                {cat.category} ({cat.items.length})
              </button>
            )
          })}
        </div>

        {/* Skills Grid — night gradient cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((skillGroup, index) => {
            const CategoryIcon = skillGroup.icon
            return (
              <div
                key={index}
                className={`group/card flex flex-col justify-between rounded-[28px] bg-gradient-to-br ${skillGroup.gradientBg} p-6 sm:p-7 border ${skillGroup.borderClass} shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-xl`}
              >
                <div>
                  {/* Category Header with Circular Soft-Shadow Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-11 h-11 rounded-2xl ${skillGroup.iconBadgeBg} border border-sea-200/20 flex items-center justify-center shadow-soft group-hover/card:scale-110 transition-all duration-300`}>
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-bold text-ink">
                          {skillGroup.category}
                        </h3>
                        <p className="text-xs text-mist-400 font-medium leading-tight mt-0.5">
                          {skillGroup.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills List with Dark Glass Micro-Cards */}
                  <div className="grid grid-cols-1 gap-2.5 mt-5">
                    {skillGroup.items.map((skill, i) => (
                      <div
                        key={i}
                        className="group flex items-center justify-between p-2.5 rounded-2xl bg-night-950/45 border border-sea-300/15 hover:border-lantern-500/40 hover:bg-night-900/60 shadow-soft hover:shadow-soft-md transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Logo Container */}
                          <div className="relative flex-shrink-0 w-8 h-8 rounded-xl bg-sea-100/95 border border-sea-300/30 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-all duration-300">
                            <SkillLogo name={skill.name} className="w-5 h-5" />
                          </div>

                          <div className="truncate">
                            <span className="text-sm font-bold text-ink block truncate">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span className="text-[11px] text-mist-400 block truncate">
                                {skill.highlight}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Interactive indicator */}
                        <div className="flex-shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                          <Zap className="w-3.5 h-3.5 text-lantern-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-3.5 border-t border-sea-300/15 flex items-center justify-between text-[11px] text-mist-400 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-spirit-400" />
                    Production Ready
                  </span>
                  <span>{skillGroup.items.length} Technologies</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Key Stats Banner */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3 sm:gap-6">
          <div className="rounded-3xl bg-night-900/55 p-6 text-center border border-sea-300/20 shadow-soft backdrop-blur-xl relative overflow-hidden group hover:shadow-lantern hover:-translate-y-1 transition-all">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-lantern-500/15 rounded-full blur-xl group-hover:bg-lantern-500/30 transition-all" />
            <div className="mb-1 text-3xl font-heading font-bold gradient-lantern-text sm:text-4xl">4+</div>
            <p className="text-sm text-ink font-bold sm:text-base">Years Hands-on Experience</p>
            <p className="text-xs text-mist-400 mt-1 font-medium">Full-stack web &amp; real-time systems</p>
          </div>
          <div className="rounded-3xl bg-night-900/55 p-6 text-center border border-sea-300/20 shadow-soft backdrop-blur-xl relative overflow-hidden group hover:shadow-spirit-glow hover:-translate-y-1 transition-all">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-spirit-500/20 rounded-full blur-xl group-hover:bg-spirit-500/35 transition-all" />
            <div className="mb-1 text-3xl font-heading font-bold text-spirit-300 sm:text-4xl">50+</div>
            <p className="text-sm text-ink font-bold sm:text-base">Projects Shipped</p>
            <p className="text-xs text-mist-400 mt-1 font-medium">Enterprise apps, portals &amp; APIs</p>
          </div>
          <div className="rounded-3xl bg-night-900/55 p-6 text-center border border-sea-300/20 shadow-soft backdrop-blur-xl relative overflow-hidden group hover:shadow-sea-glow hover:-translate-y-1 transition-all">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-sea-500/25 rounded-full blur-xl group-hover:bg-sea-400/35 transition-all" />
            <div className="mb-1 text-3xl font-heading font-bold text-sea-200 sm:text-4xl">100%</div>
            <p className="text-sm text-ink font-bold sm:text-base">Client Satisfaction</p>
            <p className="text-xs text-mist-400 mt-1 font-medium">High quality, clean &amp; scalable code</p>
          </div>
        </div>
      </div>
    </section>
  )
}
