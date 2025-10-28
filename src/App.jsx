import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import NutritionSection from "./sections/NutritionSection";
import BenefitsSection from "./sections/BenefitsSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";

export default function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main>
        <Navbar />
        <HeroSection />
        <MessageSection />
        <FlavorSection />
        <NutritionSection />
        <div>
          <BenefitsSection />
          <TestimonialSection />
        </div>
        <FooterSection />
      </main>
    </ReactLenis>
  );
}
