import APS from "apollo-server";
import { schema } from "../../schemas/schema.js";

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

export { server };
