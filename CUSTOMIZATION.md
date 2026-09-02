# Quick Customization Reference

## 1. Change Your Name/Title

### In `components/Hero.tsx`:
```tsx
<h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
  <span className="gradient-text">Bold Ideas,</span>
  <br />
  <span>Real Solutions</span>  // ← Change this
</h1>
```

### In `components/Navigation.tsx`:
```tsx
<Link href="#" className="text-2xl font-bold gradient-text">
  TK  // ← Change to your initials
</Link>
```

### In `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Tejas Kumarley | Full-Stack Engineer',  // ← Update
  description: 'Portfolio...',  // ← Update
}
```

---

## 2. Update Contact Information

In `components/Contact.tsx`:
```tsx
<a href="mailto:kumarley.tejas7@gmail.com">
  kumarley.tejas7@gmail.com  // ← Your email
</a>

<a href="tel:+916354352713">
  +91 63543 52713  // ← Your phone
</a>

{/* Location */}
<p>Vadodara, Gujarat, India</p>  // ← Your location
```

---

## 3. Update Social Links

### Hero section (`components/Hero.tsx`):
```tsx
<a href="https://github.com/tejaskumarley" target="_blank">  // ← Update
<a href="https://linkedin.com/in/tejas-kumarley" target="_blank">  // ← Update
<a href="mailto:kumarley.tejas7@gmail.com">  // ← Update
```

### Footer (`components/Footer.tsx`):
Same pattern as above - update all social links

---

## 4. Add/Remove Projects

In `components/Projects.tsx`, modify the `projects` array:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description of what you built...',
    tech: ['React', 'Node.js', 'MongoDB'],  // Your tech stack
    highlights: [
      'Key achievement 1',
      'Key achievement 2',
      'Key achievement 3',
    ],
    link: 'https://your-project-link.com',
    github: 'https://github.com/yourname/project',
  },
  // ... add more
]
```

---

## 5. Update Skills

In `components/Skills.tsx`, modify the `skills` array:

```typescript
const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Your other skills'],
  },
  {
    category: 'Your Category',
    items: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  // ... add more categories
]
```

---

## 6. Update Work Experience

In `components/Experience.tsx`, modify the `experience` array:

```typescript
const experience = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Month Year – Present',  // or 'Month Year – Month Year'
    description: 'What you did in this role...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  },
  // ... add more jobs
]
```

---

## 7. Change Color Scheme

In `tailwind.config.js`:

```javascript
colors: {
  primary: '#1a1a1a',      // Dark background
  secondary: '#ff6b35',    // Orange - main accent
  accent: '#f7931e',       // Gold - secondary accent
  dark: '#0f0f0f',
  light: '#f5f5f5',
}
```

**Popular Color Combinations:**

**Blue Professional:**
```
primary: '#0a0e27'
secondary: '#0066cc'
accent: '#00a8ff'
```

**Purple Modern:**
```
primary: '#1a1627'
secondary: '#7c3aed'
accent: '#a855f7'
```

**Green Tech:**
```
primary: '#0f2818'
secondary: '#00d966'
accent: '#40ff80'
```

---

## 8. Update Meta Tags & SEO

In `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'A brief description of you and your work',
  openGraph: {
    title: 'Your Name | Your Title',
    description: 'Your description here',
    url: 'https://yourportfolio.com',
    type: 'website',
  },
}
```

---

## 9. Common CSS Changes

### Increase heading size:
Edit `tailwind.config.js` keyframes, or in components change:
```tsx
<h1 className="text-6xl md:text-8xl">  // Adjust numbers
```

### Change animations speed:
In `tailwind.config.js`:
```javascript
animation: {
  fadeIn: 'fadeIn 0.8s ease-in',    // ← Change 0.8s
  slideUp: 'slideUp 0.6s ease-out', // ← Change 0.6s
}
```

### Adjust spacing:
Tailwind uses `p-` (padding), `m-` (margin), `gap-` (gap) utilities:
```tsx
<div className="p-6 md:p-12">  // Padding: 1.5rem on mobile, 3rem on desktop
<div className="mb-8 md:mb-16"> // Margin bottom: 2rem on mobile, 4rem on desktop
```

---

## 10. Adding New Sections

Create a new component in `components/NewSection.tsx`:

```typescript
export default function NewSection() {
  return (
    <section id="new-section" className="py-20 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">
          Your <span className="gradient-text">Section Title</span>
        </h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

Then import and add to `app/page.tsx`:

```typescript
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <NewSection />  // ← Add here
      <Projects />
      {/* ... */}
    </main>
  )
}
```

---

## Tips for Best Results

✅ **Do's:**
- Keep text concise and impactful
- Use 2-3 accent colors maximum
- Test on mobile regularly (`npm run dev`)
- Update all social links consistently
- Keep project descriptions brief (2-3 sentences)

❌ **Don'ts:**
- Don't add too many animations (performance)
- Don't use more than 4-5 colors
- Don't make text too small (`text-xs` is minimum)
- Don't leave placeholder content in
- Don't forget to update .env.local with your actual Supabase keys

---

**Need help? Check README.md or SETUP_GUIDE.md**
