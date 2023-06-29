import styles from "./RootNavigation.module.scss"
import {NavLink} from "react-router-dom";

function RootNavigation(){

    return <nav className={styles.navigation}>
        <div className={styles.navigation__brandName}>
            <h1>Event Management</h1>
        </div>
        <div className={styles.navigation__links}>
            <ul>
                <li>
                    <NavLink to="/" className="link-button link-button--primary">
                        Home Page
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/event" className="link-button link-button--primary">
                        Events
                    </NavLink>
                </li>
            </ul>
        </div>

    </nav>
}

export default RootNavigation