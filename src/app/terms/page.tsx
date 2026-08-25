import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileActionBar } from "@/components/MobileActionBar";
import { businessInfo } from "@/data/business";
import { container } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${businessInfo.name} in Regina, SK.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div id="top" className="relative isolate flex min-h-full flex-col">
      <Header />
      <main className="flex-1 py-10 lg:py-16">
        <article className={`${container} max-w-3xl`}>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
            Legal
          </p>
          <h1 className="mt-2 font-display text-[2.2rem] font-medium tracking-tight text-charcoal sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted">Last updated: August 15, 2026</p>

          <div className="mt-8 space-y-7 text-[15px] leading-relaxed text-charcoal">
            <section>
              <h2 className="font-display text-2xl font-medium">1. About these terms</h2>
              <p className="mt-2 text-muted">
                These Terms of Service govern use of the {businessInfo.name} website and online
                booking. By using this site or booking an appointment, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">2. Salon information</h2>
              <p className="mt-2 text-muted">
                {businessInfo.name} is located at {businessInfo.address.street},{" "}
                {businessInfo.address.city}, {businessInfo.address.province}{" "}
                {businessInfo.address.postalCode}. Phone: {businessInfo.phoneDisplay}. Email:{" "}
                {businessInfo.email}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">3. Booking and payments</h2>
              <p className="mt-2 text-muted">
                Appointments are scheduled through Square Appointments. Square processes booking
                and payment information according to its own terms. Prices on this website are listed
                before GST unless noted otherwise. Final amounts, availability, and confirmation
                are controlled by Square and the salon.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">4. Cancellations and late arrivals</h2>
              <p className="mt-2 text-muted">
                Please cancel or reschedule as early as you can if you cannot attend. Late arrivals
                may reduce service time or require rebooking. The salon may refuse or reschedule
                service if time or safety does not allow a complete appointment.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">5. Services and results</h2>
              <p className="mt-2 text-muted">
                Colour, keratin, smoothing, and similar treatments can vary with hair length,
                density, and condition. Staff may recommend a different service after consultation.
                Results are not guaranteed to match a photo or a prior visit at another salon.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">6. Website content</h2>
              <p className="mt-2 text-muted">
                Service names, prices, and hours on this site are provided for convenience and may
                change. If a listing conflicts with Square or in-salon information, Square and the
                salon desk take priority.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">7. Limitation of liability</h2>
              <p className="mt-2 text-muted">
                To the extent allowed by Saskatchewan and Canadian law, {businessInfo.shortName} is
                not liable for indirect or incidental damages arising from website use or third-party
                booking tools. Nothing in these terms limits rights that cannot be waived by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">8. Contact</h2>
              <p className="mt-2 text-muted">
                Questions about these terms:{" "}
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="font-medium text-gold-dark underline-offset-4 hover:underline"
                >
                  {businessInfo.email}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
