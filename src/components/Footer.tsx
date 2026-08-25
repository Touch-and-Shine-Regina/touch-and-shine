import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/icons";
import {
  businessInfo,
  getTelHref,
  getWhatsAppHref,
} from "@/data/business";
import { container } from "@/lib/styles";
import { BookButton } from "@/components/BookButton";

const footerNav = [
  { href: "/#services", label: "Services" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#location", label: "Location" },
  { href: "/book", label: "Book" },
];

const footerOutlineBtn = "footer-action-btn";

export function Footer() {
  const showWhatsApp = Boolean(businessInfo.phoneRaw);

  return (
    <footer className="pb-[calc(7.5rem+env(safe-area-inset-bottom))] md:pb-10">
      <div className={container}>
        <div className="surface-luxe surface-luxe-gold border-t-0 px-5 py-7 sm:px-8 sm:py-9">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <Image
                src={businessInfo.logoPath}
                alt=""
                width={48}
                height={44}
                className="object-contain"
              />
              <div className="min-w-0">
                <p className="text-[15px] font-semibold tracking-[0.14em] text-charcoal uppercase">
                  Touch <span className="text-gold-dark">&</span> Shine
                </p>
                <p className="text-sm text-muted">Beauty Hair Salon · Regina, SK</p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-[#E1306C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E1306C]"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-[#1877F2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1877F2]"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-border" />

          <div className="mt-6 grid gap-6 sm:grid-cols-3 sm:items-start sm:gap-8">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
                Address
              </p>
              <address className="mt-2 text-base not-italic leading-relaxed text-charcoal">
                540 University Park Dr
                <br />
                Regina, SK {businessInfo.address.postalCode}
              </address>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
                Phone
              </p>
              <a
                href={getTelHref()}
                className="mt-2 inline-block text-lg font-medium text-charcoal underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {businessInfo.phoneDisplay}
              </a>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
                Explore
              </p>
              <nav
                aria-label="Footer"
                className="mt-2 flex flex-wrap gap-x-4 gap-y-1"
              >
                {footerNav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[15px] text-charcoal underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            <a href={getTelHref()} className={footerOutlineBtn}>
              <PhoneIcon className="h-4 w-4 text-[#DC2626]" />
              Call
            </a>
            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={footerOutlineBtn}
            >
              <PinIcon className="h-4 w-4" />
              Directions
            </a>
            {showWhatsApp ? (
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerOutlineBtn} col-span-2 sm:col-span-1`}
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                WhatsApp
              </a>
            ) : null}
            <BookButton className="col-span-2 w-full sm:col-span-3">
              Book Appointment
            </BookButton>
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-muted">
          <a
            href="/terms"
            className="underline-offset-4 hover:text-charcoal hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Terms of Service
          </a>
          <span className="mx-2 text-border">·</span>
          <a
            href="/privacy"
            className="underline-offset-4 hover:text-charcoal hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Privacy
          </a>
          <span className="mx-2 text-border">·</span>
          Website by Moon Sky
        </p>
      </div>
    </footer>
  );
}
