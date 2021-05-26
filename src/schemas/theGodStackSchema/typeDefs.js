import { BookDomain, BookQueries } from "./Books/Domain/Book.js";
import { UserDomain, UserQueries } from "./Users/Domain/User.js";

const typeDefs = `

${BookDomain}
${UserDomain}

type Query {
    ${BookQueries}
    ${UserQueries}
}

`;

export { typeDefs };
