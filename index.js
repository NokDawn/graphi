import APS from "apollo-server";
import GT from "graphql-tools";

// Examples of the Books
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

// Schema
const typeDefs = `

type Book {
    id: ID
    title: String
    year: Int
    author: Author
}

type Author {
    id: ID
    name: String
    age: Int
}

type Query {
    Books
    (id: ID, title: String)
    : [Book]
}

`;

const resolvers = {
  Query: {
    // Books: () => books, // return all books
    // Books: (_, params) => {
    //   console.log(params);
    //   return books.filter((book) => book.id === params.id);
    // }, // return book filtered by params ID
    Books: (_, params) => {
      return books;
    },
  },
  Book: {
    author: (parent, params) => {
      console.log({
        parent,
        params,
      });
      return authors.filter((author) => author.id === parent.author)[0];
    },
  },
};

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
