import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { inferQueryOutput, trpc } from "../api/APIProvider";

interface AuthInterface {
  logout: () => void;
  authenticate: (token: string) => void;
  user: inferQueryOutput<"auth/me/">;
  isAuthenticated: boolean;
}

const AuthContext = createContext({} as AuthInterface);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [sessionToken, setSessionToken] = useState<string>("");

  const queryClient = useQueryClient();
  const {
    data: user,
    refetch,
    status,
  } = trpc.useQuery(["auth/me/"], {
    enabled: !!sessionToken,
  });

  console.log({ status });
  //On init check cookies and set token
  useEffect(() => {
    const sessionTokenInTheCookies = Cookies.get("sessionToken");
    if (sessionTokenInTheCookies && sessionTokenInTheCookies !== sessionToken) {
      setSessionToken(sessionTokenInTheCookies);
    }
  }, []);

  const logout = async () => {
    Cookies.remove("sessionToken");
    setSessionToken("");
    console.log("je");
    queryClient.resetQueries(["auth/me/"]);
  };

  const authenticate = (token: string) => {
    Cookies.set("sessionToken", token);
    setSessionToken(token);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        isAuthenticated: !!user,
        logout,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("Remember to wrap useAuth inside an AuthProvider");
  }
  return authContext;
};

export const AuthenticatedOnly = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : null;
};

export const UnauthenticatedOnly = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? children : null;
};
