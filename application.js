const books = [
  {
    id: "book1",
    title: "bookTitle1",
    year: 2019,
    author: "author2",
  },
  {
    id: "book2",
    title: "booktitle2",
    year: 2021,
    author: "author1",
  },
];

const authors = [
  {
    id: "author1",
    name: "Author 1",
    age: 40,
  },
  {
    id: "author2",
    name: "Author 2",
    age: 18,
  },
];

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
