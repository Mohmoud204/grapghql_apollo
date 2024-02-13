import express from "express"
import { ApolloServer, gql } from "apollo-server-express"
const typeDefs = gql`
type Query {
  
}
`
const resolvers = {
  Query: {

  }
}
async function startServer() {
  const app = express()
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  await server.start()
  server.applyMiddleware({ app })
  app.listen(1234, () => {
    console.log("hello graphql ...")
    console.log(`server 1234${server.graphqlPath}`)
  })
}

startServer() 