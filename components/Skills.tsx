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
    gradientBg: 'from-[#F4F9FF] to-[#EDE9FE]',
    borderClass: 'border-[#BDE0FE]',
    iconBadgeBg: 'bg-[#BDE0FE]/50 text-[#2563EB]',
    iconColor: 'text-[#2563EB]',
    accentColor: '#2563EB',
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
    gradientBg: 'from-[#F2FCF9] to-[#E6FAF4]',
    borderClass: 'border-[#B8F2E6]',
    iconBadgeBg: 'bg-[#B8F2E6]/50 text-[#0D9488]',
    iconColor: 'text-[#0D9488]',
    accentColor: '#0D9488',
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
    gradientBg: 'from-[#FFF9F5] to-[#FFF1E6]',
    borderClass: 'border-[#FFD6BA]',
    iconBadgeBg: 'bg-[#FFD6BA]/50 text-[#EA580C]',
    iconColor: 'text-[#EA580C]',
    accentColor: '#EA580C',
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
    gradientBg: 'from-[#FAF7FF] to-[#F3EDFF]',
    borderClass: 'border-[#C9B8FF]',
    iconBadgeBg: 'bg-[#C9B8FF]/50 text-[#7C5CFF]',
    iconColor: 'text-[#7C5CFF]',
    accentColor: '#7C5CFF',
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
    gradientBg: 'from-[#FFF5F8] to-[#FFEBF1]',
    borderClass: 'border-[#FFC8DD]',
    iconBadgeBg: 'bg-[#FFC8DD]/50 text-[#DB2777]',
    iconColor: 'text-[#DB2777]',
    accentColor: '#DB2777',
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
    gradientBg: 'from-[#F0FDFA] to-[#E0F7FA]',
    borderClass: 'border-[#A7F3D0]',
    iconBadgeBg: 'bg-[#A7F3D0]/50 text-[#059669]',
    iconColor: 'text-[#059669]',
    accentColor: '#059669',
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
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9B8FF]/15 blur-[140px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="section-kicker">Core Stack & Expertise</p>
            <h2 className="section-heading mb-0">
              Technical <span className="gradient-pastel-text">Skills</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#6B6570] bg-white/80 border border-white px-4 py-2.5 rounded-full w-fit backdrop-blur-md shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-[#7C5CFF] animate-pulse" />
            <span>
              <strong className="text-[#2D2A32]">{totalSkillsCount}+</strong> verified technologies & frameworks
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-[#C9B8FF] to-[#FFC8DD] text-[#2D2A32] shadow-soft-md scale-[1.02] border border-white'
                : 'bg-white/70 border border-[#2D2A32]/8 text-[#6B6570] hover:text-[#2D2A32] hover:bg-white hover:border-[#C9B8FF]/50 shadow-soft'
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
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#C9B8FF] to-[#FFC8DD] text-[#2D2A32] shadow-soft-md scale-[1.02] border border-white'
                    : 'bg-white/70 border border-[#2D2A32]/8 text-[#6B6570] hover:text-[#2D2A32] hover:bg-white hover:border-[#C9B8FF]/50 shadow-soft'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#2D2A32]' : cat.iconColor}`} />
                {cat.category} ({cat.items.length})
              </button>
            )
          })}
        </div>

        {/* Skills Grid with Multi-Pastel Gradient Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((skillGroup, index) => {
            const CategoryIcon = skillGroup.icon
            return (
              <div
                key={index}
                className={`group/card flex flex-col justify-between rounded-[28px] bg-gradient-to-br ${skillGroup.gradientBg} p-6 sm:p-7 border ${skillGroup.borderClass} shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300`}
              >
                <div>
                  {/* Category Header with Circular Soft-Shadow Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-11 h-11 rounded-2xl ${skillGroup.iconBadgeBg} border border-white flex items-center justify-center shadow-soft group-hover/card:scale-110 transition-all duration-300`}>
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-extrabold text-[#2D2A32]">
                          {skillGroup.category}
                        </h3>
                        <p className="text-xs text-[#6B6570] font-medium leading-tight mt-0.5">
                          {skillGroup.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills List with Clean White Micro-Cards */}
                  <div className="grid grid-cols-1 gap-2.5 mt-5">
                    {skillGroup.items.map((skill, i) => (
                      <div
                        key={i}
                        className="group flex items-center justify-between p-2.5 rounded-2xl bg-white/90 border border-white/80 hover:border-[#7C5CFF]/40 hover:bg-white shadow-soft hover:shadow-soft-md transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Clean Logo Container */}
                          <div className="relative flex-shrink-0 w-8 h-8 rounded-xl bg-[#FFF9F5] border border-black/5 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-all duration-300">
                            <SkillLogo name={skill.name} className="w-5 h-5" />
                          </div>

                          <div className="truncate">
                            <span className="text-sm font-semibold text-[#2D2A32] block truncate">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span className="text-[11px] text-[#6B6570] block truncate">
                                {skill.highlight}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Interactive indicator */}
                        <div className="flex-shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                          <Zap className="w-3.5 h-3.5 text-[#7C5CFF]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-3.5 border-t border-[#2D2A32]/8 flex items-center justify-between text-[11px] text-[#6B6570] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                    Production Ready
                  </span>
                  <span>{skillGroup.items.length} Technologies</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Key Stats Banner */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3 sm:gap-6 sm:mt-18">
          <div className="rounded-3xl bg-white/80 p-6 text-center border border-white/90 shadow-soft backdrop-blur-xl relative overflow-hidden group hover:shadow-pastel-lavender hover:-translate-y-1 transition-all">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#C9B8FF]/20 rounded-full blur-xl group-hover:bg-[#C9B8FF]/40 transition-all" />
            <div className="mb-1 text-3xl font-heading font-extrabold gradient-pastel-text sm:text-4xl">4+</div>
            <p className="text-sm text-[#2D2A32] font-bold sm:text-base">Years Hands-on Experience</p>
            <p className="text-xs text-[#6B6570] mt-1 font-medium">Full-stack web & real-time systems</p>
          </div>
          <div className="rounded-3xl bg-white/80 p-6 text-center border border-white/90 shadow-soft backdrop-blur-xl relative overflow-hidden group hover:shadow-pastel-mint hover:-translate-y-1 transition-all">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#B8F2E6]/25 rounded-full blur-xl group-hover:bg-[#B8F2E6]/50 transition-all" />
            <div className="mb-1 text-3xl font-heading font-extrabold text-[#0D9488] sm:text-4xl">50+</div>
            <p className="text-sm text-[#2D2A32] font-bold sm:text-base">Projects Shipped</p>
            <p className="text-xs text-[#6B6570] mt-1 font-medium">Enterprise apps, portals & APIs</p>
          </div>
          <div className="rounded-3xl bg-white/80 p-6 text-center border border-white/90 shadow-soft backdrop-blur-xl relative overflow-hidden group hover:shadow-pastel-peach hover:-translate-y-1 transition-all">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#FFD6BA]/25 rounded-full blur-xl group-hover:bg-[#FFD6BA]/50 transition-all" />
            <div className="mb-1 text-3xl font-heading font-extrabold text-[#EA580C] sm:text-4xl">100%</div>
            <p className="text-sm text-[#2D2A32] font-bold sm:text-base">Client Satisfaction</p>
            <p className="text-xs text-[#6B6570] mt-1 font-medium">High quality, clean & scalable code</p>
          </div>
        </div>
      </div>
    </section>
  )
}
