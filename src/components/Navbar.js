import {
    BrowserRouter as Router,
    Routes, Route, NavLink
} from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
    const activeClassName = styles.active
    
    return (
        <div className={styles.navbar}>
            <div className={styles.test}>
                <NavLink id={styles.name} to={`/`}>silly sloth</NavLink>
            </div> 
            <div className={styles.links}>
                <NavLink 
                    to={`/`}
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    works
                </NavLink>
                <NavLink 
                    to={`about`}
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    about
                </NavLink>   
            </div>
        </div>     
    )
}

export default Navbar