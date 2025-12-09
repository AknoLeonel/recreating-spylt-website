import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CANILTERRAFARIAS
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/pastor.png"
            className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom"
          />
        ) : (
          <video
            src="../../videos/alemão.mp4"
            autoPlay
            playsInline
            muted
            className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="../../images/yt.svg" />
          </div>
          <div className="social-btn">
            <img src="../../images/insta.svg" />
          </div>
          <div className="social-btn">
            <img src="../../images/tiktok.svg" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>Canil Terra Farias</p>
            </div>
            <div>
              <p>Ninhadas Atuais</p>
              <p>Próximas Ninhadas</p>
              <p>Filhotes Disponíveis</p>
            </div>
            <div>
              <p>Instagram</p>
              <p>WhatsApp</p>
              <p>Localização</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Entre na Lista de Espera VIP! Seja avisado primeiro sobre o nascimento de novas ninhadas.
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Seu melhor e-mail ou WhatsApp"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="../../images/arrow.svg" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2025 Canil Terra Farias - Todos os direitos reservados</p>
          <div className="flex items-center gap-7">
            <p>Política de Privacidade</p>
            <p>Termos de Uso</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
