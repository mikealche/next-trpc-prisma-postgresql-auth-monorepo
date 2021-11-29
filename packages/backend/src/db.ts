import { PrismaClient, Prisma } from "@prisma/client";

const db = new PrismaClient({
  // log: [
  //   {
  //     emit: "event",
  //     level: "query",
  //   },
  // ],
});
// db.$on("query", async (e) => {
//   console.log(`${e.query} ${e.params}`);
// });

export default db;

export type PrismaTransaction = Omit<
  PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use"
>;
