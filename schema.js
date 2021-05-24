import GT from "graphql-tools";
import { typeDefs } from "./domain.js";
import { resolvers } from "./application.js";

// DOMAIN DRIVEN DESIGN
const schema = GT.makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { schema };
