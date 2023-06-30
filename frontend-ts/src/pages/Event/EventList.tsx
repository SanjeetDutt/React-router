import {useEffect, useState} from "react";
import Event from "../../Models/Event"
import {EventCard} from "../../components/Event/EventCard";
import styles from "./EventList.module.scss"

function EventList(){
    const [events, setEvents] = useState<Event[]>([])

    //DUMMY EVENTS
    useEffect(()=>{
        setEvents((prevState)=>{
            return prevState
                .concat(new Event(1,"Test 1", new Date(), "desc", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvrvqk6gYXCSDYmpzRMNMdypsiZ1e68nFOA&usqp=CAU"))
                .concat(new Event(2,"Test 2", new Date(), "desc", "https://i0.wp.com/www.thebigday.co.in/wp-content/uploads/2021/01/Corporate-Events.jpg?fit=1500%2C700&ssl=1"))
                .concat(new Event(3,"Test 3", new Date(), "desc", "https://www.eventbrite.com/blog/wp-content/uploads/2022/08/nicholas-green-nPz8akkUmDI-unsplash.jpg"))
                .concat(new Event(4,"Test 4", new Date(), "desc", "https://eventacademy.com/wp-content/uploads/2018/11/cambridge-corporate-photographer-io-2016-003.jpg"))
                .concat(new Event(5,"Test 5", new Date(), "desc", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvrvqk6gYXCSDYmpzRMNMdypsiZ1e68nFOA&usqp=CAU"))
                .concat(new Event(6,"Test 6", new Date(), "desc", "https://i0.wp.com/www.thebigday.co.in/wp-content/uploads/2021/01/Corporate-Events.jpg?fit=1500%2C700&ssl=1"))
                .concat(new Event(7,"Test 7", new Date(), "desc", "https://www.eventbrite.com/blog/wp-content/uploads/2022/08/nicholas-green-nPz8akkUmDI-unsplash.jpg"))
                .concat(new Event(8,"Test 8", new Date(), "desc", "https://eventacademy.com/wp-content/uploads/2018/11/cambridge-corporate-photographer-io-2016-003.jpg"))
                .concat(new Event(9,"Test 9", new Date(), "desc", "https://www.gpj.com/wp-content/uploads/2019/03/Think.2019.Stage_.png"))
        })
    },[])

    return (
        <div className={styles.eventList}>
            {events.map(event=>
                <div className={styles.eventList__item}>
                    <EventCard event={event} />
                </div>
            )}

        </div>
    )
}

export default EventList