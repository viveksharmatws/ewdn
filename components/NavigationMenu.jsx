"use client";
import React from "react";
// Example import in a component
import { useTranslation } from "next-i18next";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import navigationmenuphoto from "../public/images/navigationmenuphoto.jpg";
import Image from "next/image";
import Link from "@/node_modules/next/link";

const NavigationMenubar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center  max-sm:flex-col  relative  z-10">
      <div>
        <ul>
          <li>
            <NavigationMenu className="z-50">
              <NavigationMenuList>
                <NavigationMenuItem className="xl:ml-[150px] ">
                  <NavigationMenuTrigger className="pr-10">
                    <p className="text-[18px] leading-[22px]  tracking-[0.5px] font-medium">
                      Fashion
                    </p>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="border-none  bg-white outline-none z-20">
                    <NavigationMenuLink>
                      <div className="min-h-[300px] min-w-[600px] p-10  z-50 ">
                        <div className="flex  xl:gap-[100px] pb-10">
                          <ul>
                            <li
                              href="/products"
                              className="  uppercase pb-3 font-semibold"
                            >
                              Apparel
                            </li>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Woman Bags
                            </Link>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Sneaker Shoes{" "}
                            </Link>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Women Clothes
                            </Link>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Men sunglasses
                            </Link>
                          </ul>

                          <ul>
                            <li
                              href="/products"
                              className="  uppercase pb-3 font-semibold"
                            >
                              Outwear
                            </li>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Men black Watch
                            </Link>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Woman Bags
                            </Link>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Blazzers
                            </Link>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Hoodies
                            </Link>
                          </ul>

                          <ul clas>
                            <li
                              href="/products"
                              className="  uppercase pb-3 font-semibold"
                            >
                              Outwear
                            </li>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Men black Watch
                            </Link>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Woman Bags
                            </Link>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Blazzers
                            </Link>
                            <Link
                              href="/products"
                              className="cursor-pointer line-clamp-1"
                            >
                              Hoodies
                            </Link>
                          </ul>
                        </div>
                        <div>
                          <Image
                            src={navigationmenuphoto}
                            alt="navigationmenuphoto"
                          />
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center justify-center">
        <ul className="flex gap-10 items-center justify-center   ">
          <Link
            href="/accessories"
            className="text-[18px] leading-[22px] text-[#000000] hover:text-[#4e4e4e]  tracking-[0.5px] font-medium"
          >
            {t("Accessories")}
          </Link>
          <Link
            href="/contact"
            className="text-[18px]  leading-[22px] text-[#000000] hover:text-[#4e4e4e] tracking-[0.5px] font-medium"
          >
            {t("Contact Us")}
          </Link>
          <Link
            href="/aboutus"
            className="text-[18px] text-[#000000] hover:text-[#4e4e4e] leading-[22px] tracking-[0.5px] font-medium"
          >
            {t("About Us")}
          </Link>
        </ul>
        <ul className="px-4">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[18px]  leading-[22px]  tracking-[0.5px] font-medium text-[#000000] hover:text-[#4e4e4e] xl:px-[10px] mb-0 pb-0">
                {t("All Brands")}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>Louis Vuitton</DropdownMenuItem>
                <DropdownMenuItem>Versace</DropdownMenuItem>
                <DropdownMenuItem>Tommy Hilfiger </DropdownMenuItem>
                <DropdownMenuItem>Nike</DropdownMenuItem>
                <DropdownMenuItem>Zara</DropdownMenuItem>
                <DropdownMenuItem>H&M</DropdownMenuItem>
                <DropdownMenuItem>Levis</DropdownMenuItem>
                <DropdownMenuItem>Patagonia</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
        <ul>
          <li>
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-[18px] font-medium pl-2 text-[#000000] hover:text-[#4e4e4e] ">
                  {t(" More")}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuLabel className="px-2 py-1 font-normal text-[15px] ">
                    <Link href="/bloggrid">Blogs</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="px-2 py-1 font-normal text-[15px] ">
                    <Link href="/bloggrid"> All Brands font-medium</Link>
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenubar;
