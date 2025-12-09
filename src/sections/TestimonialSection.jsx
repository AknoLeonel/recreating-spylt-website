import { useRef } from "react";
import { cards } from "../constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
const TestimonialSection = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: isTablet ? "" : "-100vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "100%",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 100,
    })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: -100,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: 100,
        },
        "<"
      );
    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: isTablet ? "12% top" : "top top", // 30% for mobile, top for desktop
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.5,
      ease: "power1.inOut",
    });
  }, []);

  const vdRef = useRef([]);
  const hanldePlayVideo = (index) => {
    const video = vdRef.current[index];
    video.play();
  };
  const hanldePauseVideo = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">FORÇA</h1>
        <h1 className="text-light-brown sec-title">ESTRUTURA</h1>
        <h1 className="text-black third-title">GARANTIA</h1>
      </div>
      <div className="pin-box">
        {cards.map(
          (
            { rotation, src, translation },
            i // src is a video and img well is an img path
          ) => (
            <div
              onMouseEnter={() => hanldePlayVideo(i)}
              onMouseLeave={() => hanldePauseVideo(i)}
              className={`vd-card cursor-pointer ${translation} ${rotation}`}
              key={i}
            >
              <video
                ref={(el) => (vdRef.current[i] = el)}
                src={`${src}`}
                playsInline
                autoPlay
                loop
                className="size-full object-cover"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
