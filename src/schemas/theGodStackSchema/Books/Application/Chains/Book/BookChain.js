import { authors } from '../../../Infrastructure/authors.js';

const BookChain = {
  title: (parent, { upper }) => (upper ? parent.title.toUpperCase() : parent.title),
  author: (parent) => authors.filter((author) => author.id === parent.author)[0],
};

export { BookChain };
