"use client";

import Link from "next/link";

type MenuFutureProps = {
  day: string;
  zaffeCount: number
};

export const MenuFuture: React.FC<MenuFutureProps> = ({ day,zaffeCount }) => {



  return (
    <li className={"mb-5 mt-5 "}>
      <Link href={`/future/${day}`} className={"justify-center"}>
        {day}  {zaffeCount ? <div className="badge badge-secondary">+{zaffeCount}</div> : null}
      </Link>
    </li>
  );
};
