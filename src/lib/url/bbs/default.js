import axios from "axios"

export const UrlBbs = {
  list: "/bbs/list/",
  read: "/bbs/read/",
  create: "/bbs/create/",
  update: "/bbs/update/",
  delete: "/bbs/delete/",
}


export const AjaxBbs = {
  list: (page = 1) => axios.get(`/api/bbs/${page}`),
  read: (board = 0) => axios.get(`/api/bbs/read/${board}`),
  create: (data) => axios.post(`/api/bbs/`, data),
  update: (index, data) => axios.put(`/api/bbs/${index}`, data),
  del: (index, data) => axios.delete(`/api/bbs/${index}`, { data: data }),
}
