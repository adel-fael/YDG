"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const TabBar = () => {
  const pathname = usePathname();
  const { day } = useParams();

  return (
    <div className="tabs-boxed tabs justify-center gap-10">
      <Link
        href={`/`}
        className={`tab ${pathname === "/" ? "tab-active" : ""}`}
      >
        Today
      </Link>
      <Link
        href={"/future"}
        className={`tab ${
          pathname === "/future" || pathname === `/future/${day}`
            ? "tab-active"
            : ""
        }`}
      >
        Future
      </Link>
    </div>
  );
};
