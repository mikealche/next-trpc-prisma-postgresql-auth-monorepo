import * as trpc from "@trpc/server";
import * as Yup from "yup";
import db from "../../db";
import bcrypt from "bcrypt";
import { TRPCError } from "@trpc/server";

export const SignupSchema = Yup.object({
  email: Yup.string().email().required().max(100),
  password: Yup.string().required().min(8).max(100),
});

const signup = async ({
  email,
  password,
}: Yup.Asserts<typeof SignupSchema>) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingEmail = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (existingEmail) {
    throw new TRPCError({
      message: "The email is already in use",
      code: "BAD_REQUEST",
    });
  }

  const user = await db.user.create({
    data: {
      email,
      hashedPassword,
    },
  });

  return user;
};

export default signup;
