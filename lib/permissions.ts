import { rule, shield } from "graphql-shield";

const rules = {
  isAuthenticated: rule()(async (_parent, _args, context) => {
    return context.user;
  }),
};

export const permissions = shield({
  Query: {
    hello: rules.isAuthenticated,
  },
});
