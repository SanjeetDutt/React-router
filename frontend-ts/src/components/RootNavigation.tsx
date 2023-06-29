import styles from "./RootNavigation.module.scss"
import {NavLink} from "react-router-dom";

function RootNavigation(){

    const activeClassHandler = (state:{isActive:boolean})=>{
        if(state.isActive)
            return styles.active
        return null
    }

    return <nav className={styles.navigation}>
        <div className={styles.navigation__brandName}>
            <h1>Event Management</h1>
        </div>
        <div className={styles.navigation__links}>
            <ul>
                <li>
                    <NavLink to="/" className={activeClassHandler}>
                        Home Page
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/event" className={activeClassHandler}>
                        Events
                    </NavLink>
                </li>
            </ul>
        </div>

    </nav>
}

export default RootNavigation