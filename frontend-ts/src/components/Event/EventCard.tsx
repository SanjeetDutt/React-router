import Event from "../../Models/Event"
import styles from "./EventCard.module.scss"
import React from "react";
import {Link} from "react-router-dom";

export const EventCard: React.FC<{ event: Event }> = (props) => {
    const parseDate = (date: Date): string => {
        return date.toDateString()
    }
    return (
        <div className={styles.eventCard}>
            <div className={styles.eventCard__image}>
                <img src={props.event.image} alt={props.event.title}/>
                <Link to={`${props.event.id}`}>
                    <h5 className={styles.eventCard__imageTitle}>{props.event.title}</h5>
                </Link>

                <Link to={`${props.event.id}/edit`} className={styles.eventCard__editLink}>
                    Edit
                </Link>
            </div>

            <div className={styles.eventCard__container}>

                <span className={styles.eventCard__date}>{parseDate(props.event.date)}</span>
                <p className={styles.eventCard__description}>{props.event.description}</p>
            </div>


        </div>
    );
};