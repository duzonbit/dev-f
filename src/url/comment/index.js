import axios from "axios";

export const AjaxComment = {
  read: async (bbsIdx) => await axios.get(`/comment/${bbsIdx}`),
  create: async (data) => await axios.post("/comment/", data),
  update: async (data) => await axios.put("/comment/", data),
  delete: async (data) => await axios.delete(`/comment/`, { data: data }),
};
