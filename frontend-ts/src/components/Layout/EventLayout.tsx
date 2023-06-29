import {Outlet} from "react-router-dom";

function EventNavigation() {
    return <h1>Event Navigation</h1>;
}

function EventLayout(){
    return<>
        <EventNavigation />
        <Outlet/>
    </>
}

export default EventLayout