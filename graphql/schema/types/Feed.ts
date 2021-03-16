import { extendType, inputObjectType, objectType } from "nexus";

export const Feed = objectType({
  name: "Feed",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.url();
    t.model.author();
  },
});

export const FeedInput = inputObjectType({
  name: "FeedType",
  definition(t) {
    t.int("id");
  },
});

export const FeedCreateInput = inputObjectType({
  name: "FeedCreateInput",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("url");
    t.nonNull.string("name");
  },
});

export const FeedQueries = extendType({
  type: "Query",
  definition: (t) => {
    t.field("feed", {
      type: "Feed",
      args: { data: FeedInput },
      resolve: async (_parent, { data: { id } }, { prisma }) => {
        return prisma.feed.findUnique({ where: { id } });
      },
    });
    t.list.field("feeds", {
      type: "Feed",
      resolve: async (_parent, _args, { prisma }) => {
        return prisma.feed.findMany();
      },
    });
  },
});

export const FeedMutations = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("createFeed", {
      type: "Feed",
      args: { data: "FeedCreateInput" },
      resolve: async (_parent, { data }, { prisma, user }) => {
        return await prisma.feed.create({
          data: { ...data, authorId: user.id },
        });
      },
    });
  },
});
