# Tejas Kumarley - Portfolio Website

A modern, bold, and high-impact portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Design**: Bold typography, gradient effects, and smooth animations
🚀 **Fast Performance**: Optimized with Next.js and Vercel
📱 **Fully Responsive**: Beautiful on desktop, tablet, and mobile
💼 **Project Showcase**: Display your best work with detailed descriptions
✉️ **Contact Form**: Integrated with Supabase for message storage
🎯 **SEO Optimized**: Meta tags and structured data ready

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Supabase
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Variables**
The `.env.local` file is already configured with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://hcqelgswfedtfpsrlrlo.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_zIEBaAlsMZEFyrO8yJfh3A_Gu0Bi3NT
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Setting Up Supabase Contact Form

1. **Create a Supabase table** for contact messages:
```sql
CREATE TABLE contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
CREATE POLICY "Allow public insert" ON contact_messages
  FOR INSERT WITH CHECK (true);
```

2. **Enable public access** in Supabase dashboard (Authentication > Policies)

## Deployment to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables from `.env.local`
   - Deploy

3. **Custom Domain** (optional)
   - Configure in Vercel project settings

## Customization

### Colors
Edit the colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#1a1a1a',      // Main background
  secondary: '#ff6b35',    // Primary accent (orange)
  accent: '#f7931e',       // Secondary accent (gold)
}
```

### Content
- **Hero Section**: Edit `components/Hero.tsx`
- **Projects**: Edit `components/Projects.tsx` array
- **Skills**: Edit `components/Skills.tsx` array
- **Experience**: Edit `components/Experience.tsx` array
- **Contact Info**: Edit `components/Contact.tsx` contact details

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx           # Hero section
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills section
│   ├── Experience.tsx     # Work experience
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Performance Tips

- Images are optimized with Next.js Image component
- CSS is purged and minified by Tailwind
- JavaScript is code-split automatically by Next.js
- Deploy on Vercel for best performance

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Feel free to use this portfolio template for your own projects!

## Support

For questions or issues, reach out to:
- Email: kumarley.tejas7@gmail.com
- LinkedIn: linkedin.com/in/tejas-kumarley
- GitHub: github.com/tejaskumarley
