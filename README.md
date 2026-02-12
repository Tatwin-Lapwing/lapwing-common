# Lapwing Common

Landing page for **Lapwing Common**, a UK nature investment fund by TEEK Group Limited.

Built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Replacing Placeholder Assets

### Hero Background Image

The hero currently loads a placeholder from Unsplash. To use your own image:

1. Place your image in `public/hero.jpg` (recommended: 1920px+ wide, landscape orientation)
2. Update `components/Hero.tsx` — replace the `<Image>` `src` prop:

```tsx
// Before
src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80&auto=format&fit=crop"

// After
src="/hero.jpg"
```

### Team Photos

Team member cards show initial placeholders. To add real photos:

1. Place photos in `public/team/` (e.g., `edward-kerr.jpg`, `tatwin-owen-edmunds.jpg`)
2. Update `components/Team.tsx` — replace the placeholder `<div>` with:

```tsx
import Image from "next/image";

<Image
  src="/team/edward-kerr.jpg"
  alt="Edward Kerr"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### LinkedIn URLs

Search for `linkedIn: "#"` in `components/Team.tsx` and replace with real profile URLs.

## Contact Form — Resend Integration

The contact form currently logs to console. To integrate with [Resend](https://resend.com):

1. Install the SDK:

```bash
npm install resend
```

2. Create `app/api/contact/route.ts`:

```ts
import { Resend } from "resend";
import { NextResponse, type NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const { error } = await resend.emails.send({
    from: "Lapwing Common <noreply@lapwingcommon.com>",
    to: "contact@lapwingcommon.com",
    replyTo: email,
    subject: `Contact form: ${name}`,
    text: `From: ${name} (${email})\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

3. Add `RESEND_API_KEY` to your environment variables (`.env.local` for development, Vercel dashboard for production).

4. Update `components/Contact.tsx` — uncomment the `fetch` call in `handleSubmit` and remove the `console.log` / simulated delay.

## Deployment on Vercel

1. Push the repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel will auto-detect Next.js — no additional configuration needed
4. Add any environment variables (e.g., `RESEND_API_KEY`) in the Vercel project settings
5. Deploy

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts and metadata
├── page.tsx            # Landing page (composes all sections)
└── globals.css         # Tailwind theme (moss/earth color palettes)
components/
├── Navigation.tsx      # Fixed header with scroll-aware background
├── CustomCursor.tsx    # Decorative cursor ring (mouse devices only)
├── Hero.tsx            # Full-viewport hero with parallax
├── InvestmentThesis.tsx # Investment thesis with scroll animations
├── Team.tsx            # Team member grid with hover effects
├── Contact.tsx         # Contact form with validation
└── Footer.tsx          # Site footer
```

## Design System

Colors are defined in `app/globals.css` using Tailwind CSS 4 `@theme` blocks:

- **Moss** (`moss-50` through `moss-950`): Primary green palette
- **Earth** (`earth-50` through `earth-950`): Warm secondary tones
- **Cream** (`cream`): Background color
- **Bark** (`bark`): Dark accent

Typography:

- **Headings**: Playfair Display (serif)
- **Body**: Geist Sans (sans-serif)
