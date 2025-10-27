import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { flavorlists } from "../constants/constants";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "15% top",
          end: `+=${scrollAmount + 2500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-=${scrollAmount + 2500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "15% top",
        end: "+=2000px",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -35,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -30,
          ease: "power1.inOut",
        },
        "<"
      );
  }, [isTablet]);
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors 2xl:mt-30">
        {flavorlists.map(({ name, color, rotation }) => (
          <div
            className={`relative z-30  lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${rotation}`}
            key={name}
          >
            <img
              src={`../../images/${color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />
            <img
              src={`../../images/${color}-drink.webp`}
              alt=""
              className="drinks"
            />
            <img
              src={`../../public/images/${color}-elements.webp`}
              alt=" "
              className="elements"
            />

            <h1>{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
