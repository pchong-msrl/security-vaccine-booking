import axios from "axios";
import config from "../../config";

export interface ITimeslot {
  timeSlotId: string | null;
  vaccineUserId: string;
}

const registerTimeSlot = async (input: ITimeslot) => {
  const url = new URL(
    `timeslots/register/${input.timeSlotId}/${input.vaccineUserId}`,
    config.api.user
  );
  const res = await axios.post(url.href);
  console.log(res.data);
  alert(res.data.message);
};
export default registerTimeSlot;
