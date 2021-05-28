import { books } from '../../Infrastructure/books.js';

const Books = (_, params) => (params.id ? books.filter((book) => book.id === params.id) : books);

export { Books };
