import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

// Next.js
import Link from "next/link";
import React from "react";

export const Links = () => {
  return (
    <div className="flex">
      <LinkWrapper href="https://github.com/nelsensepta">
        <FiGithub />
      </LinkWrapper>
      <LinkWrapper href="https://www.linkedin.com/in/nelsensepta/">
        <FiLinkedin />
      </LinkWrapper>
      <LinkWrapper href="https://instagram.com/nelsensepta">
        <FiInstagram />
      </LinkWrapper>
    </div>
  );
};

interface Props {
  children?: React.ReactNode;
  href: string;
}

const LinkWrapper = ({ href, children }: Props) => {
  return (
    <Link href={href} rel="noreferrer" target="blank">
      <div className="text-2xl duration-100 focus:ring-2 ring-pink-500 outline-none rounded cursor-pointer mr-6 hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </Link>
  );
};
