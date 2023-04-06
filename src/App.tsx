import Spline from "@splinetool/react-spline";
import { Navbar } from "./Navbar";
import { Text } from "./Text";

import "./assets/App.css";

export default function App() {
  const removeInlineStyles = () => {
    document.getElementById("spline")!.removeAttribute("style");
  };

  return (
    <>
      <Spline
        id="spline"
        onLoad={ removeInlineStyles }
        scene="https://prod.spline.design/HZajAMeCpzhAS6Ty/scene.splinecode"
      />
      <Navbar/>
      <Text className="text-6xl mt-[70vh]">
        Une expérience de thé inoubliable avec notre sélection unique de thés et
        d'accessoires de thé.
      </Text>
      <Text color="#14532d" className="text-left pr-[30vw]">
        Nous travaillons directement avec des producteurs de thé engagés dans des
        pratiques de cultures équitables et durables, pour vous offrir une sélection de thés de qualité supérieure tout
        en respectant la planète.
      </Text>
      <Text color="#0f172a" className="flex justify-between">
        <div className="text-left w-1/3">Profitez de notre sélection d'accessoires de thé de qualité, conçus pour vous
          aider à préparer votre tasse de thé parfaite.
        </div>
        <div className="text-right w-1/3">Théières, tasses, infuseurs - nous avons tout ce dont vous avez besoin pour
          une expérience de thé complète.
        </div>
      </Text>
      <Text className="text-5xl mt-[140vh] text-center">Contactez-nous</Text>
      <div className="text mt-8 mb-[20vh] z-10"><a className="cursor-pointer" href="mailto:fausse@adresse.com">✉️
        fausse@adresse.com</a></div>
      <Navbar bottom/>
    </>
  );
}
