import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

export function startServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  mongoose.connect("mongodb://localhost:27017/graphql");
  mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}
