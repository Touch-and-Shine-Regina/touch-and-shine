# Layouts

## Root layout
Path: `src/app/layout.tsx`
Fonts: Outfit (`--font-outfit` / sans), Cormorant Garamond (`--font-cormorant` / display). Manual light/dark via ThemeProvider + inline anti-flash script.

```tsx
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-cream font-sans text-charcoal">
        <Script id="theme-init" strategy="beforeInteractive">{themeInitScript}</Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

## Header
Path: `src/components/Header.tsx`
Sticky frosted bar, logo, nav (Services / Why us / Reviews / Location), ThemeToggle, Book, hamburger.

```tsx
<header className="sticky top-0 z-50 border-b border-border-gold/80 bg-[var(--header-glass)] shadow-[0_1px_0_rgba(196,160,70,0.12)] backdrop-blur-xl">
```

Full source: `src/components/Header.tsx` (110 lines).

## Footer
Path: `src/components/Footer.tsx`
Address, phone, hours, Book Appointment, Call, Directions, WhatsApp, TOS.

## MobileActionBar
Path: `src/components/MobileActionBar.tsx`
Fixed bottom Call | Book | WhatsApp on `md:hidden`.

## SiteAmbient
Path: `src/components/SiteAmbient.tsx`
Fixed grain / glow / vignette behind home content.
