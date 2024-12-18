"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./Ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(" fixed top-10 inset-x-0 max-w-2xl mx-auto z-20", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem></Link>

          <MenuItem setActive={setActive} active={active} item="Our course">
           <div className="flex flex-col space-y-4" >
           <HoveredLink href="/courses">All-Courses</HoveredLink>
           <HoveredLink href="/courses">
           Introduction to Computer Science</HoveredLink>
           <HoveredLink href="/courses">Data Science Basics</HoveredLink>
           <HoveredLink href="/course">Advanced Algorithms</HoveredLink>
            </div>
          </MenuItem>
          
         <Link href={'/contact'}>
         <MenuItem setActive={setActive} active={active} 
         item="Contact Us"></MenuItem>

       
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
