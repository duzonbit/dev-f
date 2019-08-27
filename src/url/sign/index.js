import axios from "axios";


export const UrlSign={
  register:"/register/",
  login:"/login/",
<<<<<<< HEAD
=======
  idCheck:"/check/"
>>>>>>> origin/youngwon
}


export const AjaxSign={
  register: async (data) => await axios.post('/user/', data),
  login: async (data) => await axios.post(`/user${UrlSign.login}`, data),
<<<<<<< HEAD
=======
  idCheck: async (data) => await axios.post(`/user${UrlSign.idCheck}${data}` ),
>>>>>>> origin/youngwon
}