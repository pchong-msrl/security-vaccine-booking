import axios from "axios";
import config from "../../config";

export interface ICreateUser {
  englishName: string;
  chineseName: string;
  gender: string;
  dateOfBirth: Date;
  address: string;
  placeOfBirth: string;
  vaccineBrand: string;
  phoneNumber: string;
}

const fetch_register = async (input: ICreateUser) => {
  const url = new URL("/vaccineusers/register", config.api.user);
  const fetch = await axios.post(url.href, input);
  console.log(fetch.data);
  alert(fetch.data.message);
  // Store the _id in localStorage
  localStorage.setItem("userId", fetch.data._id);
  // console.log the userid after login
  console.log(localStorage.getItem("userId"));
};

export default fetch_register;
