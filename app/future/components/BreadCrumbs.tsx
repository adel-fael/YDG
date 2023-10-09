"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const BreadCrumbs = () => {
  const pathname = usePathname();
  const { day } = useParams();

  return (
    <div className="breadcrumbs mb-2 mt-2 text-sm">
      <ul className="justify-center">
        {pathname === `/future/${day}` && (
          <>
            <li>
              <Link href={"/future"}>future</Link>
            </li>{" "}
            <li>{day}</li>
          </>
        )}
      </ul>
    </div>
  );
};
