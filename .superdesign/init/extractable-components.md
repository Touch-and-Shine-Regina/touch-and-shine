# Extractable components

## Header
- Source: `src/components/Header.tsx`
- Category: layout
- Description: Sticky top bar with logo, section links, theme toggle, Book CTA, mobile menu
- Extractable props: none required (nav hrefs are hardcoded `/#services` etc.)
- Hardcoded: salon name, logo, nav labels, Book button

## Footer
- Source: `src/components/Footer.tsx`
- Category: layout
- Description: Address, phone, hours, Book/Call/Directions/WhatsApp, TOS link
- Extractable props: none
- Hardcoded: address, brand lockup

## MobileActionBar
- Source: `src/components/MobileActionBar.tsx`
- Category: layout
- Description: Fixed bottom Call / Book / WhatsApp bar on small screens
- Extractable props: none
- Hardcoded: labels, tel/whatsapp hrefs

## BookButton
- Source: `src/components/BookButton.tsx`
- Category: basic
- Description: Gold booking CTA linking to `/book` (or external Square URL)
- Extractable props: size (`md`/`sm`/`menu`), serviceName, href, children
- Hardcoded: gold styles, black label color

## ServiceCard
- Source: `src/components/ServiceCard.tsx`
- Category: basic
- Description: Service row with name, duration, price, Book
- Extractable props: service, showFeaturedMark
- Hardcoded: GST split, Popular mark

## Hero
- Source: `src/components/Hero.tsx`
- Category: layout
- Description: Dark mustard split hero with large photo, display type, contact, featured prices
- Extractable props: none
- Hardcoded: featured menu items, copy
