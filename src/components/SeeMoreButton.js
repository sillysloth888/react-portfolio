import { Link } from "react-router-dom"
import styles from "./SeeMoreButton.module.css"

const SeeMoreButton = () => (
  <div className={styles["button-wrapper"]}>
    <Link className="simple-button" to="/">	← See more projects</Link>
  </div>
)

export default SeeMoreButton