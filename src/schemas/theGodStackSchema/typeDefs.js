import { BookDomain, BookQueries } from "./Books/Domain/Book.js";

const typeDefs = `

${BookDomain}

type Query {
    ${BookQueries}
}

`;

export { typeDefs };
