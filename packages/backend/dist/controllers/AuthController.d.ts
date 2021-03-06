/// <reference types="node" />
import * as trpc from "@trpc/server";
declare const AuthController: import("@trpc/server/dist/declarations/src/router").Router<{
    headers: import("http").IncomingHttpHeaders;
    user: import(".prisma/client").User | null;
    isAdmin: boolean | undefined;
    req: {
        id: string;
        aborted: boolean;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        complete: boolean;
        connection: import("net").Socket;
        socket: import("net").Socket;
        headers: import("http").IncomingHttpHeaders;
        rawHeaders: string[];
        trailers: NodeJS.Dict<string>;
        rawTrailers: string[];
        method?: string | undefined;
        url?: string | undefined;
        statusCode?: number | undefined;
        statusMessage?: string | undefined;
        readableAborted: boolean;
        readable: boolean;
        readableDidRead: boolean;
        readableEncoding: BufferEncoding | null;
        readableEnded: boolean;
        readableFlowing: boolean | null;
        readableHighWaterMark: number;
        readableLength: number;
        readableObjectMode: boolean;
        destroyed: boolean;
        off(eventName: string | symbol, listener: (...args: any[]) => void): import("http").IncomingMessage;
        removeAllListeners(event?: string | symbol | undefined): import("http").IncomingMessage;
        setMaxListeners(n: number): import("http").IncomingMessage;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol): number;
        eventNames(): (string | symbol)[];
    };
    res: import("http").ServerResponse;
}, {
    headers: import("http").IncomingHttpHeaders;
    user: import(".prisma/client").User | null;
    isAdmin: boolean | undefined;
    req: {
        id: string;
        aborted: boolean;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        complete: boolean;
        connection: import("net").Socket;
        socket: import("net").Socket;
        headers: import("http").IncomingHttpHeaders;
        rawHeaders: string[];
        trailers: NodeJS.Dict<string>;
        rawTrailers: string[];
        method?: string | undefined;
        url?: string | undefined;
        statusCode?: number | undefined;
        statusMessage?: string | undefined;
        readableAborted: boolean;
        readable: boolean;
        readableDidRead: boolean;
        readableEncoding: BufferEncoding | null;
        readableEnded: boolean;
        readableFlowing: boolean | null;
        readableHighWaterMark: number;
        readableLength: number;
        readableObjectMode: boolean;
        destroyed: boolean;
        off(eventName: string | symbol, listener: (...args: any[]) => void): import("http").IncomingMessage;
        removeAllListeners(event?: string | symbol | undefined): import("http").IncomingMessage;
        setMaxListeners(n: number): import("http").IncomingMessage;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol): number;
        eventNames(): (string | symbol)[];
    };
    res: import("http").ServerResponse;
}, trpc.Prefixer<{}, "me/">, trpc.Prefixer<{} & Record<"", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    headers: import("http").IncomingHttpHeaders;
    user: import(".prisma/client").User | null;
    isAdmin: boolean | undefined;
    req: {
        id: string;
        aborted: boolean;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        complete: boolean;
        connection: import("net").Socket;
        socket: import("net").Socket;
        headers: import("http").IncomingHttpHeaders;
        rawHeaders: string[];
        trailers: NodeJS.Dict<string>;
        rawTrailers: string[];
        method?: string | undefined;
        url?: string | undefined;
        statusCode?: number | undefined;
        statusMessage?: string | undefined;
        readableAborted: boolean;
        readable: boolean;
        readableDidRead: boolean;
        readableEncoding: BufferEncoding | null;
        readableEnded: boolean;
        readableFlowing: boolean | null;
        readableHighWaterMark: number;
        readableLength: number;
        readableObjectMode: boolean;
        destroyed: boolean;
        off(eventName: string | symbol, listener: (...args: any[]) => void): import("http").IncomingMessage;
        removeAllListeners(event?: string | symbol | undefined): import("http").IncomingMessage;
        setMaxListeners(n: number): import("http").IncomingMessage;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol): number;
        eventNames(): (string | symbol)[];
    };
    res: import("http").ServerResponse;
}, {
    headers: import("http").IncomingHttpHeaders;
    user: import(".prisma/client").User | null;
    isAdmin: boolean | undefined;
    req: {
        id: string;
        aborted: boolean;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        complete: boolean;
        connection: import("net").Socket;
        socket: import("net").Socket;
        headers: import("http").IncomingHttpHeaders;
        rawHeaders: string[];
        trailers: NodeJS.Dict<string>;
        rawTrailers: string[];
        method?: string | undefined;
        url?: string | undefined;
        statusCode?: number | undefined;
        statusMessage?: string | undefined;
        readableAborted: boolean;
        readable: boolean;
        readableDidRead: boolean;
        readableEncoding: BufferEncoding | null;
        readableEnded: boolean;
        readableFlowing: boolean | null;
        readableHighWaterMark: number;
        readableLength: number;
        readableObjectMode: boolean;
        destroyed: boolean;
        off(eventName: string | symbol, listener: (...args: any[]) => void): import("http").IncomingMessage;
        removeAllListeners(event?: string | symbol | undefined): import("http").IncomingMessage;
        setMaxListeners(n: number): import("http").IncomingMessage;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol): number;
        eventNames(): (string | symbol)[];
    };
    res: import("http").ServerResponse;
}, undefined, undefined, import(".prisma/client").User | null>>, "me/"> & Record<"login", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    headers: import("http").IncomingHttpHeaders;
    user: import(".prisma/client").User | null;
    isAdmin: boolean | undefined;
    req: {
        id: string;
        aborted: boolean;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        complete: boolean;
        connection: import("net").Socket;
        socket: import("net").Socket;
        headers: import("http").IncomingHttpHeaders;
        rawHeaders: string[];
        trailers: NodeJS.Dict<string>;
        rawTrailers: string[];
        method?: string | undefined;
        url?: string | undefined;
        statusCode?: number | undefined;
        statusMessage?: string | undefined;
        readableAborted: boolean;
        readable: boolean;
        readableDidRead: boolean;
        readableEncoding: BufferEncoding | null;
        readableEnded: boolean;
        readableFlowing: boolean | null;
        readableHighWaterMark: number;
        readableLength: number;
        readableObjectMode: boolean;
        destroyed: boolean;
        off(eventName: string | symbol, listener: (...args: any[]) => void): import("http").IncomingMessage;
        removeAllListeners(event?: string | symbol | undefined): import("http").IncomingMessage;
        setMaxListeners(n: number): import("http").IncomingMessage;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol): number;
        eventNames(): (string | symbol)[];
    };
    res: import("http").ServerResponse;
}, {
    headers: import("http").IncomingHttpHeaders;
    user: import(".prisma/client").User | null;
    isAdmin: boolean | undefined;
    req: {
        id: string;
        aborted: boolean;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        complete: boolean;
        connection: import("net").Socket;
        socket: import("net").Socket;
        headers: import("http").IncomingHttpHeaders;
        rawHeaders: string[];
        trailers: NodeJS.Dict<string>;
        rawTrailers: string[];
        method?: string | undefined;
        url?: string | undefined;
        statusCode?: number | undefined;
        statusMessage?: string | undefined;
        readableAborted: boolean;
        readable: boolean;
        readableDidRead: boolean;
        readableEncoding: BufferEncoding | null;
        readableEnded: boolean;
        readableFlowing: boolean | null;
        readableHighWaterMark: number;
        readableLength: number;
        readableObjectMode: boolean;
        destroyed: boolean;
        off(eventName: string | symbol, listener: (...args: any[]) => void): import("http").IncomingMessage;
        removeAllListeners(event?: string | symbol | undefined): import("http").IncomingMessage;
        setMaxListeners(n: number): import("http").IncomingMessage;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol): number;
        eventNames(): (string | symbol)[];
    };
    res: import("http").ServerResponse;
}, import("yup/lib/object").AssertsShape<{
    emailOrHandle: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AssertsShape<{
    emailOrHandle: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, {
    token: string;
}>> & Record<"signup", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    headers: import("http").IncomingHttpHeaders;
    user: import(".prisma/client").User | null;
    isAdmin: boolean | undefined;
    req: {
        id: string;
        aborted: boolean;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        complete: boolean;
        connection: import("net").Socket;
        socket: import("net").Socket;
        headers: import("http").IncomingHttpHeaders;
        rawHeaders: string[];
        trailers: NodeJS.Dict<string>;
        rawTrailers: string[];
        method?: string | undefined;
        url?: string | undefined;
        statusCode?: number | undefined;
        statusMessage?: string | undefined;
        readableAborted: boolean;
        readable: boolean;
        readableDidRead: boolean;
        readableEncoding: BufferEncoding | null;
        readableEnded: boolean;
        readableFlowing: boolean | null;
        readableHighWaterMark: number;
        readableLength: number;
        readableObjectMode: boolean;
        destroyed: boolean;
        off(eventName: string | symbol, listener: (...args: any[]) => void): import("http").IncomingMessage;
        removeAllListeners(event?: string | symbol | undefined): import("http").IncomingMessage;
        setMaxListeners(n: number): import("http").IncomingMessage;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol): number;
        eventNames(): (string | symbol)[];
    };
    res: import("http").ServerResponse;
}, {
    headers: import("http").IncomingHttpHeaders;
    user: import(".prisma/client").User | null;
    isAdmin: boolean | undefined;
    req: {
        id: string;
        aborted: boolean;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        complete: boolean;
        connection: import("net").Socket;
        socket: import("net").Socket;
        headers: import("http").IncomingHttpHeaders;
        rawHeaders: string[];
        trailers: NodeJS.Dict<string>;
        rawTrailers: string[];
        method?: string | undefined;
        url?: string | undefined;
        statusCode?: number | undefined;
        statusMessage?: string | undefined;
        readableAborted: boolean;
        readable: boolean;
        readableDidRead: boolean;
        readableEncoding: BufferEncoding | null;
        readableEnded: boolean;
        readableFlowing: boolean | null;
        readableHighWaterMark: number;
        readableLength: number;
        readableObjectMode: boolean;
        destroyed: boolean;
        off(eventName: string | symbol, listener: (...args: any[]) => void): import("http").IncomingMessage;
        removeAllListeners(event?: string | symbol | undefined): import("http").IncomingMessage;
        setMaxListeners(n: number): import("http").IncomingMessage;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol): number;
        eventNames(): (string | symbol)[];
    };
    res: import("http").ServerResponse;
}, import("yup/lib/object").AssertsShape<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AssertsShape<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, {
    token: string;
}>>, trpc.Prefixer<{}, "me/">, trpc.DefaultErrorShape>;
export default AuthController;
