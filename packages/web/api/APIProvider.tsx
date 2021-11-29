import { QueryClient, QueryClientProvider } from "react-query";
import React, { useEffect, useState } from "react";
import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "../../backend/src/server";
import Cookies from "js-cookie";

import { inferProcedureInput, inferProcedureOutput } from "@trpc/server";

export const DEV_URL = "http://localhost:2022";

export const PROD_URL = `complete_me`;
const API_URL = process.env.NODE_ENV == "development" ? DEV_URL : PROD_URL;

export const trpc = createReactQueryHooks<AppRouter>();

const createTrpcClient = () => {
  return trpc.createClient({
    url: API_URL,
    headers() {
      const sessionToken = Cookies.get("sessionToken");
      return {
        authorization: sessionToken ? `bearer ${sessionToken}` : undefined,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    },
  });
};

// Provider
const APIProvider = ({ children }: React.ComponentProps<any>) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient, setTrpcClient] = useState(() => createTrpcClient());

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default APIProvider;

export type inferQueryOutput<
  TRouteKey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>;

export type inferQueryInput<
  TRouteKey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureInput<AppRouter["_def"]["queries"][TRouteKey]>;

export type inferMutationOutput<
  TRouteKey extends keyof AppRouter["_def"]["mutations"]
> = inferProcedureOutput<AppRouter["_def"]["mutations"][TRouteKey]>;

export type inferMutationInput<
  TRouteKey extends keyof AppRouter["_def"]["mutations"]
> = inferProcedureInput<AppRouter["_def"]["mutations"][TRouteKey]>;
