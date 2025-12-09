import ClipPathTitle from "../components/ClipPathTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoPin from "../components/VideoPin";
const BenefitsSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 2,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "+=800px",
        scrub: 1.5,
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
            Linhagem de Excelência: <br />
            Conheça os diferenciais do Canil Terra Farias
          </p>
          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Pedigree CBKC/FCI"}
              color={"#faeade"}
              backgroundColor={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Genética Apurada"}
              color={"#222123"}
              backgroundColor={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Temperamento Equilibrado"}
              color={"#faeade"}
              backgroundColor={"#7f3b2d"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Controle de Displasia"}
              color={"#2e2d2f"}
              backgroundColor={"#fed775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>
          <div className="md:mt-0 mt-10">
            <p>E muito mais tradição...</p>
          </div>
        </div>
      </div>
      <div className="relative overlay-box">
        <VideoPin />
      </div>
    </section>
  );
};

export default BenefitsSection;
