"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var db = new client_1.PrismaClient({
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
exports.default = db;
