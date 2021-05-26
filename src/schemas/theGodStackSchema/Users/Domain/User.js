const UserDomain = `

type User {
    id: ID
    email: String
    password: String
}

`;

const UserQueries = `

Users
(
    id: ID
)
: [User]

`;

export { UserDomain, UserQueries };
