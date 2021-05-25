import { books } from "../../Infrastructure/books.js";

const Books = (_, params) => {
  return params.id ? books.filter((book) => book.id === params.id) : books;
};

export { Books };
