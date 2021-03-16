import { GraphQLDate } from "graphql-iso-date";
import { applyMiddleware } from "graphql-middleware";
import { asNexusMethod, makeSchema } from "nexus";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import path from "path";
import { log } from "../log/log";
import { permissions } from "../permissions";

import * as types from "./types";

export const GQLDate = asNexusMethod(GraphQLDate, "date");

export const baseSchema = makeSchema({
  types,
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    typegen: path.join(
      __dirname,
      "../../node_modules/@types/nexus-typegen/index.d.ts"
    ),
  },
  contextType: {

    module: path.join(process.cwd(), "graphql/context.ts"),
    export: "Context",
  },

  sourceTypes: {
    modules: [
      {
        module: path.join(process.cwd(), "node_modules/.prisma/client/index.d.ts"),
        alias: "prisma",
      },
    ],
  },
  // sourceTypes: {
  //   modules: [
  //     {
  //       module: require.resolve(".prisma/client/index.d.ts"),
  //       // module: require.resolve('.prisma/client/index.d.ts'),
  //       alias: "prisma",
  //     },
  //   ],
  // },
});

export const schema = applyMiddleware(baseSchema, permissions, log);
