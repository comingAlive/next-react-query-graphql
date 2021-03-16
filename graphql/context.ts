import { PrismaClient } from "@prisma/client";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { getSession } from "next-auth/client";

const prisma = new PrismaClient();

// let prisma;
// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

export type Context = {
  prisma: PrismaClient;
  res: ServerResponse;
  req: MicroRequest;
  user?: { id: number };
};

// export const createContext = (): Context => ({prisma});
export const createContext = async ({ res, req }): Promise<Context> => {
  const { accessToken } = await getSession({ req });
  const { userId } = await prisma.session.findUnique({
    where: { accessToken },
  });
  const user = { id: userId };
  return { prisma, res, req, user };
};
