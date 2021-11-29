import React, { Children } from "react";
import Link from "next/link";
import {
  AuthenticatedOnly,
  UnauthenticatedOnly,
  useAuth,
} from "../contexts/auth";
const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="w-screen bg-gray-100 h-screen p-10">
      <Navbar />
      {children}
    </div>
  );
};

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <div className="w-full flex justify-between py-5">
      <div className="px-5 py-2 border bg-white font-bold rounded shadow-sm">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <UnauthenticatedOnly>
        <div className="flex">
          <div className="ml-10 px-5 py-2 border bg-white font-bold rounded shadow-sm">
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </div>
          <div className="ml-10 px-5 py-2 border bg-white font-bold rounded shadow-sm">
            <Link href="/login">
              <a>Log In</a>
            </Link>
          </div>
        </div>
      </UnauthenticatedOnly>
      <AuthenticatedOnly>
        <div className="flex">
          <div className="ml-10 px-5 py-2 border bg-white font-bold rounded shadow-sm">
            <UserInfo />
          </div>
          <div className="ml-10 px-5 py-2 border bg-white font-bold rounded shadow-sm">
            <button className="font-bold" onClick={logout}>
              Log Out
            </button>
          </div>
        </div>
      </AuthenticatedOnly>
    </div>
  );
};

const UserInfo = () => {
  const { user } = useAuth();
  return <p>{user?.email}</p>;
};

export const Card = ({
  children,
  className,
  ...props
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <div {...props} className={`bg-white rounded-lg px-10 py-20 ${className}`}>
      {children}
    </div>
  );
};

export default MainLayout;
