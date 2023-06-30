import http from "../../Utilities/HttpRequest"
import {Await, defer, LoaderFunctionArgs, useRouteLoaderData} from "react-router-dom";
import Event, {eventResponse} from "../../Models/Event";
import {Suspense} from "react";


const renderEvent = (eventResponse: eventResponse) => {

    const event = new Event()
    event.parse(eventResponse)

    return (
        <div>
            <div>
                <img src={event.image} alt={event.title}/>
            </div>
            <div>
                <h2>{event.title}</h2>
                <span>{event.date}</span>
                <p>{event.description}</p>
            </div>
        </div>
    );
};


function EventDetails(){
    const {event} = useRouteLoaderData("event-details") as {event:eventResponse}

    return<Suspense fallback={<p>Loading</p>}>
        <Await resolve={event}>
            {(e)=>renderEvent(e)}
        </Await>
    </Suspense>
}

export default EventDetails

const loadData = async (id: string)=>{
    const response = await http.get("/events/" + id);
    return response.event
}

export const LoadEvent = ({params}:LoaderFunctionArgs)=>{ // Letting know React what is our param

    const eventId = params.eventId! as string;

    return defer({
        event: loadData(eventId)
    })

}