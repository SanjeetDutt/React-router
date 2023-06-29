import {Outlet} from "react-router-dom";
import RootNavigation from "../RootNavigation";

function RootLayout(){
    return <>
        <RootNavigation />
        <main>
            <Outlet />
        </main>
    </>
}

export default RootLayout