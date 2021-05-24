const typeDefs = `

type Book {
    id: ID
    title(upper: Boolean): String
    year: Int
    author(age: Int): Author
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

export { typeDefs };
