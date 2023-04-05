import Spline from "@splinetool/react-spline";

import "./assets/App.css"
import { Navbar } from "./Navbar";

export default function App() {
  const removeInlineStyles = () => {
    document.getElementById("spline")!.removeAttribute("style");
  }

  return (
    <>
      <Spline
        id="spline"
        onLoad={removeInlineStyles}
        scene="https://prod.spline.design/HZajAMeCpzhAS6Ty/scene.splinecode"
      />
      <Navbar/>
      <div className="text text-6xl mt-[70vh]">Une expérience de thé inoubliable avec notre sélection unique de thés et d'accessoires de thé.</div>
      <div className="text text-left pr-[30vw]">Nous travaillons directement avec des producteurs de thé engagés dans des pratiques de cultures équitables et durables, pour vous offrir une sélection de thés de qualité supérieure tout en respectant la planète.</div>
      <div className="text flex justify-between">
        <div className="text-left w-1/3">Profitez de notre sélection d'accessoires de thé de qualité, conçus pour vous aider à préparer votre tasse de thé parfait.</div>
        <div className="text-right w-1/3">Théières, tasses, infuseurs - nous avons tout ce dont vous avez besoin pour une expérience de thé complète.</div>
      </div>
      <div className="text text-5xl mt-[70vh] text-center">Contactez-nous</div>
      <div className="text mt-8 mb-[30vh] z-10"><a className="cursor-pointer" href="mailto:fausse@adresse.com">✉️ fausse@adresse.com</a></div>
      <Navbar bottom/>
    </>
  );
}
