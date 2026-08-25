# Touch & Shine Beauty Hair Salon

Marketing website for Touch & Shine in Regina, SK. Built with Next.js, TypeScript, and Tailwind CSS. Booking is handled externally through Square Appointments.

**Live domain:** [touchandshine.ca](https://touchandshine.ca) (DNS via GoDaddy → hosted on Vercel)

## Edit these files

- `src/data/business.ts` — salon name, phone, address, hours, Square booking URL, reviews
- `src/data/services.ts` — service names, prices, durations, and popular flags
- `public/logo.png` — salon logo
- `public/images/store/` — salon gallery photos

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

1. Push to GitHub
2. Vercel auto-builds from the repo
3. Point GoDaddy DNS to the records shown in Vercel → Project → Settings → Domains

No backend or database is required. Do not set `MAINTENANCE_MODE=true` unless you intentionally want the maintenance page.
