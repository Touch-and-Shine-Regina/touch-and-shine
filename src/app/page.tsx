import { SiteAmbient } from "@/components/SiteAmbient";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocationHours } from "@/components/LocationHours";
import { MobileActionBar } from "@/components/MobileActionBar";
import { PopularServices } from "@/components/PopularServices";
import { Reviews } from "@/components/Reviews";
import { ServiceTabs } from "@/components/ServiceTabs";
import { StoreGallery } from "@/components/StoreGallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div id="top" className="relative isolate flex min-h-full flex-col">
      <SiteAmbient />
      <a
        href="#services"
        className="absolute top-0 left-0 z-[100] -translate-y-[160%] bg-gold px-4 py-2 text-sm font-semibold text-[color:var(--book-btn-text)] shadow-md focus:translate-x-2 focus:translate-y-2 focus:outline-2 focus:outline-offset-2 focus:outline-gold"
      >
        Skip to services
      </a>
      <Header />
      <main className="flex-1">
        <Hero />
        <PopularServices />
        <ServiceTabs />
        <StoreGallery />
        <WhyChooseUs />
        <Reviews />
        <LocationHours />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
