import APS from "apollo-server";
import GT from "graphql-tools";
import { typeDefs } from "./domain.js";
import { resolvers } from "./application.js";

// DOMAIN DRIVEN DESIGN
const schema = GT.makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new APS.ApolloServer({
  schema,
  context: () => {
    return {
      user: {
        id: null,
      },
    };
  },
});

server.init = () => {
  server.listen(process.env.PORT || 3000, "0.0.0.0").then(() => {
    console.log("I'm listening");
  });
};

server.init();
