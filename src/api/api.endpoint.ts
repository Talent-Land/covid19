import axios, { AxiosResponse } from "axios";

export const getAllClinicalResearch = async () => {
  return await axios
    .post("http://127.0.0.1:8081/search")
    .then((response: AxiosResponse) => {
      console.log(response.data);
    }); 
};

export const getAllCountries = () => {
  return axios
    .post(`${process.env.SERVER}/`)
    .then((response: AxiosResponse) => {
      console.log(response.data);
    });
};

export const getCountryClinicalResearch = () => {
  return axios
    .post(`${process.env.SERVER}/search`)
    .then((response: AxiosResponse) => {
      console.log(response.data);
    });
};

export const getAllGenders = () => {
  return axios
    .post(`${process.env.SERVER}/`)
    .then((response: AxiosResponse) => {
      console.log(response.data);
    });
};

export const getAllStudyTypes = () => {
  return axios
    .post(`${process.env.SERVER}/`)
    .then((response: AxiosResponse) => {
      console.log(response.data);
    });
};
