"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "@/node_modules/next/image";
import React, { useEffect, useState } from "react";
import { ChevronLeftCircle } from "lucide-react";

import { Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import Security from "@/elements/securty";
import Link from "@/node_modules/next/link";
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
  const [products, setProduct] = useState(null);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));

    if (storedCart && Array.isArray(storedCart)) {
      setProduct(storedCart);
    } else {
      setProduct([]);
    }
  }, []);

  const clearItemfromcart = (itemId) => {
    const updatedContent = products.filter((product) => product.id !== itemId);

    setProduct(updatedContent);
    localStorage.setItem("cart", JSON.stringify(updatedContent));

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const isProductsEmpty = !products || products.length === 0;
  products && console.log(products.map((i) => i, "huhahahaha"));

  return (
    <>
      <div className="flex-col pt-[5px] pb-[20px]">
        <div
          className="bg-cover min-h-[200px] bg-no-repeat bg-center mb-[40px]  flex items-center justify-center"
          style={{ backgroundImage: "url(/images/breadcrumb_img.jpg)" }}
        >
          <Breadcrumb Title="Shopping Cart " />
        </div>

        {isProductsEmpty ? (
          <div className="  max-w-[1430px] mx-auto gap-[30px] w-full">
            <div className="max-sm:flex-col md:flex gap-5  max-w-[500px] w-full">
              <Image
                src="/images/cart.jpg"
                width={1000}
                height={1000}
                className=""
              />
              <div className="flex justify-center w-full items-center">
                <div>
                  <h2 className="text-3xl text-center decoration-4  underline decoration-zinc-200 ">
                    Your cart is empty
                  </h2>

                  <Link href="/accessories">
                    <button
                      class="text-[#00E6CD] bg-transparent max-sm:text-sm sm:text-lg mt-5 border border-solid border-[#00E6CD] hover:bg-[#52cfc1] hover:text-white active:bg-[#00E6CD] font-bold uppercase px-6 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex max-lg:flex-col   max-w-[1430px] mx-auto gap-[30px] w-full px-[15px]">
            <div className="w-full pb-20 lg:pb-60">
              {products &&
                products.map((product) => (
                  <div className="flex-col">
                    <div className="flex-col max-w-[920px] w-full  ">
                      <div className=" border border-gray-200 mb-[12px]   ">
                        <div className="  rounded-sm min-h-[32px] w-full border-gray-100 border-b p-[16px]"></div>
                        <div className="p-[5px] sm:p-[16px]">
                          <div className="  grid sm:grid-cols-4   grid-cols-2 py-[10px] max-sm:space-y-10 max-sm:py-[16px]  items-start ">
                            <div className=" px-[15px] max-sm:px-[0px] shrink-0 max-sm:justify-self-center">
                              <Image
                                src={`/images${product.all_images[0]}`}
                                width={90}
                                height={110}
                                className="person"
                              />
                            </div>
                            <div className=" flex-col px-[5px] sm:px-[15px] ">
                              <h2 className="text-[18px] tracking-[0.5px] leading-[26px] font-normal max-sm:place-items-start">
                                {product.heading}
                              </h2>
                              <div className="space-x-2">
                                <span className="text-[15px]  leading-[24px] line-through text-[#ccc]">
                                  ${product.notprice}
                                </span>
                                <span className="text-[16px] font-semibold leading-[24px]  text-[#ff0000]">
                                  ${product.price}
                                </span>
                              </div>
                              <div className="space-x-[4px] mb-[3px]">
                                <span className="text-[18px]  leading-[24px]  text-[#222]">
                                  Size:
                                </span>
                                <span className="text-[18px] leading-[24px] text-[#666666] ">
                                  Small
                                </span>
                              </div>
                              <div className="space-x-[4px] mb-[3px] flex">
                                <span className="text-[18px]  leading-[24px]  text-[#222]">
                                  Color:
                                </span>
                                <span className=" flex items-center text-[18px] leading-[24px] text-[#666666] ">
                                  {products &&
                                    products?.color?.map((color, index) => (
                                      <h1 key={index}>{color}</h1>
                                    ))}
                                </span>
                              </div>
                            </div>
                            <div className=" px-[10px] sm:px-[15px] flex max-sm:justify-self-center items-center justify-center ">
                              <span className="pr-2 hidden max-sm:block text-[18px]">
                                Items
                              </span>
                              <p className=" max-w-[78px]  appearance-none  text-[20px] outline-none text-black  sm:min-h-[40px]">
                                {product.inputValue} item
                              </p>
                            </div>

                            <div className="flex justify-between">
                              <div className=" px-[5px] sm:px-[15px] float-left text-[18px] font-semibold text-[#ff0000]">
                                {products && (
                                  <p> ${product.price * product.inputValue} </p>
                                )}
                              </div>
                              <div
                                href=""
                                className=" px-[5px] sm:px-[15px] float-left cursor-pointer max-sm:pr-[25px] "
                              >
                                <AlertDialog>
                                  <AlertDialogTrigger>
                                    <Trash
                                      size={20}
                                      className="hover:fill-[#000000] opacity-70 "
                                    />
                                  </AlertDialogTrigger>
                                  <AlertDialogContent className="bg-white">
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>
                                        Are you absolutely sure?
                                      </AlertDialogTitle>
                                      <AlertDialogDescription>
                                        This action cannot be undone. This will
                                        permanently delete your account and
                                        remove your data from our servers.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel className="cursor-pointer">
                                        Cancel
                                      </AlertDialogCancel>

                                      <AlertDialogAction
                                        onClick={() =>
                                          clearItemfromcart(product?.id)
                                        }
                                        className="bg-red-600 text-white cursor-pointer"
                                      >
                                        Continue
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <Link href="/" className="flex gap-2 text-[18px] font-normal">
                <ChevronLeftCircle />
                Continue shopping
              </Link>
            </div>

            {/* second price checkout section */}
            <div>
              <div className="flex-col">
                <div className=" md:min-w-[440px] border flex-col border-gray-200 mb-[25px] ">
                  <div className="border-gray-100 border-b">
                    <div className="p-[20px]  ">
                      <div className="flex  justify-between mt-1">
                        <div>
                          <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                            4items
                          </p>
                        </div>
                        <div>
                          <p className="text-[18px] font-semibold text-[#ff0000]">
                            $344.00
                          </p>
                        </div>
                      </div>
                      <div className="flex  justify-between mt-1">
                        <div>
                          <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                            Shipping
                          </p>
                        </div>
                        <div>
                          <p className="text-[18px] font-semibold text-[#ff0000]">
                            $7.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-[20px]  ">
                      <div className="flex  justify-between mt-1">
                        <div>
                          <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                            Total (tax excl.)
                          </p>
                        </div>
                        <div>
                          <p className="text-[18px] font-semibold text-[#ff0000]">
                            $351.00
                          </p>
                        </div>
                      </div>
                      <div className="flex  justify-between mt-1">
                        <div>
                          <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                            Total (tax incl.)
                          </p>
                        </div>
                        <div>
                          <p className="text-[18px] font-semibold text-[#ff0000]">
                            $351.00
                          </p>
                        </div>
                      </div>
                      <div className="flex  justify-between mt-1">
                        <div>
                          <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal">
                            Taxes
                          </p>
                        </div>
                        <div>
                          <p className="text-[18px] font-semibold text-[#ff0000]">
                            0.00
                          </p>
                        </div>
                      </div>
                      <p className="text-[18px] tracking-[0.5px] leading-[26px] font-normal mt-3 underline cursor-pointer ">
                        Have a promo code?
                      </p>
                    </div>
                    <div>
                      <div className="p-[20px] flex-col gap-2 items-center justify-start ">
                        <div className="flex gap-2">
                          <div className="">
                            <Input
                              placeholder="Enter Promo Code"
                              className=" max-w-[270px] outline-none appearance-none border-b border-neutral-900 min-h-[36px] md:w-[600px] max-sm:w-full  max-md:flex-1"
                            />
                          </div>
                          <div className="  flex   items-center justify-center  px-[15px] py-[8px] sm:px-[25px] sm:py-[5px] text-white bg-black hover:text-white min-h-[32px]">
                            <Link href="#" className="cursor-pointer">
                              Add
                            </Link>
                          </div>
                        </div>
                        <div className="mt-2 ">
                          <button className="text-[20px]">Close</button>
                        </div>
                        <div className="text-[18px]">
                          <p>Take advantage of our exclusive offers:</p>
                        </div>
                        <div className="pt-[5px]">
                          <button className="text-[18px] tracking-[0.5px] leading-[26px] font-normal mt-3 underline uppercase">
                            promo
                          </button>
                          <span className="ml-[5px] text-[#FF9852] text-[18px] font-normal">
                            - Promo Code
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="p-[20px] text-center">
                        <button
                          href="/checkout"
                          className="px-[34px] text-[18px] py-[14px] text-white bg-black mx-auto"
                        >
                          Proceed to checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <Security
                      Title="Security policy"
                      Para="(edit with the Customer Reassurance module)"
                      icon="Security"
                    />
                  </div>
                  <div>
                    <Security
                      Title="Delivery policy"
                      Para="(edit with the Customer Reassurance module)"
                      icon="Return"
                    />
                  </div>
                  <div>
                    <Security
                      Title="Return policy"
                      Para="(edit with the Customer Reassurance module)"
                      icon="Delivery"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
