import styles from "./RootNavigation.module.scss"

function RootNavigation(){
    return <div className={styles.navigation}>
        <ul>
            <li>Home Page</li>
            <li>Events</li>
        </ul>
    </div>
}

export default RootNavigation