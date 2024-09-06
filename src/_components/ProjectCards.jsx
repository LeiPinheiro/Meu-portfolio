import styles from "./ProjectCard.module.css"

function ProjectCards(props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImageDiv}>
                <img src={props.imageURL} alt="Project Image" className={styles.image} />
            </div>
            <div className={styles.tagContainer}>
                <p className={styles.tag1}>HTML</p>
                <p className={styles.tag2}>CSS</p>
                <p className={styles.tag3}>JavaScript</p>
                <p className={styles.tag4}>Node</p>
                <p className={styles.tag5}>React</p>
            </div>
            <div className={styles.cardTextContainer}>
                <p className={styles.p1}>{props.p1}</p>
                <p className={styles.p2}>{props.p2}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.btn1}>Ver site</button>
                <button className={styles.btn2}>Código</button>
            </div>
        </div>
    )
}

export default ProjectCards