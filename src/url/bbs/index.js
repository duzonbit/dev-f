import axios from "axios";

export const UrlBbs = {
  list: "/bbs/list/",
  read: "/bbs/read/",
  create: "/bbs/create/",
  update:"/bbs/update/",
  delete:"/bbs/delete/",
};

export const AjaxBbs = {
  list: (page = 1) => axios.get(`/bbs/${page}`),
  read: (board = 0) => axios.get(`/bbs/read/${board}`),
  insert: (data) => axios.post(`/bbs/`,data),
  update: (index,data) => axios.put(`/bbs/${index}`,data),
  del: (index,data) => axios.delete(`/bbs/${index}`,{data:data})
};
