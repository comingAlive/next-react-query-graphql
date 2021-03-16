import { GraphQLClient } from "graphql-request";
// import { getSdkWithHooks } from "../src/generated/graphql";

export const client = new GraphQLClient("http://localhost:4000/graphql/");
// export const { usePost } = getSdkWithHooks(client);

