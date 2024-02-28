"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { twM } from "@/app/utils/twMerge";

interface NextLinkProps {
  href: string;
  className?: string;
  children: string | ReactNode;
}

export function NextLink({ href, children, className }: NextLinkProps) {
  const path = usePathname();
  const activelink = path.includes(href);

  return (
    <Link
      href={href}
      data-activelink={activelink}
      prefetch={true}
      className={twM(`w-max text-white-100 flex items-center justify-center data-[activelink=true]:bg-white-100 data-[activelink=true]:px-8 data-[activelink=true]:text-mygreen-800 rounded-lg }`, className)}
      title={children?.toString()}
    >
      {<span className="lg:ml-4">{children}</span>}
    </Link>
  );
}