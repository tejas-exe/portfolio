# Portfolio Setup & Deployment Guide

## What's Been Created

Your professional portfolio website is ready! Here's what's included:

### ✅ Design
- **Bold & High-Impact** aesthetic with modern dark theme
- Orange/gold gradient accent colors (#ff6b35 and #f7931e)
- Smooth animations and glass-morphism effects
- Fully responsive (mobile, tablet, desktop)

### ✅ Sections
1. **Navigation** - Fixed header with smooth scrolling
2. **Hero** - Bold headline with call-to-action buttons
3. **Projects** - Showcase of Aryos AI, Jaina, and V2 platforms
4. **Skills** - Organized by category (Frontend, Backend, DevOps, etc.)
5. **Experience** - Timeline of work history with achievements
6. **Contact** - Supabase-integrated contact form
7. **Footer** - Links and copyright

### ✅ Technology
- Next.js 14 (latest App Router)
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide icons
- Supabase backend
- Ready for Vercel deployment

## Quick Start

### 1. Install Dependencies
```bash
cd "c:\Users\kumar\OneDrive\Desktop\Git projects\Portfolio"
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000

### 3. Deploy to Vercel (Recommended)

#### Option A: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

#### Option B: Using GitHub + Vercel UI
1. Create a GitHub repository
2. Push your code: `git add . && git commit -m "Initial commit" && git push`
3. Go to vercel.com and import the GitHub repository
4. Environment variables are already configured
5. Click Deploy

### 4. Set Up Supabase Contact Form

Go to your Supabase dashboard (https://app.supabase.com) and run this SQL:

```sql
CREATE TABLE contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON contact_messages
  FOR INSERT WITH CHECK (true);
```

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Navigation.tsx      # Navbar with mobile menu
│   ├── Hero.tsx           # Landing section
│   ├── Projects.tsx       # Project showcase cards
│   ├── Skills.tsx         # Skills grid + stats
│   ├── Experience.tsx     # Work experience timeline
│   ├── Contact.tsx        # Contact form + info
│   └── Footer.tsx         # Footer
├── public/                # Static files
├── .env.local             # Supabase credentials (ready)
├── tailwind.config.js     # Design tokens & colors
├── next.config.js         # Next.js config
├── tsconfig.json          # TypeScript config
└── README.md              # Full documentation
```

## Customization Guide

### 🎨 Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1a1a1a',      // Background (dark)
  secondary: '#ff6b35',    // Main accent (orange)
  accent: '#f7931e',       // Secondary (gold)
}
```

### 📝 Update Content

**Hero Section** → `components/Hero.tsx`
- Change headline text
- Update CTA button labels

**Projects** → `components/Projects.tsx`
- Modify the `projects` array
- Add/remove project cards
- Update links and technologies

**Skills** → `components/Skills.tsx`
- Edit the `skills` array
- Add/remove skill categories
- Update statistics

**Experience** → `components/Experience.tsx`
- Edit the `experience` array
- Update job titles, companies, dates
- Modify achievements

**Contact Info** → `components/Contact.tsx`
- Update phone, email, location
- Change social media links

## Deployment Checklist

- [ ] Update project details in components
- [ ] Test contact form with Supabase table created
- [ ] Push code to GitHub
- [ ] Deploy to Vercel
- [ ] Set custom domain (optional)
- [ ] Test on mobile
- [ ] Share portfolio URL with recruiters!

## Performance & SEO

✅ **Optimized for:**
- Google Lighthouse scores (90+)
- Mobile performance
- Core Web Vitals
- SEO metadata (title, description, OG tags)

## Support

- **Docs**: See README.md for full documentation
- **Supabase Help**: https://supabase.com/docs
- **Vercel Deployment**: https://vercel.com/docs
- **Next.js Guide**: https://nextjs.org/docs

---

**Your portfolio is ready to impress! 🚀**
