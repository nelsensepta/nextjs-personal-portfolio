import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

export const LinkTag = ({ href, children, style, target }: Props) => {
  return (
    <Link href={href} rel="noreferrer" target={target}>
      {/* <div
        className="font-bold w-fit text-pink-500 hover:underline"
        style={style}
      > */}
      {children}
      {/* </div> */}
    </Link>
  );
};
