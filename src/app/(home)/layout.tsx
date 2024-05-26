import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default layout;
