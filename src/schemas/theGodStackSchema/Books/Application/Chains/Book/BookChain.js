import { authors } from "../../../Infrastructure/authors.js";

const BookChain = {
  title: (parent, { upper }) => {
    return upper ? parent.title.toUpperCase() : parent.title;
  },
  author: (parent, params) => {
    return authors.filter((author) => author.id === parent.author)[0];
  },
};

export { BookChain };
