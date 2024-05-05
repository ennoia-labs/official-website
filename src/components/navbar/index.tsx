"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface NavigationItem {
  [key: string]: string;
}

const navigationData: NavigationItem = {
  "home":  "/",
  "about us": "/about-us",
  "services": "/services",
  "blogs": "/blogs",
  "contact": "/contact"
};

export default function NavBar() {
  return (
    <NavigationMenu className="container fixed bg-white shadow-sm top-0 left-0 w-screen justify-between px-24 py-8">
      <h4>Logo?</h4>
      <NavigationMenuList>
      {Object.entries(navigationData).map(([name, link]) => (
        <NavigationMenuItem key={name}>
          <Link href={link} passHref>
            <NavigationMenuLink className={cn('inline-block capitalize px-4 py-2 text-gray-800 hover:text-blue-500', navigationMenuTriggerStyle())}>
              {name}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
