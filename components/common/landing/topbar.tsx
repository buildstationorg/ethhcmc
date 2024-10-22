"use client";

import React from "react";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa";
import { topbarItems } from "@/configs/topbar.config";
import { cn } from "@/libs/utils";
import { Button, buttonVariants } from "@/components/ui/button";

const Topbar = () => {
  return (
    <div className="w-full border-b-2 border-foreground h-16 fixed top-0 left-0 z-10 bg-background">
      <div className="container flex items-center h-full">
        <Link href="/" className="">
          <Logo />
        </Link>
        <div className="flex-1 flex-grow flex items-center gap-2 justify-center">
          {topbarItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(buttonVariants({ variant: "ghost" }), "text-md")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex-1 flex items-center flex-grow justify-end gap-4">
          <Button>Book a call</Button>
          <Button variant="outline" className="border-2 border-foreground">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <FaEthereum size={32} />
      <span className="font-bold text-xl">Ethhcmc</span>
    </div>
  );
};

export default Topbar;
