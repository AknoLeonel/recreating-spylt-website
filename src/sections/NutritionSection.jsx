import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants/constants";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const NutritionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [lists, setLists] = useState(nutrientLists);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });

    const secondTitleSplit = SplitText.create(".nutrition-second-title", {
      type: "chars",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".nutrition-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 10%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(secondTitleSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 1%",
        toggleActions: "play none none reverse",
      },
    });

    const paragraphSplit = SplitText.create(".nutrition-paragraph", {
      type: "words",
    });

    gsap.from(paragraphSplit.words, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".nutrition-paragraph",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else {
      setLists(nutrientLists);
    }
  }, [isMobile]);

  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        className="w-full object-cover"
        alt=""
      />
      <img src="/images/big-img-v2.png" alt="" className="big-img" />
      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">Genética</h1>
            </div>
            <div
              className="nutrition-text-scroll place-self-start"
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                opacity: 0,
              }}
            >
              <div className="bg-yellow-brown inline-block pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-milk-yellow nutrition-second-title">
                  De Ponta
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md overflow-hidden">
            <p className="nutrition-paragraph text-lg md:text-right text-balance font-paragraph">
              Nossos cães possuem controle rigoroso de saúde, vacinação importada e garantia contra displasia coxofemoral e de cotovelo.
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map(({ amount, label }, i) => (
              <div className="relative flex-1 col-center" key={i}>
                <div>
                  <p className="md:text-lg font-paragraph">{label}</p>
                  <p className="font-paragraph text-sm mt-2">garantia de</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {amount}
                  </p>
                </div>
                {i !== nutrientLists.length - 1 && (
                  <div className="spacer-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;