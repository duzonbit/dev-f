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

export const UrlBbs = {
  list: "/list/",
  read: "/read/",
  create: "/create/",
  update:"/update/",
  delete:"/delete/",
  register:"/register/",
  login:"/login/",
};

export const AjaxBbs = {
  list: (page = 1) => axios.get(`/board/${page}`),
  read: (board = 0) => axios.get(`/board/read/${board}`),
  create: (data) => axios.post("/board/",data),
  update: (data) => axios.put("/board/",data),
  del: (data) => axios.delete("/board/",{data:data}),
  register: (data) => axios.post('/user/', data),
  login: (data) => axios.get('/user/', data),
};