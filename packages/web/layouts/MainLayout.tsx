import React from "react";

import { Navbar } from "../components/Navbar";

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="w-screen bg-gray-100 h-screen p-10">
      <Navbar />
      {children}
    </div>
  );
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