"use client";
import {
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <>
        <SheetClose>
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
            <span className="h-[1px] bg-gray-200 w-full min-w-[270px]"></span>
          </SheetHeader>

          <SheetDescription className=" text-[18px] pt-10 flex flex-col text-left space-y-6">
            <div className="justify-between flex">
              <h1 className="text-left">Fashion</h1>
            </div>

            <Link href="/">Accessories</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">About Us</Link>
            <Link href="/">All Brands</Link>
            <Link href="/">Blogs</Link>
          </SheetDescription>
        </SheetClose>
      </>
    </>
  );
};

export default Sidebar;
