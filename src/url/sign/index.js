import axios from "axios";

// export const UrlBbs = {
//   list: "/bbs/list/",
//   read: "/bbs/read/",
//   create: "/bbs/create/",
//   update:"/bbs/update/",
//   delete:"/bbs/delete/",
// };

// export const AjaxBbs = {
//   list: (page = 1) => axios.get(`${UrlBbs.list}${page}`),
//   read: (board = 0) => axios.get(`${UrlBbs.read}${board}`),
//   create: (data) => axios.post(`${UrlBbs.create}`,data),
//   update: (index,data) => axios.put(`${UrlBbs.update}${index}`,data),
//   del: (index,data) => axios.delete(`${UrlBbs.delete}${index}`,{data:data})
// };


export const UrlSign={
  register:"/register/",
  login:"/login/",
}


export const AjaxSign={
  register: async (data) => await axios.post('/user/', data),
  login: async (data) => await axios.post(`/user${UrlSign.login}`, data),
}