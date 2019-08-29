import axios from "axios"

export const UrlComment = {
  list: "/bbs/read/",
}

export const AjaxComment = {
  read: async (data, page = 0) => await axios.get(`/api/comment/${data}/${page}`),
  create: async (data) => await axios.post("/api/comment/", data),
  update: async (data) => await axios.put("/api/comment/", data),
  delete: async (data) => await axios.delete(`/api/comment/`, { data: data }),
  maxpage: async (bbsIdx) => await axios.get(`/api/comment/max/${bbsIdx}`),
}
