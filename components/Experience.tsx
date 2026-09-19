import { MapPin, ArrowUpRight, Compass } from 'lucide-react'

const experience = [
  {
    role: 'Software Engineer',
    company: 'Technostacks',
    location: 'Gujarat, India',
    period: 'Jun 2025 – Present',
    badgeColor: 'bg-lantern-500/20 text-lantern-300 border-lantern-500/40',
    dotColor: 'bg-lantern-400 ring-lantern-500/40 shadow-lantern',
    description:
      'Lead developer on Aryos AI solar monitoring platform and Jaina digital-humanities platform at Stanford. Build production applications with React, Next.js, Node.js, and modern tech stack.',
    achievements: [
      'Leading real-time generation dashboards with 5-minute refresh cycles',
      'Developing interactive research visualizations (networks, trees, hierarchy graphs)',
      'Integrating REST APIs and scheduled background jobs across multiple apps',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'V2 Solutions',
    location: 'Vadodara, India',
    period: 'Jul 2023 – Apr 2025',
    badgeColor: 'bg-spirit-500/20 text-spirit-300 border-spirit-400/40',
    dotColor: 'bg-spirit-400 ring-spirit-500/40 shadow-spirit-glow',
    description:
      'Developed full-stack HR and project-management applications. Built comprehensive admin modules and secure REST APIs with JWT authentication.',
    achievements: [
      'Created admin modules for attendance, leaves, timesheets, helpdesk, and performance management',
      'Optimized database queries for improved performance',
      'Built reusable application modules across multiple projects',
    ],
  },
  {
    role: 'Freelance Backend Developer',
    company: 'Pond Splash',
    location: 'Remote',
    period: 'Apr 2023 – Jul 2023',
    badgeColor: 'bg-sea-500/25 text-sea-200 border-sea-300/40',
    dotColor: 'bg-sea-300 ring-sea-400/40 shadow-sea-glow',
    description:
      'Designed and built Node.js/Express.js APIs on MongoDB for customer order management with automated notifications and scheduled tasks.',
    achievements: [
      'Integrated Nodemailer for automated email notifications',
      'Implemented NodeCron for recurring scheduled tasks',
      'Built scalable order management system',
    ],
  },
  {
    role: 'Web Developer',
    company: 'iPangram',
    location: 'Remote',
    period: 'Oct 2021 – Mar 2023',
    badgeColor: 'bg-sakura-500/20 text-sakura-300 border-sakura-400/40',
    dotColor: 'bg-sakura-400 ring-sakura-400/40',
    description:
      'Developed backend services and secure REST APIs. Collaborated with frontend engineers and refactored legacy modules for better performance.',
    achievements: [
      'Built secure REST APIs using Node.js and Express.js',
      'Improved application performance and maintainability',
      'Resolved development and production issues',
    ],
  },
]


export default function Experience() {
  return <section id="experience" className="experience-section section-space"><div className="shell experience-layout">
    <div className="journey-intro" data-reveal="up"><p className="eyebrow">03 / The trail so far</p><h2>Every chapter,<br /><em>a little growth.</em></h2><p>A track record of shipping enterprise software, high-throughput APIs, and modern web applications across startups and global teams.</p><div className="compass-art" aria-hidden="true"><span>N</span><Compass size={110} strokeWidth={.6} /><span className="handwritten">Onward &amp; upward</span></div><a className="text-link" href="/Tejas_Kumarley_Resume_2026.pdf" download>The full story — download CV <ArrowUpRight size={16} /></a></div>
    <ol className="career-trail">{experience.map((job, index) => <li key={job.company} data-reveal="right"><span className="trail-marker" aria-hidden="true">{index === 0 ? '✦' : '•'}</span><div className="job-meta"><span>{job.period}</span>{index === 0 && <span className="current-label">Current chapter</span>}</div><h3>{job.company}</h3><p className="job-role">{job.role}</p><p className="job-location"><MapPin size={13} />{job.location}</p><p className="job-description">{job.description}</p><ul>{job.achievements.map(item => <li key={item}>{item}</li>)}</ul></li>)}</ol>
  </div></section>
}
