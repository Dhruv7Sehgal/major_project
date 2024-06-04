import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { cookies } from "next/headers";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const user = cookies().get("username");

  return (
    <main className="flex flex-col w-full min-h-screen">
      <Nav user={user} />
      <div className="flex flex-1 w-full">{children}</div>
      <Footer />
    </main>
  );
};

export default layout;
