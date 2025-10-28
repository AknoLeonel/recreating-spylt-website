import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPin = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "9% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  }, [isMobile]);
  return (
    <section className="vd-pin-section">
      <div
        className="size-full cursor-pointer video-box"
        style={{ clipPath: isMobile ? 'circle(100% at 50% 50%)' : `circle(9.5% at 50% 50%)` }}
      >
        <video
          playsInline
          muted
          loop
          autoPlay
          src="../../videos/pin-video.mp4"
        />
        <div className=" abs-center md:scale-100 scale-200">
          <img
            src="../../images/circle-text.svg"
            alt="play video"
            className="spin-circle"
          />
          <div className="play-btn">
            <img
              src="../../images/play.svg"
              alt=""
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPin;
