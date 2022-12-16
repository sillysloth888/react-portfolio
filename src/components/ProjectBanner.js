import styles from "./ProjectBanner.module.css"

const ProjectBanner = ({ imgSrc }) => (
  <div className={styles["img-container"]}>
    <img src={imgSrc}/>
  </div>
)

export default ProjectBanner