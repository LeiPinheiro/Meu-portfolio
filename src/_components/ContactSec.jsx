import styles from "./ContactSec.module.css"
import { FaWhatsapp } from "react-icons/fa6";
import AberturaSec from "./AberturaSec";
import { MdAlternateEmail } from "react-icons/md";

function ContactSec (){
    return(
    <>    
        <AberturaSec  p1="Envie uma mensagem!" p2="Contato"/>
        <div className={styles.contactContainer}>
            <div className={styles.contactOptionsContainer} id="contato">
                <div className={styles.phoneNumberContainer}>
                    <button><a href="https://web.whatsapp.com/send?phone=+55 84 996038918" target="blank"><FaWhatsapp />Entre em contato por Whatsapp</a></button>
                    <p>Meu numero: +55 84 996038918</p>
                </div>
                <div className={styles.emailContainer}>
                    <button><a href="mailto:contatopinheirolei@gmail.com" target="blank"><MdAlternateEmail />Entre em contato por Email</a></button>
                    <p>Meu gmail: contatopinheirolei8@gmail.com</p>
                </div>
            </div>
        </div>
    </>    
    )
}

export default ContactSec