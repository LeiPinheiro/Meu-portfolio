import styles from "./Arrow.module.css"
import { FaAngleDoubleUp } from "react-icons/fa";

function Arrow() {
    return(
        <div className={styles.arrowContainer}>
            <a href="#" className="arrowA"><FaAngleDoubleUp className="arrow"/></a>
        </div>
    )
}


export default Arrow