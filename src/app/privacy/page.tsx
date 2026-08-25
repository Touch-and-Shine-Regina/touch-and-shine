import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileActionBar } from "@/components/MobileActionBar";
import { businessInfo } from "@/data/business";
import { container } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${businessInfo.name} in Regina, SK.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div id="top" className="relative isolate flex min-h-full flex-col">
      <Header />
      <main className="flex-1 py-10 lg:py-16">
        <article className={`${container} max-w-3xl`}>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
            Legal
          </p>
          <h1 className="mt-2 font-display text-[2.2rem] font-medium tracking-tight text-charcoal sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted">Last updated: August 25, 2026</p>

          <div className="mt-8 space-y-7 text-[15px] leading-relaxed text-charcoal">
            <section>
              <h2 className="font-display text-2xl font-medium">1. Overview</h2>
              <p className="mt-2 text-muted">
                This Privacy Policy explains how {businessInfo.name} (“we”) handles information
                when you use our website at {businessInfo.website}. This site is a marketing and
                booking entry point. We do not run a customer login or store booking data on our
                own servers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">2. Information we collect</h2>
              <p className="mt-2 text-muted">
                This website itself does not collect account passwords or payment card numbers.
                When you book online, Square Appointments (a third party) may collect your name,
                contact details, appointment preferences, and payment information under Square’s
                own privacy policy.
              </p>
              <p className="mt-2 text-muted">
                If you call, email, or message us on WhatsApp, Instagram, or Facebook, we receive
                the information you choose to share for scheduling and customer service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">3. How we use information</h2>
              <p className="mt-2 text-muted">
                We use contact and booking-related information to schedule appointments, provide
                services, respond to questions, and operate the salon. We do not sell your personal
                information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">4. Cookies and analytics</h2>
              <p className="mt-2 text-muted">
                The site may store a simple preference in your browser for light/dark appearance.
                We do not currently run third-party advertising or analytics trackers on this
                website. Hosting providers may process basic technical logs (such as IP address and
                requested pages) to keep the site secure and available.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">5. Third-party services</h2>
              <p className="mt-2 text-muted">
                Booking is handled by Square. Maps embeds and “directions” links use Google. Social
                icons open Instagram and Facebook. Those services process data under their own
                policies when you interact with them.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">6. Your choices</h2>
              <p className="mt-2 text-muted">
                You can contact us to update or correct salon contact details we hold, or to ask
                questions about this policy. For booking data stored by Square, use Square’s tools
                or ask us and we will help where we can.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium">7. Contact</h2>
              <p className="mt-2 text-muted">
                Privacy questions:{" "}
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="font-medium text-gold-dark underline-offset-4 hover:underline"
                >
                  {businessInfo.email}
                </a>{" "}
                or call {businessInfo.phoneDisplay}.
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
