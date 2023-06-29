import {NavLink} from "react-router-dom";
import styles from "./EventNavigation.module.scss"

function EventNavigation(){
    return <div className={styles.event_navigation}>
        <NavLink to="" className="link-button link-button--primary" end={true}>
            View Events
        </NavLink>
        <NavLink to="new" className="link-button link-button--primary" end={true}>
            Add Event
        </NavLink>

    </div>
}

export default EventNavigation