import config from "../../config";
import axios from "axios";

interface ILogin {
  username: string;
  password: string;
}
const login = async (input: ILogin) => {
  const url = new URL("api/users/login", config.api.admin);
  const res = await axios.post(url.href, input);
  //   console.log(res.data);
  alert("login successfully");
  return res.data;
};

export default login;
