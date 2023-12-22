"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "@/node_modules/next/link";
import React, { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Equal } from "lucide-react";
import { Home } from "lucide-react";
import { Trash } from "lucide-react";
import Image from "@/node_modules/next/image";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const page = () => {
  const [wishlistContent, setWishContent] = useState(null);
  const [products, setProduct] = useState(null);

  const [isSectionVisible, setSectionVisible] = useState(false);
  const myau = () => {
    setSectionVisible((prev) => !prev);
  };

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist && Array.isArray(storedWishlist)) {
      setWishContent(storedWishlist);
    }
  }, []);

  const clearcart = () => {
    localStorage.removeItem("wishlist");
  };

  const clearItemfromcart = () => {
    localStorage.removeItem("");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = jsonData.find((item) => item.id == wishlistContent.id);
        setProduct(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="flex-col ">
        <div
          className="bg-cover min-h-[200px]  bg-center mb-[60px]  flex items-center justify-center"
          style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
        >
          <Breadcrumb Title="Wishlist" />
        </div>
        <div className="max-w-[1430px] mt-15  w-full mx-auto mb-20 ">
          <div className="flex-col  w-full px-[10px] mx-auto sm:pt-[5px] mb-5 ">
            <div className="min-w-full border-[1px]   border-[#e5e5e5] p-5">
              <h2 className="text-[18px]  mb-2">Name</h2>
              <Input
                className="w-full pt-2 pr-8  pb-2  pl-3 text-[18px] placeholder:text-black "
                placeholder="Enter name of wishlist"
              />
              <Button className="mt-4 sm:min-h-[50px] bg-[#222] text-white  px-[38px] sm:px-[34px] text-[17px] sm:py-[14px] cursor-pointer ">
                Save
              </Button>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="overflow-x-auto mt-5">
                  <div className=" inline-block min-w-full ">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-[#EAEAEA] border-b">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium     p-3 text-[18px] text-[#666666] text-left"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium     p-3 text-[18px] text-[#666666] text-left"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium     p-3 text-[18px] text-[#666666] text-left"
                            >
                              View
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium     p-3 text-[18px] text-[#666666] text-left"
                            >
                              last Created
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium     p-3 text-[18px] text-[#666666] text-left"
                            >
                              Direct link
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium     p-3 text-[18px] text-[#666666] text-left"
                            >
                              Default
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium     p-3 text-[18px] text-[#666666] text-left"
                            >
                              Delete
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-[1px] p-3 text-[18px]  border-[#e5e5e5]">
                            <td className="p-3 items-center flex gap-1 text-[#666666] whitespace-nowrap text-sm font-medium   ">
                              <Equal
                                onClick={myau}
                                className="cursor-pointer"
                              />

                              <span className="text-sm     font-light p-3 text-[18px] text-[#666666] whitespace-nowrap">
                                1
                              </span>
                            </td>
                            <td className="text-sm     font-light p-3 text-[18px] text-[#666666] whitespace-nowrap">
                              {wishlistContent && wishlistContent.length}
                            </td>
                            <td className="text-sm     font-light p-3 text-[18px] text-[#666666] whitespace-nowrap">
                              2
                            </td>
                            <td className="text-sm     font-light p-3 text-[18px] text-[#666666] whitespace-nowrap">
                              {wishlistContent && wishlistContent.length > 0 ? (
                                wishlistContent[wishlistContent.length - 1]
                                  .formattedDate
                              ) : (
                                <span>No items in wishlist</span>
                              )}
                            </td>
                            <td className="text-sm     font-light p-3 text-[18px] text-[#666666] whitespace-nowrap">
                              View
                            </td>
                            <td className="text-sm     font-light p-3 text-[18px] text-[#666666] whitespace-nowrap"></td>
                            <td className="text-sm     font-light p-3 text-[18px] text-[#666666] whitespace-nowrap">
                              <div className="px-[10px] pt-[8px] cursor-pointer  ">
                                <AlertDialog>
                                  <AlertDialogTrigger>
                                    <Trash
                                      size={20}
                                      className="hover:fill-[#000000] "
                                      onClick={clearcart}
                                    />
                                  </AlertDialogTrigger>
                                  <AlertDialogContent className="bg-white">
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>
                                        Are you absolutely sure?
                                      </AlertDialogTitle>
                                      <AlertDialogDescription>
                                        This will remove all the items in your
                                        wishlist.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel className="cursor-pointer">
                                        Cancel
                                      </AlertDialogCancel>
                                      <AlertDialogAction className="bg-red-600 text-white cursor-pointer">
                                        Continue
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="  py-10 space-x-5 flex">
                  <Link href="/myaccount" className="flex gap-1">
                    <ChevronLeft />
                    <span className="text-[#222] sm:text-[18px] text-[16px]  leading-[26px] tracking-[0.5px]">
                      Back to your account
                    </span>
                  </Link>
                  <Link href="/" className="flex gap-1 items-center">
                    <Home size={20} />
                    <span className="pl-1 capitalize  text-[#222] hover:text-[#666] sm:text-[18px] text-[16px]  leading-[26px] tracking-[0.5px]">
                      Home
                    </span>
                  </Link>
                </div>
                {isSectionVisible ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-items-center">
                    <div className="  flex flex-col px-[20px] pt-[20px] pb-[30px] border-[#e5e5e5] bg-[#F0F0F0] rounded-2xl max-w-[400px] mb-10">
                      <Image src="/images/b4.jpg" width={400} height={400} />

                      <p className=" pt-3 text-[16px] line-clamp-2 text-[#666666] ">
                        Embrace the serendipitous nature of creativity as you
                        explore an array of designs, including abstract motifs,
                        geometric patterns, floral imprints, and more. These
                        fabrics are a versatile canvas, perfect for fashion
                        designers, interior
                      </p>
                      <div className="flex  items-center justify-between">
                        <div className=" pt-2 text-[14px] text-[#000000]">
                          {wishlistContent && wishlistContent.length > 0 ? (
                            wishlistContent[wishlistContent.length - 1]
                              .formattedDate
                          ) : (
                            <span>No items in wishlist</span>
                          )}
                        </div>
                        <div className=" flex items-center ">
                          <AlertDialog>
                            <AlertDialogTrigger>
                              <Trash
                                size={20}
                                className="hover:fill-[#000000] "
                                onClick={clearItemfromcart}
                              />
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-white">
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Are you absolutely sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This will remove this item from your wishlist.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel className="cursor-pointer">
                                  Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction className="bg-red-600 text-white cursor-pointer">
                                  Continue
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
