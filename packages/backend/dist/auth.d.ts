import { IncomingMessage } from "http";
import { User } from ".prisma/client";
export declare const getUserFromHeader: (headers: IncomingMessage["headers"]) => Promise<User | null>;
export declare const verifyJWTToken: (token: string) => Promise<User | null>;
export declare const createSession: (user: User) => Promise<string>;
