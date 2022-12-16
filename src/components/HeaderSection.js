import styles from "./HeaderSection.module.css"

const HeaderSection = ({headerInfo}) => (
  <div className={`project-section ${styles["header-section"]}`}>
    <h1>{headerInfo.title}</h1>
    <div>
      <h2>tl;dr</h2>
      <p>{headerInfo.tldr}</p>
    </div>
    <div className={styles["info-box"]}>
      <div>
        <h3>tools used</h3>
        <ul>
          {headerInfo.tools.map((tool) => 
            <p key={tool}>{tool}</p>
          )}
        </ul>
      </div>
      <div>
        <h3>team</h3>
        <ul>
          {headerInfo.team.map((name) =>
            <p key={name}>{name}</p>
          )}
        </ul>
      </div>
      <div>
        <h3>timeline</h3>
        <ul>
          <p>{headerInfo.timeline}</p>
        </ul>
      </div>
    </div>
  </div>
)

export default HeaderSection