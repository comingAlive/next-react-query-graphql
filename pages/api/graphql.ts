import { ApolloServer } from "apollo-server-micro";
import { createContext } from "@/graphql/context";
import { schema } from "@/graphql/schema";

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  playground: process.env.NODE_ENV !== "production",
});

export default apolloServer.createHandler({ path: "/api/graphql" });
