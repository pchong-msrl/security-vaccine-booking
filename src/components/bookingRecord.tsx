import Contraner from "./contraner";
import {useEffect} from "react";
import {useAuth} from "./hook/useAuth";

const BookingRecord = ()=>{
    const {token} = useAuth()


    if(!token){
        return (<div>Unauthorized, only admin can access</div>)
    }
    return (
        <Contraner>
            <div>Hello</div>
        </Contraner>
    )
}

export default BookingRecord
