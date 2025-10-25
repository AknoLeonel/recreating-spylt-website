import f1 from "../../public/videos/f1.mp4";
import f2 from "../../public/videos/f2.mp4";
import f3 from "../../public/videos/f3.mp4";
import f4 from "../../public/videos/f4.mp4";
import f5 from "../../public/videos/f5.mp4";
import f6 from "../../public/videos/f6.mp4";
import f7 from "../../public/videos/f7.mp4";

import p1 from "../../public/images/p1.png";
import p2 from "../../public/images/p2.png";
import p3 from "../../public/images/p3.png";
import p4 from "../../public/images/p4.png";
import p5 from "../../public/images/p5.png";
import p6 from "../../public/images/p6.png";
import p7 from "../../public/images/p7.png";

const flavorlists = [
  {
    name: "Chocolate Milk",
    color: "brown",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Stawberry Milk",
    color: "red",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Cookies & Cream",
    color: "blue",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Peanut Butter Chocolate",
    color: "orange",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Vanilla Milkshake",
    color: "white",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Max Chocolate Milk",
    color: "black",
    rotation: "md:rotate-[8deg] rotate-0",
  },
];

const nutrientLists = [
  { label: "Potassium", amount: "245mg" },
  { label: "Calcium", amount: "500mg" },
  { label: "Vitamin A", amount: "176mcg" },
  { label: "Vitamin D", amount: "5mcg" },
  { label: "Iron", amount: "1mg" },
];

const cards = [
  {
    src: f1,
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: p1,
    translation: "translate-y-[-5%]",
  },
  {
    src: f2,
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: p2,
  },
  {
    src: f3,
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: p3,
    translation: "translate-y-[-5%]",
  },
  {
    src: f4,
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: p4,
    translation: "translate-y-[5%]",
  },
  {
    src: f5,
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: p5,
  },
  {
    src: f6,
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: p6,
    translation: "translate-y-[5%]",
  },
  {
    src: f7,
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: p7,
    translation: "translate-y-[10%]",
  },
];

export { flavorlists, nutrientLists, cards };
