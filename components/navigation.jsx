"use client";

import CardNav from "@/components/ui/CardNav";
import Image from "next/image";
import { useRouter } from "next/navigation";

import logoLight from "@/public/images/logo2.png";
import logoDark from "@/public/images/logo2_dark.png";


export default function Navigation() {
  const router = useRouter();

  const items = [
    {
      label: "Home",
      bgColor: "#0D0716",
      textColor: "#ffffff",
      links: [
        {
          label: "Go to Home",
          ariaLabel: "Navigate to Home",
          href: "/",
        },
      ],
    },
    {
      label: "About",
      bgColor: "#140B22",
      textColor: "#ffffff",
      links: [
        {
          label: "About Me",
          ariaLabel: "Navigate to About",
          href: "/about",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#ffffff",
      links: [
        {
          label: "All Projects",
          ariaLabel: "Navigate to Projects",
          href: "/projects",
        },
      ],
    },
    {
      label: "Blog",
      bgColor: "#1F1431",
      textColor: "#ffffff",
      links: [
        {
          label: "Read Blog",
          ariaLabel: "Navigate to Blog",
          href: "/blog",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#ffffff",
      links: [
        {
          label: "Contact Me",
          ariaLabel: "Navigate to Contact",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <CardNav
      logoLight={logoLight.src}
      logoDark={logoDark.src}
      logoAlt="Zenoguy Logo"
      items={items}
      baseColor="#ffffff"
      menuColor="#0b0616"
      buttonBgColor="#111111"
      buttonTextColor="#ffffff"
      ease="power3.out"
    />
  );
}