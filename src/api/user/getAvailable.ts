import config from "../../config";
import axios from "axios";

// promise return any type
const getAvailable = async (): Promise<any> => {
  const url = new URL("/timeslots/available", config.api.user);
  const res = await axios.get(url.href);
  return res.data.availableTimeSlots;
};

export default getAvailable;
