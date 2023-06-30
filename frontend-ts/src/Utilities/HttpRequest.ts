import {json} from "react-router-dom";

const urlPrefix = "http://localhost:8080"


const getCall = async (url:string) => {

    const response = await fetch(`${urlPrefix}${url}`);

    if(!response.ok){
        throw json({
            message:"Error"
        },{
            status: 500
        })
    } else {
        return await response.json()
    }
}


export default {
    get: getCall
}