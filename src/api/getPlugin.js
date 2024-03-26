import axios from "axios";
import { BASE_URL } from "./base";

export const getPlugin = async (e) => {
  let innerdata = [];
  await axios
    .get(`${BASE_URL}/api/get/plugins`)
    .then((res) => {
      res["data"].forEach((data) => {
        innerdata.push({
          id: data._id,
          description: data.about,
          pluginname: data.pluginName,
          createname: data.createrName,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });

  return innerdata;
};
export const getFeaturedPlugin = async (e) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/get/plugins/featured`);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export const getTrendingPlugin = async (e) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/get/plugins/trending`);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getPopularPlugin = async (e) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/get/plugins/popular`);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export const getRecentPlugin = async (e) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/get/plugins`);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export const getPluginById = async (id) => {
  try {
    console.log(id);
    const { data } = await axios.get(`${BASE_URL}/api/get/plugin/id?id=${id}`);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
