import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);
const HeroSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.in",
        },
        "-=.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power3.inOut",
        },
        "-=.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: ".1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to('.hero-container', {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: 'power2.inOut'
    })
  }, []);
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <video
          src="../../videos/hero-bg.mp4"
          alt="heroimg"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"
        />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking delicious</h1>
          </div>
          <div
            className="hero-text-scroll"
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine</h1>
            </div>
          </div>

          <h2>
            Live life to the fullest with SPYLT: shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <button className="cursor-pointer select-none hero-button">
            <p className="select-none">Chug a SPYLT</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
