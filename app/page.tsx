import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesPreview from "@/components/ServicesPreview";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}
