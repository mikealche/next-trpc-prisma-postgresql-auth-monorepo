import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useAuth } from "../contexts/auth";

const useRequiresAuth = () => {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);
};

export default useRequiresAuth;
