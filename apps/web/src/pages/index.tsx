import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { trpc } from "../api/APIProvider";
import { useAuth } from "../contexts/auth";
import Link from "next/link";
import MainLayout, { Card } from "../layouts/MainLayout";
const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <MainLayout>
      <Card>
        <>
          <div className="text-8xl font-extrabold text-center mb-10">
            The starter{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-500 to-red-600"
              id="main"
            >
              template
            </span>{" "}
            you were waiting for
          </div>
          <p className="mb-20 tracking-widest text-gray-400 text-2xl text-center">
            Next.JS + Tailwind CSS + TRPC.io + Prisma ORM + PostgreSQL
          </p>
          <div className="flex justify-center">
            <a
              href="https://github.com/mikealche/next-node-auth-monorepo"
              className="py-5 px-40 border border-red-300 transition-all rounded-lg tracking-wider mr-10 "
            >
              GitHub
            </a>
            <Link href="/signup" passHref>
              <button className="py-5 px-40 border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all rounded-lg text-white tracking-wider ">
                Sign up
              </button>
            </Link>
          </div>
        </>
      </Card>
    </MainLayout>
  );
};

export default Home;
