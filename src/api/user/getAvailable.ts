import config from "../../config";
import axios from "axios";

const getAvailable = async ()=>{
    const url = new URL('/available',config.api.user)
    const res = await axios.get(url.href)
    return res.data
}
