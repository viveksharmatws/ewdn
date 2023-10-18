"use client";
import React from "react";
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

const NavigationMenubar = () => {
  return (
    <div className="flex items-center  max-sm:flex-col">
      <div>
        <ul>
          <li>
            <NavigationMenu className="">
              <NavigationMenuList>
                <NavigationMenuItem className="xl:ml-[150px]">
                  <NavigationMenuTrigger>Fashion</NavigationMenuTrigger>
                  <NavigationMenuContent className="border-none bg-white outline-none">
                    <NavigationMenuLink>
                      <div className="min-h-[300px] min-w-[600px] p-10  ">
                        <div className="flex  gap-[100px] pb-10">
                          <ul>
                            <li className="font-semibold">Apparel</li>
                            <li>Woman Bags</li>
                            <li>Sneaker Shoes </li>
                            <li>Women Clothes</li>
                            <li>Men sunglasses</li>
                          </ul>

                          <ul>
                            <li className="font-semibold">Outwear</li>
                            <li>Men black Watch</li>
                            <li>Woman Bags</li>
                            <li>Blazzers</li>
                            <li>Hoodies</li>
                          </ul>

                          <ul>
                            <li className="font-semibold">Outwear</li>
                            <li>Men black Watch</li>
                            <li>Woman Bags</li>
                            <li>Blazzers</li>
                            <li>Hoodies</li>
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
      <div className="flex flex-row">
        <ul className="flex gap-10   ">
          <li className="text-[18px] font-medium">Accessories</li>
          <li className="text-[18px] font-medium">Contact Us</li>
          <li className="text-[18px] font-medium">About Us</li>
        </ul>
        <ul className="px-4">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[18px]  font-medium text-black md:px-10">
                All Brands
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel> All Brands</DropdownMenuLabel>
                <DropdownMenuSeparator />
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
            <div className="min-sm:px-5 max-sm:px-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-[18px] font-medium text-black">
                  More
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="py-2 ">More</DropdownMenuLabel>
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
