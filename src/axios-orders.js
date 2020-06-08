import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-a1cd5.firebaseio.com/",
});

export default instance;