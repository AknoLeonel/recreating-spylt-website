import videoNinhada from "../../public/videos/brin.mp4";
import videoTreino from "../../public/videos/1209.mp4";

// Importação de imagem de capa (use uma foto de um dos filhotes, renomeie para p1.png ou ajuste aqui)
import p1 from "../../public/images/p1.png";

const flavorlists = [
  {
    name: "Pastor Alemão",
    color: "black", // Cor chumbo/preta (referência à capa preta)
    rotation: "lg:rotate-[-8deg] rotate-0",
  },
  {
    name: "Capa Preta",
    color: "orange", // Cor laranja da identidade visual
    rotation: "lg:rotate-[8deg] rotate-0",
  },
  {
    name: "Pelo Curto",
    color: "blue", // Cor azul petróleo da identidade visual
    rotation: "lg:rotate-[-8deg] rotate-0",
  },
  {
    name: "Ninhada Bella",
    color: "brown", // Destaque para a ninhada atual
    rotation: "lg:rotate-[8deg] rotate-0",
  },
  {
    name: "Pronta Entrega",
    color: "white", // Destaque neutro
    rotation: "lg:rotate-[-8deg] rotate-0",
  },
];

const nutrientLists = [
  { label: "Vacinação", amount: "Importada" }, // Ref: NOBIVAC DHPPi+L
  { label: "Garantia Displasia", amount: "13 Meses" },
  { label: "Vermifugação", amount: "3 Doses" }, // Ref: Drontal/Canex
  { label: "Pedigree", amount: "CBPA/FCI" }, // Ref: CBPA, SBCPA ou CINOBRAS
  { label: "Garantia Viral", amount: "30 Dias" },
];

const cards = [
  {
    src: "/videos/brin.mp4", // Vídeo: brin.mp4
    rotation: "rotate-z-[-10deg]",
    name: "Socialização",
    img: p1,
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/brin.mp4", // Vídeo: IMG_7520.MOV
    rotation: "rotate-z-[4deg]",
    name: "Guarda",
    img: p1,
  },
  {
    src: "/videos/brin.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Temperamento",
    img: p1,
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/1209.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Estrutura",
    img: p1,
    translation: "translate-y-[5%]",
  },
];

export { flavorlists, nutrientLists, cards };