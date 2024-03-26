import axios from "axios";
import { BASE_URL } from "./base";

export const savePlugin = async (data) => {
  try {
    console.log(data);
    await axios.post(`${BASE_URL}/api/post/plugin`, data);
    return true;
  } catch (err) {
    return false;
  }
};
