import { ReactNode } from "react";

type Link = {
  href: string,
  text: string,
}

export const NAVBAR_LINKS: Link[] = [
  { 
    href: "/users",
    text: "Users", 
  },
  { 
    href: "/categories",
    text: "Patients",
  },
  { 
    href: "/schedules",
    text: "Hospitals",
  },
  { 
    href: "/see_schedules",
    text: "Notices",
  },
  { 
    href: "/settings",
    text: "Help center",
  },
];