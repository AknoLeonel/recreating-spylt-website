import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const FlavorTitle = () => {
  useGSAP(() => {
    const stTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const ndTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(stTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(ndTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <div className="general-title col-center 2xl:pt-32 h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>WE HAVE 6</h1>
      </div>

      <div
        className="flavor-text-scroll"
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          opacity: 0,
        }}
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
