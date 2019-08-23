import axios from "axios";


export const UrlSign={
  register:"/register/",
  login:"/login/",
}


export const AjaxSign={
  register: async (data) => await axios.post('/user/', data),
  login: async (data) => await axios.post(`/user${UrlSign.login}`, data),
}