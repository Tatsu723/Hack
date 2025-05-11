import { PrismaClient } from "./generated/prisma/index.js";

const client = new PrismaClient();
const todos = await client.individual.delete({
  where: {
    id: 3,
  },
});
debugger;