"use client";

import Github from "~/photos/github-mark.png";
import Linkedin from "~/photos/InBug-Black.png";

import Navbar from "~/pages/components/Navbar";

import Image from "next/image";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="main-background flex w-screen items-center justify-between text-white">
      <div className="pl-6">
        <h1 className="text-3xl">Luke Jodice</h1>
        <h2 className="text-md">Software Engineer</h2>
        <div className="flex items-center space-x-1">
          <a href="https://github.com/ljodiceendicott">
            <Image src={Github} alt="github" width={15} />
          </a>
          <a href="https://www.linkedin.com/in/luke-jodice/">
            <Image src={Linkedin} alt="linkedin" width={15} />
          </a>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
