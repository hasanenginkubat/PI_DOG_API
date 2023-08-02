import React, { useState } from "react";
import Github from '../Images/Github.png';
import Linkedin from '../Images/linkedin.png';
import style from "./about.module.css"
import turkeyFlag from "../Images/turkeyFlag.png";
import spainFlag from "../Images/spainFlag.png";


function About() {
  const [language, setLanguage] = useState("tr"); 

  const turkishExplanation = "React, Redux, Node.js, Express ve SQL teknolojilerini kullanarak geliştirdiğim köpek API’si ile işverenlere bilgi, tecrübe ve yaratıcılığımı göstermeyi amaçlıyorum. Bu projede zihinsel olarak büyük ilerleme kaydettim ve yaratıcılığımı geliştirdim. Gelecekteki projelerimde bu tecrübelerimi kullanarak daha profesyonel işler ortaya koyacağıma inanıyorum. Bu projem sayesinde IT sektöründe bir iş bulma şansımı arttırmayı umuyorum";
  const spanishExplanation = "Con mi API de perros desarrollada utilizando tecnologías React, Redux, Node.js, Express y SQL, mi objetivo es mostrar a los empleadores mi conocimiento, experiencia y creatividad. En este proyecto, logré un gran progreso mental y desarrollé mi creatividad. Creo que en mis proyectos futuros utilizaré estas experiencias para producir trabajos más profesionales. Espero aumentar mis posibilidades de encontrar un trabajo en el sector de TI gracias a este proyecto.";

  return (
    <div className={style.allDiv}>
      <h1 className={style.name}>Engin KUBAT</h1>
      
      <button className={style.button} onClick={() => setLanguage(language === "tr" ? "es" : "tr")}>
  {language === "tr" ? (
    <img src={turkeyFlag} alt="Turkey Flag" width="50" />
  ) : (
    <img src={spainFlag} alt="Spain Flag" width="50" />
  )}
</button>
<div className={style.p}>
<p>{language === "tr" ? turkishExplanation : spanishExplanation}</p>
</div>
      <div className={style.div1}>
        <h1>GitHub</h1>
        <a
          href="https://github.com/hasanenginkubat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="Github" width="100" />
        </a>
      </div>
      <div className={style.div2}>
        <h1>Linkedin</h1>
        <a
          href="https://www.linkedin.com/in/hasan-engin-kubat-621173255/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="Linkedin" width="100" />
        </a>
      </div>
    </div>
  );
}

export default About;
