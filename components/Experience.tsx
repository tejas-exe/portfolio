'use client'

import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

const experience = [
  {
    role: 'Software Engineer',
    company: 'Technostacks',
    location: 'Gujarat, India',
    period: 'Jun 2025 – Present',
    badgeColor: 'bg-[#C9B8FF]/40 text-[#7C5CFF] border-[#C9B8FF]',
    dotColor: 'bg-[#7C5CFF] ring-[#C9B8FF]',
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
    badgeColor: 'bg-[#B8F2E6]/40 text-[#0D9488] border-[#B8F2E6]',
    dotColor: 'bg-[#0D9488] ring-[#B8F2E6]',
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
    badgeColor: 'bg-[#FFD6BA]/40 text-[#EA580C] border-[#FFD6BA]',
    dotColor: 'bg-[#EA580C] ring-[#FFD6BA]',
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
    badgeColor: 'bg-[#FFC8DD]/40 text-[#DB2777] border-[#FFC8DD]',
    dotColor: 'bg-[#DB2777] ring-[#FFC8DD]',
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
    <section id="experience" className="relative px-4 py-20 sm:px-6 sm:py-28 overflow-hidden">
      {/* Background ambient pastel blob */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[550px] h-[550px] bg-[#FFD6BA]/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center md:text-left mb-14">
          <p className="section-kicker">Career Journey & Milestones</p>
          <h2 className="section-heading">
            Work <span className="gradient-pastel-text">Experience</span>
          </h2>
          <p className="text-[#6B6570] max-w-xl text-base sm:text-lg">
            A track record of shipping enterprise software, high-throughput APIs, and modern web applications across startups and global teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10">
          {/* Continuous Multi-Pastel Gradient Vertical Line */}
          <div
            className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-[#C9B8FF] via-[#B8F2E6] via-[#FFD6BA] to-[#FFC8DD]"
          />

          <div className="space-y-8 sm:space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative group">
                {/* Milestone Node Dot */}
                <div
                  className={`absolute -left-[30px] sm:-left-[39px] top-6 w-5 h-5 rounded-full ${job.dotColor} ring-4 ring-white shadow-soft transition-transform duration-300 group-hover:scale-125`}
                />

                {/* Card */}
                <div className="rounded-[28px] bg-white/90 p-6 sm:p-8 border border-white/90 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 backdrop-blur-xl transition-all duration-300">
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className="text-[#7C5CFF]" />
                        <h3 className="font-heading text-xl font-extrabold text-[#2D2A32] sm:text-2xl">
                          {job.role}
                        </h3>
                      </div>
                      <p className="text-base font-bold text-[#2D2A32]">{job.company}</p>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6B6570] mt-1">
                        <MapPin size={13} className="text-[#EA580C]" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 w-fit rounded-full px-4 py-1.5 text-xs font-bold border shadow-sm ${job.badgeColor}`}
                    >
                      <Calendar size={12} />
                      {job.period}
                    </span>
                  </div>

                  <p className="text-[#6B6570] mb-5 leading-relaxed text-sm sm:text-base font-normal">
                    {job.description}
                  </p>

                  <div className="pt-4 border-t border-[#2D2A32]/8">
                    <h4 className="text-xs font-bold text-[#7C5CFF] uppercase tracking-wider mb-3">
                      Key Highlights & Impact:
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-[#6B6570] text-xs sm:text-sm flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-[#0D9488] flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
