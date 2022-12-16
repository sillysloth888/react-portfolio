import { HashLink } from 'react-router-hash-link';
import ProjectItem from "../components/ProjectItem"
import styles from "./Projects.module.css"
import iterativeImg from "../assets/project_thumbnails/roomkast.png"
import albumImg from "../assets/project_thumbnails/album.png"
import redesignImg from "../assets/project_thumbnails/redesign.png"
import happinessImg from "../assets/project_thumbnails/happiness.png"
import useScrollToTop from '../hooks/useScrollToTop';

const Projects = () => {
  const categories = ["design", "development"]
  const project_data = [
    {
      id: 0,
      category: "design",
      title: "Troop PVD's Landing Page",
      img: redesignImg,
      description: "Redesigning a restaurant's homepage.",
      link: "site-redesign"
    },
    {
      id: 1,
      category: "development",
      title: "Album Discovery App",
      img: albumImg,
      description: "A React app for aggregating albums.",
      link: "album-app"
    },
    {
      id: 2,
      category: "design",
      title: "Roomkast App",
      img: iterativeImg,
      description: "Prototyping a roommate matching app.",
      link: "roomkast-app"
    },
    {
      id: 2,
      category: "development",
      title: "Happy Places",
      img: happinessImg,
      description: "A visual essay about Brown students' happy places.",
      link: "happiness-story"
    },
  ]

  useScrollToTop()
  return (
    <div className="page">
      <div className={styles["intro-text-container"]}>
        <h1 id={styles["hello-text"]}>hi there, i'm <b>sloth.</b></h1>
        <p>I'm a <b>developer</b> and <b>designer</b> passionate about creating joyful tools and experiences.</p>
        <HashLink to="#projects-start" id={styles["see-work-wrapper"]} className="simple-button"> 
          works ↓
        </HashLink>
      </div>
      
      <div className={styles.projects}>
        {categories.map((category, index) => (
          <div className="projectCategory" key={category}>
            <h2 
              className={styles["category-title"]} 
              id={index === 0 ? "projects-start" : ""}>
                {category}
            </h2>
            <div className={styles["projects-list"]}>
              {project_data.filter((project) => {
                  return category === project.category
              }).map((project) => 
                <ProjectItem
                  key={project.id}
                  title={project.title}
                  thumbnail={project.img}
                  descr={project.description}
                  link={project.link}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Projects