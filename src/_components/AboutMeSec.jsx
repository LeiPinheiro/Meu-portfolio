'use client'

import styles from "./AboutMeSec.module.css"
import Lottie from "lottie-react"
import sitesAnimation from "../assets/sites.json"
import { FaCertificate } from "react-icons/fa";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import AberturaSec from "./AberturaSec";
import 'animate.css';



function AboutMeSec() {

    return (
    <div id="sobreMim">
        <AberturaSec  p1="Me conheça melhor!" p2="Sobre mim"/>
        <div className={styles.animationContainer}>
            <Lottie animationData={sitesAnimation}/>
        </div>
        <div className={styles.esqSec}>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUp" offset={350}>
                <div className={styles.boxesContainer}>
                    <div className={styles.expBox}>
                        <i><FaCertificate className={styles.icon}/></i>
                        <p className={styles.firstP}>Experiência</p>
                        <p className={styles.secondP}>+1 ano</p>
                        <p className={styles.secondP}>Desenvolvimento Front-end</p>
                    </div>
                    <div className={styles.eduBox}>
                        <i><HiMiniClipboardDocumentCheck className={styles.icon}/></i>
                        <p className={styles.firstP}>Educação</p>
                        <p className={styles.secondP}>Cursos e Bootcamps Online</p>
                        <p className={styles.secondP}>Aluno certificado</p>
                    </div>
                </div>    
            </ScrollAnimation>
            <div className={styles.textContainer}>
                <p>Oi! Meu nome é Leí, tenho 19 anos e sou do Rio Grande do Norte. Desde que comecei a estudar desenvolvimento <span className={styles.spanText}>Front-end</span> há um ano, tenho me apaixonado cada vez mais por criar interfaces web que são tanto funcionais quanto visualmente atraentes.<br /><br />
                Estou sempre em busca de novas tecnologias e desafios. Meu próximo objetivo é aprender mais sobre desenvolvimento <span className={styles.spanText}>Back-end</span> e <span className={styles.spanText}>Mobile</span>, para poder oferecer soluções ainda mais completas e evoluir como desenvolvedor.</p>
            </div>
        </div>
    </div>    
    )
}

export default AboutMeSec