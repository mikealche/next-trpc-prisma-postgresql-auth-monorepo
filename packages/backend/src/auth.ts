import { IncomingMessage } from "http";
import jwt from "jsonwebtoken";

import db from "./db";
import { User } from ".prisma/client";

export const getUserFromHeader = async (
  headers: IncomingMessage["headers"]
) => {
  const authHeader = headers.authorization;
  if (authHeader) {
    try {
      const user = await verifyJWTToken(authHeader.split(" ")[1]);
      console.log({ user });
      return user;
    } catch (err) {
      return null;
    }
  }
  return null;
};

export const verifyJWTToken = async (token: string) => {
  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY!) as {
      userId: number;
      email: string;
    };
    const user = await db.user.findFirst({
      where: {
        id: data.userId,
      },
    });
    return user;
  } catch (err) {
    throw new Error("Invalid token");
  }
};

export const createSession = async (user: User) => {
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.TOKEN_KEY!,
    {
      expiresIn: "15d",
    }
  );
  return token;
};
