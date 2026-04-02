import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  className?: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({children}) => {
  return (
<div className="background-coloring">
<Header/>
{children}
<Footer/>
</div>
  );
};

export default Page;
