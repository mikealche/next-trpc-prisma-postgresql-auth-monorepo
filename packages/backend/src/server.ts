import * as trpc from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

import createContext, { Context } from "./Context";
import AuthController from "./controllers/AuthController";
import http from "http";
import TodosController from "./controllers/TodosController";

export const appRouter = trpc
  .router<Context>()
  .merge("auth/", AuthController)
  .merge("todos/", TodosController);

export type AppRouter = typeof appRouter;

// create handler
const handler = trpc.createHttpHandler({
  router: appRouter,
  createContext,
});

const server = http.createServer((req, res) => {
  // do whatever you want here
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
  handler(req, res);
});

export default server;
