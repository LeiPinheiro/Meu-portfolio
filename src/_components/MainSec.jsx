'use client'
import styles from "./MainSec.module.css"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import ShinyButton from "@/components/magicui/shiny-button"
import ShimmerButton from "@/components/magicui/shimmer-button"


function MainSec() {
    return(
    <>
        <main>
            <div className={styles.mainContainer}>
                <div className={styles.text}>
                    <p className={styles.firstP}>Olá, meu nome é</p>
                    <h1>Leí Pinheiro</h1>
                    <p className={styles.secondP}>Desenvolvedor Front-end</p>
                </div>
                <div className={styles.buttonContainer}>
                    <a href="#"><ShinyButton text="Baixar CV" className={styles.btn1}/></a>
                    <a href="#contato"><ShimmerButton shimmerColor="rgb(255,255,255,35%)" background="rgb(0,0,0,85%)" borderRadius="10px" className={styles.btn2}>Meu contato</ShimmerButton></a>
                </div>
                <div className={styles.socialIconsContainer}>
                    <a href="https://www.linkedin.com/in/leí-pinheiro-de-souza-santos-4012a72bb/" target="blank"><FaLinkedin /></a>
                    <a href="https://github.com/LeiPinheiro" target="blank"><FaGithub /></a>
                </div>
            </div>
        </main>
    </>    
    )
}

export default MainSec