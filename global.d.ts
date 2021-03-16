// Declarations for modules without types

import { PrismaClient } from "@prisma/client";

declare module "next-themes";

declare global {
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}
