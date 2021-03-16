import { extendType, inputObjectType, objectType } from "nexus";

export const Bundle = objectType({
  name: "Bundle",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.author()
  },
});

export const BundleInput = inputObjectType({
  name: "BundleType",
  definition(t) {
    t.int("id");
  },
});

export const BundleCreateInput = inputObjectType({
  name: "BundleCreateInput",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string( "name");
    t.nonNull.string("description");
  },
});

export const BundleQueries = extendType({
  type: "Query",
  definition: (t) => {
    t.field("bundle", {
      type: "Bundle",
      args: { data: BundleInput },
      resolve: async (_parent, { data: { id } }, { prisma }) => {
        return prisma.bundle.findUnique({ where: { id } });
      },
    });
    t.list.field("bundles", {
      type: "Bundle",
      resolve: async (_parent, _args, { prisma }) => {
        return prisma.bundle.findMany();
      },
    });
  },
});

export const BundleMutations = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("createBundle", {
      type: "Bundle",
      args: { data: "BundleCreateInput" },
      resolve: async (_parent, { data }, { prisma }) => {
        return await prisma.bundle.create({ data: { ...data } });
      },
    });
  },
});
