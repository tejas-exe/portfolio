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
  accentColor: string
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
    accentColor: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30',
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
    accentColor: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30',
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
    accentColor: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30',
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
    accentColor: 'from-purple-500/20 to-pink-500/10 border-purple-500/30',
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
    accentColor: 'from-orange-500/20 to-red-500/10 border-orange-500/30',
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
    accentColor: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30',
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
    <section id="skills" className="relative px-4 py-16 sm:px-6 sm:py-24">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="section-kicker">Core Stack & Expertise</p>
            <h2 className="section-heading mb-0">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-white/60 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full w-fit backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>
              <strong className="text-white">{totalSkillsCount}+</strong> verified technologies & frameworks
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-orange-400 to-amber-500 text-zinc-950 shadow-md shadow-orange-500/20 font-bold scale-[1.02]'
                : 'bg-white/[0.04] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-white/20'
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
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-orange-400 to-amber-500 text-zinc-950 shadow-md shadow-orange-500/20 font-bold scale-[1.02]'
                    : 'bg-white/[0.04] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-white/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.category} ({cat.items.length})
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((skillGroup, index) => {
            const CategoryIcon = skillGroup.icon
            return (
              <div
                key={index}
                className="card group/card flex flex-col justify-between border-white/[0.08] bg-white/[0.03] hover:border-orange-400/40 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 group-hover/card:scale-110 group-hover/card:bg-orange-500/20 group-hover/card:border-orange-400 transition-all duration-300 shadow-sm">
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover/card:text-orange-300 transition-colors">
                          {skillGroup.category}
                        </h3>
                        <p className="text-xs text-white/50">{skillGroup.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills List with Animated Logos */}
                  <div className="grid grid-cols-1 gap-2.5 mt-5">
                    {skillGroup.items.map((skill, i) => (
                      <div
                        key={i}
                        className="group flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-400/50 hover:bg-white/[0.08] hover:shadow-[0_4px_20px_rgba(249,115,22,0.12)] transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Animated Logo Container */}
                          <div className="relative flex-shrink-0 w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center p-1.5 shadow-inner group-hover:border-orange-400/40 group-hover:bg-zinc-900 group-hover:scale-105 transition-all duration-300">
                            <SkillLogo name={skill.name} className="w-5 h-5" />
                          </div>

                          <div className="truncate">
                            <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors block truncate">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span className="text-[10px] text-white/40 group-hover:text-orange-300/80 transition-colors block truncate">
                                {skill.highlight}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Subtle interactive indicator */}
                        <div className="flex-shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                          <Zap className="w-3.5 h-3.5 text-orange-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-white/40">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
                    Production Ready
                  </span>
                  <span>{skillGroup.items.length} Tech Skills</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Key Stats Banner */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 sm:gap-6 sm:mt-18">
          <div className="card text-center relative overflow-hidden group hover:border-orange-400/40">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-all" />
            <div className="mb-2 text-3xl font-black gradient-text sm:text-4xl">4+</div>
            <p className="text-sm text-white/80 font-medium sm:text-base">Years Hands-on Experience</p>
            <p className="text-xs text-white/40 mt-1">Full-stack web & real-time systems</p>
          </div>
          <div className="card text-center relative overflow-hidden group hover:border-orange-400/40">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all" />
            <div className="mb-2 text-3xl font-black gradient-text sm:text-4xl">50+</div>
            <p className="text-sm text-white/80 font-medium sm:text-base">Projects Shipped</p>
            <p className="text-xs text-white/40 mt-1">Enterprise apps, portals & APIs</p>
          </div>
          <div className="card text-center relative overflow-hidden group hover:border-orange-400/40">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-all" />
            <div className="mb-2 text-3xl font-black gradient-text sm:text-4xl">100%</div>
            <p className="text-sm text-white/80 font-medium sm:text-base">Client Satisfaction</p>
            <p className="text-xs text-white/40 mt-1">High quality, clean & scalable code</p>
          </div>
        </div>
      </div>
    </section>
  )
}
