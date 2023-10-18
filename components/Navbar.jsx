import Image from "next/image";
import React from "react";
import message from "../public/images/message.svg";
import globe from "../public/images/globe.svg";
import america from "../public/images/america.jpg";
import person from "../public/images/person.svg";
import heart from "../public/images/heart.svg";
import bag from "../public/images/bag.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import logo from "../public/images/logoecommerce.jpg";
import search from "../public/images/search.svg";
import NavigationMenubar from "./NavigationMenu";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black">
        <div className=" mx-auto flex max-w-[1430px] flex-col justify-between gap-4 p-[10px] px-5 md:flex-row">
          <div className="flex gap-5">
            <ul className="flex items-center gap-2">
              <li className="text-white">
                <a href="URL1">
                  <Image
                    src={message}
                    alt="message1"
                    width={20}
                    height={20}
                    className="invert"
                  />
                </a>
              </li>
              <li className="text-white">Support</li>
            </ul>
            <ul className="flex items-center gap-1">
              <li className="text-white">
                <a href="URL2">
                  <Image
                    src={globe}
                    alt="message2"
                    width={20}
                    height={20}
                    className="invert"
                  />
                </a>
              </li>
              <li className="text-white ">Store Location</li>
            </ul>
          </div>

          <div>
            <p className="text-white">
              Summer Sale Season Up To 25% OFF -{" "}
              <a href="" className="text-red">
                Shop Now{" "}
              </a>
            </p>
          </div>
          <div className="flex gap-5">
            <div className="text-white">
              <Select className="items-end border-none outline-none ">
                <SelectTrigger className="">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={america}
                        alt="america"
                        width={20}
                        height={10}
                      />
                    </div>
                    <SelectValue placeholder="English" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white ">
                  <SelectItem value="light">English</SelectItem>
                  <SelectItem value="dark">Hindi</SelectItem>
                  <SelectItem value="system">Marathi</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-white">
              <Select className="items-end">
                <SelectTrigger className="">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent className="  bg-white">
                  <SelectItem value="light">EUR</SelectItem>
                  <SelectItem value="dark">USD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-white ">
        <div className="mx-auto flex max-w-[1400px] justify-between  px-1 py-[15px] max-md:flex-col max-md:items-center max-md:gap-10">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div>
            <NavigationMenubar />
          </div>
          <div className="flex items-center gap-5 ">
            <Image src={search} alt="search" />
            <Image src={person} alt="person" />
            <Image src={heart} alt="heart" />
            <Image src={bag} alt="bag" />
            <p className="text-black">$0.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
