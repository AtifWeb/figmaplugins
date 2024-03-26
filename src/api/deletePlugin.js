import axios from "axios";
import { BASE_URL } from "./base";

export const deletePlugin = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/api/delete/plugin/`, {
      data: {
        id: id,
      },
    });
    return true;
  } catch (err) {
    return err.response;
  }
};
