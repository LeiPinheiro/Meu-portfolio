"use client"
import styles from "./Header.module.css"
import { FaCode } from "react-icons/fa";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return (
        <header>
            <nav className={styles.navContainer}>
                <div className={styles.logoContainer}><p><FaCode /></p></div>
                <ul className={styles.ulContainer}>
                    <li className={styles.list}><a href="#sobreMim" className={styles.link}>Sobre</a></li>
                    <li className={styles.list}><a href="#exp"className={styles.link}>Experiência</a></li>
                    <li className={styles.list}><a href="#projetos" className={styles.link}>Projetos</a></li>
                    <li className={styles.list}><a href="#contato" className={styles.link}>Contato</a></li>
                </ul>
                <div className={styles.mobileMenuIcon}>
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <IoMdClose  className={styles.icon}/> : <IoMdMenu className={styles.icon}/>}
                    </button>
                </div>
            </nav>
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
            <ul className={styles.ulContainer}>
                    <li className={styles.list}><a href="#sobreMim" className={styles.link}>Sobre</a></li>
                    <li className={styles.list}><a href="#exp" className={styles.link}>Experiência</a></li>
                    <li className={styles.list}><a href="#projetos"className={styles.link}>Projetos</a></li>
                    <li className={styles.list}><a href="#"  className={styles.link}>Contato</a></li>
                </ul>

            </div>
        </header>
    )
}

export default Header