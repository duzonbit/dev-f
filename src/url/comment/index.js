import axios from "axios";

export const UrlBbs = {
  list: "/bbs/read/",
};

export const AjaxComment = {
  read: async (data, page = 0) => await axios.get(`/comment/${data}/${page}`),
  create: async (data) => await axios.post("/comment/", data),
  update: async (data) => await axios.put("/comment/", data),
  delete: async (data) => await axios.delete(`/comment/`, { data: data }),
  maxpage: async (bbsIdx) => await axios.get(`/comment/max/${bbsIdx}`),
};
