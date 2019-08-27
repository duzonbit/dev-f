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
  
};

export const AjaxBbs = {
  list: async (page = 1) => await axios.get(`/bbs/${page}`),
  read: async (board = 0) => await axios.get(`/bbs/read/${board}`),
  create: async(data) => await axios.post("/bbs/",data),
  update: async (data) => await axios.put(`/bbs/${data.idx}`,data), //bbs/index/data index는 글번호 delete도
  del: async (data) => await axios.delete(`/bbs/${data.idx}`,{data:data})//{data:data}
  
};

// export const AjaxBbs = {
//   list: async (page = 1) => await axios.get(`/board/${page}`),
//   read: async (board = 0) => await axios.get(`/board/read/${board}`),
//   create: async(data) => await axios.post("/board/",data),
//   update: async (data) => await axios.put("/board/",data),
//   del: async (data) => await axios.delete("/board/",{data:data}),//{data:data}
  
// };


