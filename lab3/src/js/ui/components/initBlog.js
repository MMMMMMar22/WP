import { blogTemplate } from "../templates/blogTemplate.js";
import blogData from "../../mockData/blogData.js";

const initBlog = (blogNode) => {
  blogNode.insertAdjacentHTML("beforeend", blogTemplate(blogData));
};

export default initBlog;


