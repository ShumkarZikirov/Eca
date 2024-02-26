
import axios from "axios";

const instance = axios.create({
  baseURL: 'https://eca.kg/api/',
  headers: {
    "Content-Type" : 'application/json',
  }
})

export default instance;