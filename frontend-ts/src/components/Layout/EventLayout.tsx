import {Outlet} from "react-router-dom";
import EventNavigation from "../EventNavigation";

function EventLayout(){
    return<>
        <EventNavigation />
        <Outlet/>
    </>
}

export default EventLayout