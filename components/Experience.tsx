const experience = [
  {
    role: 'Software Engineer',
    company: 'Technostacks',
    location: 'Gujarat, India',
    period: 'Jun 2025 – Present',
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
  return (
    <section id="experience" className="bg-black/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <p className="section-kicker">Career timeline</p>
        <h2 className="section-heading">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-5 sm:space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="card border-l-4 border-l-secondary">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-secondary sm:text-2xl">{job.role}</h3>
                  <p className="text-lg text-white/80">{job.company}</p>
                  <p className="text-sm text-white/60">
                    {job.location}
                  </p>
                </div>
                <span className="w-fit rounded-lg bg-secondary/10 px-3 py-2 text-sm font-semibold text-secondary sm:px-4">
                  {job.period}
                </span>
              </div>

              <p className="text-white/70 mb-4 leading-relaxed">{job.description}</p>

              <div>
                <h4 className="text-sm font-semibold text-accent mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-white/60 text-sm flex gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
