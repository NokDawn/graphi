import { Books } from "./Books/Application/Queries/Books.js";
import { Book } from "./Books/Application/Chains/index.js";

const resolvers = {
  Query: {
    Books,
  },
  ...Book,
  Author: {
    name: (parent) => {
      return parent.name.toUpperCase();
    },
  },
};

export { resolvers };
