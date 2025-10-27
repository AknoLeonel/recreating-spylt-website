import ClipPathTitle from "../components/ClipPathTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const BenefitsSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 2,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.out",
      });
  }, []);
  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advanteages: <br />
            Explore the key Benefits of Choosing SPYLT
          </p>
          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"shelf stable"}
              color={"#faeade"}
              backgroundColor={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"protein + caffine"}
              color={"#222123"}
              backgroundColor={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"infinitly recyclable"}
              color={"#faeade"}
              backgroundColor={"#7f3b2d"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"lactose free"}
              color={"#2e2d2f"}
              backgroundColor={"#fed775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>
          <div className="md:mt-0 mt-10">
            <p>And much more...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
