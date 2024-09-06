import AberturaSec from "./AberturaSec"
import styles from "./ExpSec.module.css"


function ExpSec(){
    return (
        <div className={styles.expContainer} id="exp">
            <AberturaSec  p1="Tecnologias que uso!" p2="Experiência"/>
            <div className={styles.topText}>
                <p className={styles.frontP}>Front-end</p>
                <p className={styles.backP}>Back-end</p>
            </div>
            <div className={styles.boxesContainer}>
                <div className={styles.frontBox}>
                    <div className={styles.frontItem}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="Html5 Logo" className={styles.html} />
                        <p>HTML5</p>
                    </div>
                    <div className={styles.frontItem}>
                        <img src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo-1.png" alt="Css Logo" className={styles.css} />
                        <p>CSS3</p>
                    </div>
                    <div className={styles.frontItem}>
                        <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="Javascript Logo" className={styles.javascript} />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.frontItem}>
                        <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="React Logo" className={styles.react} />
                        <p>React</p>
                    </div>
                    <div className={styles.frontItem}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" alt="Tailwind Logo" className={styles.tailwind} />
                        <p>Tailwind CSS</p>
                    </div>
                    <div className={styles.frontItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Bootstrap Logo" className={styles.bootstrap} />
                        <p>Bootstrap</p>
                    </div>
                    <div className={styles.frontItem}>
                        <img src="https://sass-lang.com/assets/img/styleguide/seal-color.png" alt="Sass Logo" className={styles.sass} />
                        <p>Sass</p>
                    </div>

                </div>
                
                <div className={styles.backBox}>
                    <div className={styles.backText}>
                        <p>Ainda aprendendo Back-end</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpSec