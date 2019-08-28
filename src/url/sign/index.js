import axios from "axios";

export const UrlSign={
  register:"/register/",
  login:"/login/",
  idCheck:"/check/"
}

export const AjaxSign={
  register: async (data) => await axios.post('/user/', data),
  login: async (data) => await axios.post(`/user${UrlSign.login}`, data),
  idCheck: async (data) => await axios.post(`/user${UrlSign.idCheck}${data}` ),
}