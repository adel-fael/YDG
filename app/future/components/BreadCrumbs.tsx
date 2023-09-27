"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const BreadCrumbs = () => {
  const pathname = usePathname();
  const { day } = useParams();

  return (
    <div className="breadcrumbs text-sm mt-2 mb-2" >
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
