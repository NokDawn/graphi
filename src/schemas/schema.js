import GT from "graphql-tools";
import { typeDefs } from "./theGodStackSchema/typeDefs.js";
import { resolvers } from "./theGodStackSchema/resolvers.js";

// DOMAIN DRIVEN DESIGN
const schema = GT.makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { schema };
