import { books, authors } from "./infrastructure.js";

const resolvers = {
  Query: {
    // Books: () => books, // return all books
    // Books: (_, params) => {
    //   console.log(params);
    //   return books.filter((book) => book.id === params.id);
    // }, // return book filtered by params ID
    Books: (_, params) => {
      return params.id ? books.filter((book) => book.id === params.id) : books;
    },
  },
  Book: {
    title: (parent, { upper }) => {
      return upper ? parent.title.toUpperCase() : parent.title;
    },
    author: (parent, params) => {
      return authors.filter((author) => author.id === parent.author)[0];
    },
  },
  Author: {
    name: (parent) => {
      return parent.name.toUpperCase();
    },
  },
};

export { resolvers };
