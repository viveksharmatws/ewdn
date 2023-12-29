"use client";
import {
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import drop from "/public/images/droplocation.svg";
import Image from "@/node_modules/next/image";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SheetClose>
        <SheetHeader>
          <SheetTitle className="text-left">EWDN</SheetTitle>
          <span className="h-[1px] bg-gray-200 w-full min-w-[270px]"></span>
        </SheetHeader>

        <SheetDescription className=" text-[18px] pt-10 flex flex-col text-left space-y-6">
          <div className=" overflow-y-auto">
            <div className="gap-5 flex group  py-4 hover:bg-[#222] px-2  rounded-xl">
              <Image
                className="group-hover:invert"
                src="/images/fas.png"
                width={30}
                height={20}
                alt="bags"
              />
              <Link
                onClick={() =>
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000)
                }
                className="group-hover:text-white "
                href="/"
              >
                Fashion
              </Link>
            </div>
            <div className="gap-5 flex group  py-4 hover:bg-[#222] px-2  rounded-xl">
              <Image
                className="group-hover:invert"
                src="/images/accessories.png"
                width={30}
                height={20}
                alt="bags"
              />

              <Link
                onClick={() =>
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000)
                }
                className="group-hover:text-white "
                href="/accessories"
              >
                Accessories
              </Link>
            </div>
            <div className="gap-5 flex group  py-4 hover:bg-[#222] px-2  rounded-xl">
              <Image
                className="group-hover:invert"
                src="/images/contact.png"
                width={30}
                height={20}
                alt="bags"
              />

              <Link
                onClick={() =>
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000)
                }
                className="group-hover:text-white "
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
            <div className="gap-5 flex group  py-4 hover:bg-[#222] px-2  rounded-xl">
              <Image
                className="group-hover:invert"
                src="/images/about.png"
                width={30}
                height={20}
                alt="bags"
              />

              <Link
                onClick={() =>
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000)
                }
                className="group-hover:text-white "
                href="/aboutus"
              >
                About Us
              </Link>
            </div>
            <div className="gap-5 flex group  py-4 hover:bg-[#222] px-2 rounded-xl">
              <Image
                className="group-hover:invert"
                src="/images/brand.png"
                width={30}
                height={20}
                alt="bags"
              />

              <Link
                onClick={() =>
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000)
                }
                className="group-hover:text-white "
                href="/"
              >
                All Brands
              </Link>
            </div>
            <div className="gap-5 flex group  py-4 hover:bg-[#222] px-2  rounded-xl">
              <Image
                className="group-hover:invert"
                src="/images/blog.png"
                width={30}
                height={20}
                alt="bags"
              />

              <Link
                onClick={() =>
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000)
                }
                className="group-hover:text-white "
                href="/bloggrid"
              >
                Blogs
              </Link>
            </div>
          </div>
        </SheetDescription>
        <SheetFooter className="w-full py-10 sm:flex-col ">
          <Link
            onClick={() =>
              setTimeout(() => {
                window.location.reload();
              }, 1000)
            }
            href="/contact"
            className="sm:py-2   uppercase w-full text-[#222] flex items-start  border-b "
          >
            Contact US
          </Link>
          <div className="  pt-10 pb-4 flex-col   w-full">
            <li className="mb-[3px]  leading-[33px]   flex items-start ">
              <Image
                className="group-hover:invert mt-[8px] stroke-black"
                src={drop}
                width={20}
                height={20}
                alt="store"
              />

              <p className="text-[18px] ml-[10px] text-left text-black">
                Clostich - Apparel & Clothing Store
                <p>507-Union Trade Centre </p>
                <p>123456 France</p>
              </p>
            </li>
          </div>
        </SheetFooter>
      </SheetClose>
    </>
  );
};

export default Sidebar;
