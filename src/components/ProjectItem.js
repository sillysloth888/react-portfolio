import { useNavigate } from "react-router-dom";
import styles from "./ProjectItem.module.css"

const ProjectItem = ({ title, thumbnail, descr, link}) => {
  const navigate = useNavigate()
  const handleClick = (linkTo) => () => navigate(linkTo)
  
  return (
    <div 
      className={`card-button ${styles.item}`}
      onClick={handleClick(link)}
    >
      <div className={styles['img-container']}>
        <img src={thumbnail}/>
      </div>
      <h2>{title}</h2>
      <p>{descr}</p>
    </div>
  )
}

export default ProjectItem