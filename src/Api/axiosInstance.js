import axios from "axios";

const api = axios.create({
  baseURL: "https://ecommerce-backend-hashim-d2df9f48185c.herokuapp.com/api", // Adjust the base URL as needed
  withCredentials: true, // This is important for sending cookies with requests
});

export default api;
