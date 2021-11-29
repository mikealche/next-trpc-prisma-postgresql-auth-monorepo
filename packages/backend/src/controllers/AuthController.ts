import * as trpc from "@trpc/server";
import bcrypt from "bcrypt";
import * as Yup from "yup";

import { createSession } from "../auth";
import { Context, protectedRoute } from "../Context";
import db from "../db";
import signup, { SignupSchema } from "../services/AuthService/signup";

const AuthController = trpc
  .router<Context>()
  .merge(
    "me/",
    protectedRoute.query("", {
      resolve: async ({ ctx }) => {
        return ctx.user;
      },
    })
  )
  .mutation("login", {
    input: Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required(),
    }),
    resolve: async ({ input: { email, password } }) => {
      const user = await db.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) throw new Error("Invalid credentials");

      const doPasswordsMatch = await bcrypt.compare(
        password,
        user.hashedPassword
      );
      if (!doPasswordsMatch) throw new Error("Invalid credentials");

      const token = await createSession(user);

      return { token };
    },
  })
  .mutation("signup", {
    input: SignupSchema,
    resolve: async ({ input: { email, password } }) => {
      const user = await signup({ email, password });
      const token = await createSession(user);
      return { token };
    },
  });

export default AuthController;
