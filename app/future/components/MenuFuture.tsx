"use client";

import Link from "next/link";

type MenuFutureProps = {
  day: string;
};

export const MenuFuture: React.FC<MenuFutureProps> = ({ day }) => {


	
  return (
    <li className={"mb-5 mt-5 "}>
      <Link href={`/future/${day}`} className={"justify-center"}>
        {day}
      </Link>
    </li>
  );
};
