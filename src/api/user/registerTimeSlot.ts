import axios from "axios";
import config from "../../config";

interface ITimeslot{
    timeSlotId:string,
    vaccineUserId:string
}

const registerTimeSlot = async (input:ITimeslot)=>{
    const url = new URL(`/register/${input.timeSlotId}/${input.vaccineUserId}`,config.api.user)
    const res = await axios.post(url.href)
    console.log(res.data)
}
export default registerTimeSlot
