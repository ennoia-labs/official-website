import Link from "next/link";
import { Button } from "../ui/button";
import Balancer from "react-wrap-balancer";
import { Linkedin, X } from "lucide-react";

interface NavLink {
  [key: string]: string;
}

const links: NavLink = {
  root: "/",
  "about us": "/about-us",
  services: "/services",
  blogs: "/blogs",
  "privacy-policy": "/privacy-policy",
  "terms-of-service": "/terms-of-service",
  "cookie-policy": "/cookie-policy",
  linkedin: "https://linkedin.com/company/ennoia-labs",
  x: "https://twitter.com",
};

export default function Footer() {
  return (
    <footer className="container px-24 py-8">
      <div className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
        <div className="flex flex-col gap-6 not-prose">
          <Link href={links.root}>
            <h3 className="text-2xl font-bold">Ennoia Labs</h3>
            {/* TODO: logo image can go here */}
          </Link>
          <p>
            <Balancer>
            Explore Ennoia Labs: where innovation meets precision. Our team crafts tailored software solutions, shaping tomorrow&apos;s technology landscape. Let&apos;s collaborate and bring your ideas to life.
            </Balancer>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-xl mb-4">Website</h5>
          <Link href={links["about us"]}>About Us</Link>
          <Link href={links.services}>Services</Link>
          <Link href={links.blogs}>Blogs</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-xl mb-4">Legal</h5>
          <Link href={links["privacy-policy"]}>Privacy Policy</Link>
          <Link href={links["terms-of-service"]}>Terms of Service</Link>
          <Link href={links["cookie-policy"]}>Cookie Policy</Link>
        </div>
      </div>
      <div className="border-t pt-6 mt-8 flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
        <div className="flex gap-2">
          <Button asChild variant="outline" size="icon">
            <Link href={links.linkedin}><Linkedin /></Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <Link href={links.x}><X /></Link>
          </Button>
        </div>
        <p className="text-muted-foreground">
          &copy; <Link href={links.root}>Ennoia Labs</Link>
          . All rights reserved. 2024-present.
        </p>
      </div>
    </footer>
  );
}
