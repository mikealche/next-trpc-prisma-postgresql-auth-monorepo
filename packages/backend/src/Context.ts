import { inferAsyncReturnType } from "@trpc/server";
import * as trpc from "@trpc/server";
import type { NodeHTTPCreateContextFnOptions } from "@trpc/server/dist/declarations/src/adapters/node-http";

import crypto from "crypto";
import { IncomingMessage, ServerResponse } from "http";

import { getUserFromHeader } from "./auth";
import { User } from ".prisma/client";

const ADMIN_ROLES = ["ADMIN", "SUPERADMIN"];

export const isAdmin = (userRole: User["role"] | undefined) => {
  return userRole && ADMIN_ROLES.includes(userRole);
};

const createContext = async ({
  req,
  res,
}: NodeHTTPCreateContextFnOptions<IncomingMessage, ServerResponse>) => {
  // console.log({ "auth header": req.headers.authorization, path: req.url });
  const user = await getUserFromHeader(req.headers);
  const requestId = crypto.randomBytes(10).toString("hex");

  return {
    headers: req.headers,
    user: user,
    isAdmin: isAdmin(user?.role),
    req: { ...req, id: requestId },
    res,
  };
};

export const protectedRoute = trpc
  .router<Context>()
  .middleware(async ({ ctx, next }) => {
    const user = await getUserFromHeader(ctx.headers);
    if (!user) {
      console.log(`Unauthenticated while accesing ${ctx.req.url}`, ctx.headers);
      throw new Error(`Unauthenticated when trying to access ${ctx.req.url}`);
    }
    ctx.user = user;
    ctx.isAdmin = isAdmin(user.role);
    return next();
  });

export const adminRoute = trpc
  .router<Context>()
  .middleware(async ({ ctx, next }) => {
    const user = await getUserFromHeader(ctx.headers);

    if (!user) {
      console.log(`Unauthenticated while accesing ${ctx.req.url}`, ctx.headers);
      throw new Error(`Unauthenticated when trying to access ${ctx.req.url}`);
    }

    if (!isAdmin(user.role)) {
      throw new Error("Unauthorized");
    }

    ctx.user = user;
    ctx.isAdmin = true;
    return next();
  });

export default createContext;

export type Context = inferAsyncReturnType<typeof createContext>;
