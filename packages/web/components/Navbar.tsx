import React from "react";
import Link from "next/link";
import {
  AuthenticatedOnly,
  UnauthenticatedOnly,
  useAuth,
} from "../contexts/auth";

export const Navbar = () => {
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
  return <p id="user-email">{user!.email}</p>;
};
