import { Code2, Server, Database, ShieldCheck, BarChart3, Boxes, Sprout } from 'lucide-react'
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
  return <section id="skills" className="skills-section section-space"><div className="shell">
    <div className="section-top" data-reveal="up"><div><p className="eyebrow">02 / Inside the workshop</p><h2>A well-loved<br /><em>set of tools.</em></h2></div><div className="section-aside"><Sprout size={38} strokeWidth={1} /><p>From the first interface to the last API.<br />The technologies behind the work.</p></div></div>
    <div className="skill-shelves">{skillCategories.map((group, index) => { const Icon = group.icon; return <article className="skill-shelf" key={group.category} data-reveal="up"><div className="skill-heading"><span className="skill-number">0{index + 1}</span><Icon size={24} strokeWidth={1.4} /><h3>{group.category}</h3></div><p>{group.description}</p><ul>{group.items.map(skill => <li key={skill.name}><span className="skill-logo"><SkillLogo name={skill.name} className="w-5 h-5" /></span><div><strong>{skill.name}</strong><span>{skill.highlight}</span></div></li>)}</ul></article>})}</div>
    <div className="workshop-footnote" data-reveal="up"><span className="handwritten">Always learning. Always building.</span><span>4+ years of experience <i>✦</i> 50+ projects shipped <i>✦</i> 100% client satisfaction</span></div>
  </div></section>
}
