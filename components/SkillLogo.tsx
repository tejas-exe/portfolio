import React from 'react'

interface SkillLogoProps {
  name: string
  className?: string
}

export default function SkillLogo({ name, className = 'w-5 h-5' }: SkillLogoProps) {
  const normName = name.toLowerCase().trim()

  switch (normName) {
    // ---------------- FRONTEND ----------------
    case 'react.js':
    case 'react':
      return (
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          className={`${className} text-[#61DAFB] transition-transform duration-700 ease-in-out group-hover:rotate-180 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )

    case 'next.js':
    case 'nextjs':
      return (
        <svg
          viewBox="0 0 180 180"
          className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]`}
          fill="none"
        >
          <mask height="180" id="mask-next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" fill="#000" r="90" />
          </mask>
          <g mask="url(#mask-next)">
            <circle cx="90" cy="90" fill="#000" r="90" stroke="#333" strokeWidth="6" />
            <path
              d="M149.508 157.438L69.147 54H54V125.979H66.8391V69.3831L139.563 162.775C143.048 161.168 146.376 159.378 149.508 157.438Z"
              fill="url(#paint0_linear_next)"
            />
            <rect fill="url(#paint1_linear_next)" height="72" width="12.8" x="115" y="54" />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_next"
              x1="109"
              x2="144.5"
              y1="116.5"
              y2="160.5"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_next"
              x1="121"
              x2="120.799"
              y1="54"
              y2="106.875"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )

    case 'typescript':
    case 'ts':
      return (
        <svg
          viewBox="0 0 128 128"
          className={`${className} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
        >
          <rect fill="#3178C6" height="128" rx="16" width="128" />
          <path
            d="M74.1 50.8v10.5h16.2v49.2h12.5V61.3H119V50.8H74.1zM34.8 77.2c2.7 4.1 6.5 6.7 11.5 6.7 4.2 0 6.7-1.8 6.7-4.5 0-3.1-2.9-4.3-8.2-6.5-7.7-3.3-13.4-7.2-13.4-15.6 0-8.5 6.8-14.8 17.5-14.8 7.4 0 13.1 2.7 16.9 8.2l-8.6 5.8c-2.2-3.1-4.7-4.6-8.3-4.6-3.4 0-5.4 1.7-5.4 4 0 2.7 2.4 3.8 7.6 6 8.7 3.7 14.2 7.7 14.2 16.2 0 9.8-7.5 15.4-19 15.4-9.3 0-16.1-3.7-20.4-10.4l8.9-5.9z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case 'tailwind css':
    case 'tailwind':
      return (
        <svg
          viewBox="0 0 54 33"
          className={`${className} transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5`}
          fill="#38BDF8"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          />
        </svg>
      )

    case 'redux':
      return (
        <svg
          viewBox="0 0 100 100"
          className={`${className} transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110`}
          fill="none"
        >
          <path
            d="M65.6 42.6c3.2 0 5.8 2.6 5.8 5.8 0 3.2-2.6 5.8-5.8 5.8-3.2 0-5.8-2.6-5.8-5.8 0-3.2 2.6-5.8 5.8-5.8z"
            fill="#764ABC"
          />
          <path
            d="M87.5 50c0-12.7-6.2-23.7-15.6-30.5-2.7-2-6-3.2-9.6-3.2-8.8 0-16 7.2-16 16 0 2.2.4 4.3 1.3 6.2-5.7-1.1-11.7-1.7-17.6-1.7-7.9 0-15.5 1.1-22.6 3.1-4.7 1.3-7.4 6.2-6.1 10.9 1.3 4.7 6.2 7.4 10.9 6.1 4.7-1.3 9.7-2.1 14.8-2.5-1.1 5.3-1.7 10.8-1.7 16.4 0 5.4.6 10.7 1.7 15.8-5 .4-10 1.2-14.7 2.5-4.7 1.3-7.4 6.2-6.1 10.9 1.3 4.7 6.2 7.4 10.9 6.1 7.1-2 14.6-3.1 22.5-3.1 6 0 11.9-.6 17.6-1.7-.8 1.9-1.3 4-1.3 6.2 0 8.8 7.2 16 16 16 3.6 0 6.9-1.2 9.6-3.2 9.4-6.8 15.6-17.8 15.6-30.5 0-7.8-2.4-15.1-6.5-21.1 4.1-6 6.5-13.3 6.5-21.1z"
            stroke="#764ABC"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'jotai':
      return (
        <svg
          viewBox="0 0 100 100"
          className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-400`}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        >
          <circle cx="50" cy="50" r="38" stroke="#818CF8" strokeDasharray="6 4" />
          <circle cx="50" cy="50" r="18" fill="#6366F1" />
          <circle cx="36" cy="40" r="5" fill="#FFFFFF" />
          <circle cx="64" cy="40" r="5" fill="#FFFFFF" />
          <path d="M42 62 Q50 70 58 62" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    case 'react hook form':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-[#EC5990] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="rgba(236,89,144,0.15)" stroke="#EC5990" />
          <path d="M9 12l2 2 4-4" stroke="#EC5990" strokeWidth="2.5" />
        </svg>
      )

    case 'tanstack query':
    case 'react query':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
          fill="none"
        >
          <circle cx="12" cy="12" r="10" fill="url(#tq-gradient)" />
          <path
            d="M7 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
          <defs>
            <linearGradient id="tq-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4154" />
              <stop offset="50%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FFD600" />
            </linearGradient>
          </defs>
        </svg>
      )

    // ---------------- BACKEND ----------------
    case 'node.js':
    case 'nodejs':
      return (
        <svg
          viewBox="0 0 32 32"
          className={`${className} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
          fill="none"
        >
          <path
            d="M16 2L3.5 9.2v14.5L16 31l12.5-7.2V9.2L16 2z"
            fill="#539E43"
          />
          <path
            d="M16 4.5l9.5 5.5v11.8L16 27.4 6.5 21.8V10.1L16 4.5z"
            fill="#333333"
          />
          <path
            d="M16 10l5 3v6l-5 3-5-3v-6l5-3z"
            fill="#539E43"
          />
        </svg>
      )

    case 'express.js':
    case 'express':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-zinc-100 transition-all duration-300 group-hover:scale-110 group-hover:text-amber-400`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="18" rx="4" fill="rgba(255,255,255,0.06)" stroke="currentColor" />
          <path d="M7 8h4M7 12h3M7 16h4" stroke="currentColor" strokeWidth="2.2" />
          <path d="M14 9l3 3-3 3" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      )

    case 'rest apis':
    case 'rest api':
    case 'rest':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-orange-400 transition-all duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" stroke="#FB923C" />
          <path d="M3.6 9h16.8M3.6 15h16.8" stroke="#FED7AA" />
          <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" stroke="#F97316" />
        </svg>
      )

    case 'graphql':
      return (
        <svg
          viewBox="0 0 100 100"
          className={`${className} transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110`}
          fill="none"
        >
          <path
            d="M50 10L84.6 30v40L50 90 15.4 70V30L50 10z"
            stroke="#E10098"
            strokeWidth="6"
          />
          <path d="M50 10v80M15.4 30l69.2 40M15.4 70l69.2-40" stroke="#E10098" strokeWidth="4" />
          <circle cx="50" cy="10" r="7" fill="#E10098" />
          <circle cx="84.6" cy="30" r="7" fill="#E10098" />
          <circle cx="84.6" cy="70" r="7" fill="#E10098" />
          <circle cx="50" cy="90" r="7" fill="#E10098" />
          <circle cx="15.4" cy="70" r="7" fill="#E10098" />
          <circle cx="15.4" cy="30" r="7" fill="#E10098" />
        </svg>
      )

    case 'bullmq':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-red-500 transition-all duration-300 group-hover:scale-110 group-hover:text-red-400`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 14h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6z" fill="rgba(239,68,68,0.18)" stroke="#EF4444" />
          <path d="M7 14V7a3 3 0 0 1 3-3h4" stroke="#F87171" strokeWidth="2.2" />
          <path d="M10 17h4" stroke="#F87171" strokeWidth="2.2" />
        </svg>
      )

    case 'websockets':
    case 'websocket':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-emerald-400 transition-transform duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h8l-1 8 11-13h-8l1-7z" fill="rgba(16,185,129,0.2)" stroke="#10B981" />
        </svg>
      )

    // ---------------- DATABASES ----------------
    case 'mongodb':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5`}
          fill="none"
        >
          <path
            d="M12 2C12 2 6 7.5 6 13.5C6 17.5 9 21 12 22C15 21 18 17.5 18 13.5C18 7.5 12 2 12 2Z"
            fill="url(#mongo-grad)"
          />
          <path d="M12 2v20" stroke="#13AA52" strokeWidth="1.2" />
          <defs>
            <linearGradient id="mongo-grad" x1="6" y1="2" x2="18" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#13AA52" />
              <stop offset="100%" stopColor="#001E2B" />
            </linearGradient>
          </defs>
        </svg>
      )

    case 'postgresql':
    case 'postgres':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-all duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M12 3c-4.97 0-9 3.58-9 8 0 2.5 1.3 4.74 3.34 6.2-.23 1.25-.84 2.8-2.34 3.8 2.05 0 4.15-.9 5.48-2.22C10.15 18.9 11.05 19 12 19c4.97 0 9-3.58 9-8s-4.03-8-9-8z"
            fill="rgba(51,103,145,0.2)"
            stroke="#336791"
          />
          <circle cx="9" cy="10" r="1.5" fill="#336791" />
          <path d="M15 13c-1 1-3 1-4 0" stroke="#336791" strokeWidth="2" />
        </svg>
      )

    case 'mysql':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-all duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="7" rx="8" ry="4" fill="rgba(0,117,143,0.25)" stroke="#00758F" />
          <path d="M4 7v6c0 2.2 3.6 4 8 4s8-1.8 8-4V7" stroke="#F29111" />
          <path d="M4 13v4c0 2.2 3.6 4 8 4s8-1.8 8-4v-4" stroke="#00758F" />
        </svg>
      )

    case 'prisma orm':
    case 'prisma':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}
          fill="none"
        >
          <path
            d="M3.5 19.5L12 2.5l8.5 17L3.5 19.5z"
            stroke="#2D3748"
            strokeWidth="2"
            fill="rgba(255,255,255,0.08)"
          />
          <path d="M12 2.5v17M3.5 19.5L12 11M20.5 19.5L12 11" stroke="#5A67D8" strokeWidth="1.8" />
        </svg>
      )

    case 'drizzle orm':
    case 'drizzle':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
          fill="none"
        >
          <path
            d="M12 2.5C12 2.5 5.5 10 5.5 15C5.5 18.6 8.4 21.5 12 21.5C15.6 21.5 18.5 18.6 18.5 15C18.5 10 12 2.5 12 2.5Z"
            fill="#C5F74F"
          />
          <path
            d="M12 6.5C12 6.5 8 12 8 15C8 17.2 9.8 19 12 19"
            stroke="#18181B"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )

    // ---------------- AUTH & SECURITY ----------------
    case 'jwt':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
          fill="none"
        >
          <rect x="2" y="3" width="20" height="18" rx="5" fill="rgba(214,58,255,0.15)" stroke="#D63AFF" strokeWidth="2" />
          <path d="M6 8h2v8H6zm5 0h2v8h-2zm5 0h2v8h-2z" fill="#FB015B" />
        </svg>
      )

    case 'oauth':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-amber-500 transition-all duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="12" r="5" fill="rgba(235,84,36,0.15)" stroke="#EB5424" />
          <circle cx="16" cy="12" r="5" fill="rgba(66,133,244,0.15)" stroke="#4285F4" />
          <path d="M12 9v6" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      )

    case 'role-based access control (rbac)':
    case 'rbac':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-emerald-400 transition-all duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" fill="rgba(16,185,129,0.15)" stroke="#10B981" />
          <circle cx="12" cy="10" r="2.5" stroke="#34D399" />
          <path d="M8.5 16c.8-1.5 2.2-2 3.5-2s2.7.5 3.5 2" stroke="#34D399" />
        </svg>
      )

    case 'secure authentication':
    case 'authentication':
    case 'auth':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-cyan-400 transition-all duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="3" fill="rgba(56,189,248,0.15)" stroke="#38BDF8" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#38BDF8" />
          <circle cx="12" cy="16" r="1.5" fill="#38BDF8" />
        </svg>
      )

    // ---------------- DATA & VISUALIZATION ----------------
    case 'd3.js':
    case 'd3':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
          fill="none"
        >
          <circle cx="6" cy="18" r="4" fill="#F9A03C" />
          <circle cx="18" cy="18" r="4" fill="#F26D00" />
          <circle cx="12" cy="7" r="5" fill="#E84400" />
          <path d="M6 18l6-11 6 11" stroke="#FFE7C4" strokeWidth="1.8" />
        </svg>
      )

    case 'react flow':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-all duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="7" height="6" rx="1.5" fill="rgba(255,0,114,0.2)" stroke="#FF0072" />
          <rect x="15" y="15" width="7" height="6" rx="1.5" fill="rgba(99,102,241,0.2)" stroke="#6366F1" />
          <path d="M9 6h4a3 3 0 0 1 3 3v6" stroke="#FB7185" strokeDasharray="2 2" />
          <circle cx="16" cy="15" r="1.5" fill="#6366F1" />
        </svg>
      )

    case 'real-time charts':
    case 'charts':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-emerald-400 transition-all duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" stroke="#71717A" />
          <path d="M19 9l-5 5-4-4-4 4" stroke="#34D399" strokeWidth="2.5" />
          <circle cx="19" cy="9" r="2" fill="#10B981" />
          <circle cx="14" cy="14" r="1.5" fill="#34D399" />
        </svg>
      )

    case 'advanced graphs':
    case 'graphs':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-purple-400 transition-all duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="6" r="3" fill="rgba(168,85,247,0.2)" stroke="#A855F7" />
          <circle cx="18" cy="8" r="3" fill="rgba(236,72,153,0.2)" stroke="#EC4899" />
          <circle cx="12" cy="18" r="3" fill="rgba(99,102,241,0.2)" stroke="#6366F1" />
          <path d="M8.5 7.5l7 1.5M7.5 8.5l3.5 7M16.5 10l-3.5 6" stroke="#CBD5E1" strokeWidth="1.5" />
        </svg>
      )

    // ---------------- DEVOPS & TOOLS ----------------
    case 'docker':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5`}
          fill="none"
        >
          <rect x="5" y="10" width="2" height="2" rx="0.5" fill="#2496ED" />
          <rect x="8" y="10" width="2" height="2" rx="0.5" fill="#2496ED" />
          <rect x="11" y="10" width="2" height="2" rx="0.5" fill="#2496ED" />
          <rect x="8" y="7" width="2" height="2" rx="0.5" fill="#2496ED" />
          <rect x="11" y="7" width="2" height="2" rx="0.5" fill="#2496ED" />
          <path
            d="M22 13c-.5-.4-1.5-.4-2.2-.1-.5-1.7-1.8-2.6-1.8-2.6-.4 1.3-.1 2.5.2 3.1-1.2.3-2.7.2-4.2-.2-1.7-.5-3.3-.5-4.8 0-1.8.6-3.4 2-3.8 3.8-.4 1.9.4 3.7 2.2 4.6 2 .9 4.8 1.1 8 0 2.8-.9 4.7-2.7 5.7-5.1.7-.1 1.4-.4 1.7-.9.5-.8.5-1.8 0-2.6z"
            fill="#2496ED"
          />
        </svg>
      )

    case 'kubernetes':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-transform duration-700 group-hover:rotate-180 group-hover:scale-110`}
          fill="none"
          stroke="#326CE5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" stroke="#326CE5" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" fill="#326CE5" />
          <path d="M12 3v6M12 15v6M4.2 7.5l5.2 3M14.6 13.5l5.2 3M4.2 16.5l5.2-3M14.6 10.5l5.2-3" />
        </svg>
      )

    case 'aws (s3)':
    case 'aws':
    case 's3':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-transform duration-300 group-hover:scale-110`}
          fill="none"
        >
          <path
            d="M18.8 14.5C18.1 15 15.6 16.5 12 16.5C8.4 16.5 5.9 15 5.2 14.5"
            stroke="#FF9900"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path d="M17.5 13.5l2 1.5-1.5 2" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M7 10.5a3 3 0 0 1 3-3c1.5 0 2.8.9 3.2 2.2.6-.4 1.3-.7 2.1-.7 2 0 3.7 1.6 3.7 3.6 0 .3 0 .5-.1.8"
            stroke="#F97316"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'git/github':
    case 'git':
    case 'github':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-white transition-all duration-300 group-hover:scale-110 group-hover:text-orange-400`}
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      )

    case 'vite':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
          fill="none"
        >
          <path
            d="M21.5 4.5L12.5 22 2.5 4.5l9-2 10 2z"
            fill="url(#vite-grad-1)"
          />
          <path
            d="M15.5 2.5L8.5 15l4-1-2 7 7-10.5h-4l3.5-8z"
            fill="url(#vite-grad-2)"
          />
          <defs>
            <linearGradient id="vite-grad-1" x1="2.5" y1="2.5" x2="21.5" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="vite-grad-2" x1="8.5" y1="2.5" x2="17.5" y2="21" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFEA83" />
              <stop offset="50%" stopColor="#FFDD35" />
              <stop offset="100%" stopColor="#FFA800" />
            </linearGradient>
          </defs>
        </svg>
      )

    case 'postman':
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
          fill="none"
        >
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path
            d="M17 7.5L6.5 12l4 1.5L12 17.5l2-3 3-7z"
            fill="#FFFFFF"
          />
          <path d="M10.5 13.5l4-3.5" stroke="#FF6C37" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )

    // Fallback icon for any other skill
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-orange-400 transition-transform duration-300 group-hover:scale-110`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
  }
}
