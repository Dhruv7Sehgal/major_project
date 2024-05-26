import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Nav />
      <div className="flex flex-1 w-full">{children}</div>
      <Footer />
    </main>
  );
};

export default layout;
