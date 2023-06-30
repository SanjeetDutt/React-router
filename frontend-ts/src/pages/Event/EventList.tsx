import {Suspense, useEffect, useState} from "react";
import Event from "../../Models/Event"
import {EventCard} from "../../components/Event/EventCard";
import styles from "./EventList.module.scss"
import {Await, defer, useLoaderData} from "react-router-dom";
import http from "../../Utilities/HttpRequest"

function EventList(){
    const events = useLoaderData() as {events:[]} // IMPORTANT: Telling React TS type of data is expecting

    const parseResponse = (response:any[]):Event[]=>{
        return response.map(res=>{
            const event = new Event()
            event.parse(res)
            return event
        })
    }

    return (
        // 3. As data take time to load, meanwhile show some fallback message
        <Suspense fallback={<p>LOADING</p>}>
            <div className={styles.eventList}>

                {/*Once data is received, load the content*/}
                <Await resolve={events.events}>
                    {(loadedEvents)=>  parseResponse(loadedEvents).map(event =>
                        <div className={styles.eventList__item} key={event.id}>
                            <EventCard event={event}/>
                        </div>
                    )}
                </Await>
            </div>
        </Suspense>
    )
}

export default EventList

// 1. Contacting server to fetch result
const loadEvent = async () => {
    const res = await http.get("/events");
    return res.events
}

// 2. Saying React that response will take time to load
export const EventLoder = () => {
    return defer({
        events: loadEvent()
    })
}