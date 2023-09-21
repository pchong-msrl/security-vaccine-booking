import config from "../../config";
import axios from "axios";

interface ILogin{
    username:string
    password:string
}
const login = async (input:ILogin)=>{
    const url = new URL('/login',config.api.admin)
    const res = await axios.post(url.href,input)
    return res.data
}

export default login
