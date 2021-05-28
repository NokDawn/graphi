import { Books } from './Books/Application/Queries/Books.js';
import { Book, Author } from './Books/Application/Chains/index.js';
import { Users } from './Users/Application/Queries/Users.js';

const resolvers = {
  Query: {
    Books,
    Users,
  },
  ...Book,
  ...Author,
};

export { resolvers };
