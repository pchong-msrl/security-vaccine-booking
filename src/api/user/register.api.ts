import axios from "axios";
import config from "../../config";

export interface ICreateUser{
    englishName: string
    chineseName: string
    dateOfBirth: Date
    address: string,
    placeOfBirth: string,
    vaccineBrand: string
    phoneNumber: string
}

const fetch_register= async (input:ICreateUser)=>{
    const url = new URL("/register",config.api.user)
    const fetch = await axios.post(url.href,input)
    console.log(fetch.data)
}

export default fetch_register
