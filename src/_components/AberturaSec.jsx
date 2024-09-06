import styles from "./AberturaSec.module.css"

function AberturaSec(props) {
    return (
        <div className={styles.aberturaContainer}>
            <p className={styles.p1}>{props.p1}</p>
            <p className={styles.p2}>{props.p2}</p>
        </div>
    )
}

export default AberturaSec