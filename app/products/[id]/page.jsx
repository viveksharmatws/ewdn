"use client";
import { useRouter } from "next/navigation";
import { MdContentCopy } from "react-icons/md";
import Image from "next/image";

import { useParams } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Progress } from "@/components/ui/progress";
import { IoStar } from "react-icons/io5";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import ImageZoom from "react-image-zooom";
import { Input } from "@/components/ui/input";
import Breadcrumbcomponent from "@/components/Breadcrumbcomponent";
import Security from "@/elements/securty";
import Reviews from "@/elements/Reviews";
import jsonData from "data.json";
import { ChevronUp, ChevronDown } from "lucide-react";
import Tabscompo from "@/components/Tabs";
import Link from "@/node_modules/next/link";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const page = () => {
  const params = useParams();
  const user = params;
  const [product, setProduct] = useState([]);
  const [inputValue, setInputValue] = useState("1");
  const { toast } = useToast();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = jsonData.find((item) => item.id == user.id);
        setProduct(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, [params]);

  const [mainImage, setMainImage] = useState("/images/dialogueperson.jpg");
  const carouselImages = [
    "/images/dialogueperson.jpg",
    "/images/b1.jpg",
    "/images/g2.jpg",
    "/images/b2.jpg",
    "/images/g6.jpg",
    "/images/g6.jpg",
    "/images/g6.jpg",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    arrows: true,
    prevArrow: <ChevronUp />,
    nextArrow: <ChevronDown />,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    arrows: true,
    prevArrow: <ChevronUp />,
    nextArrow: <ChevronDown />,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: true,
  };

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const addToCart = (product) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [
      ...existingCartItems,
      { ...product, inputValue: inputValue },
    ];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <>
      <Breadcrumbcomponent />
      <div className="max-w-[1430px] mx-auto px-[10px] sm:px-[15px] ">
        <div className=" mt-[30px] w-full max-md:flex-col md:flex ">
          <div className="w-full sm:w-1/2 mx-auto">
            <div className="p-[15px]  lg:flex gap-4 ">
              <div className=" hidden  lg:flex max-w-[100px] max-h-[600px] ">
                <Slider {...settings}>
                  {carouselImages.map((i) => (
                    <div className="max-h-[200px] ">
                      <Image
                        src={i}
                        width={100}
                        height={50}
                        onClick={() => handleImageClick(i)}
                        className="w-full"
                        alt="image"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="lg:w-[600px] mx-auto ">
                <ImageZoom
                  src={mainImage}
                  alt="Main Image"
                  width={600}
                  height={900}
                  zoom="200"
                  className="w-full h-auto "
                />
              </div>

              <div className=" order-2 flex-col lg:hidden max-w-[700px] gap-5 max-h-[600px] ">
                <Slider {...settings2}>
                  {carouselImages.map((i) => (
                    <div className="h-auto sm:max-h-[200px] ">
                      <Image
                        src={i}
                        width={600}
                        height={150}
                        onClick={() => handleImageClick(i)}
                        className="w-full"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="w-1/2  max-xl:w-full pt-[15px]  max-md:mx-auto overflow-auto px-[10px]">
            <div>
              <div>
                <div className="flex gap-[10px] items-center">
                  <div className="flex py-1">
                    <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                    <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                    <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                    <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                    <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                  </div>
                  <div className="pl-[5px]"> 0 Reviews(s)</div>
                </div>
              </div>
              <div className=" mb-[7px] text-[28px] font-medium tracking-[0.5px]  text-black">
                {product.heading}
              </div>
              <div className="mb-[15px] text-[18px] font-normal leading-[26px] text-[#666]">
                {product.description}
              </div>
            </div>
            <div className="flex items-center justify-between border-t-[1px]  border-gray-300 pt-5">
              <div className="flex-col ">
                <h3 className="mb-[7px] capitalize text-[18px] font-normal leading-[26px] tracking-[0.5px]">
                  Brand: {product.brand}
                </h3>
                <div className="flex items-center  gap-[10px]">
                  <p className="text-[18px] font-normal leading-[26px]  tracking-[0.5px]">
                    Condition:
                  </p>

                  <span className=" text-[18px] font-normal leading-[26px] tracking-[0.5px]">
                    {product.condition}
                  </span>
                </div>
              </div>

              <div>
                <Image
                  src="/images/prada.jpg"
                  width={150}
                  height={150}
                  alt="prada"
                  className="border-[1px] p-2"
                />
              </div>
            </div>
            <div className="mt-[8px] flex-col">
              <h3 className="mb-[7px] text-[18px] font-normal leading-[26px] tracking-[0.5px]">
                Reference: Product2
              </h3>
              <h3 className=" text-[18px] font-normal  leading-[26px] tracking-[0.5px] ">
                Available In Stock:
                <span className="text-[18px] font-medium leading-[26px] tracking-[0.5px]  text-[#4CBB6C]">
                  {product.leftcount} Items
                </span>
              </h3>
            </div>
            <div>
              <Progress
                className=" h-[6px] mt-[10px] bg-[#ddd]"
                howmany={product.leftcount}
              />
            </div>
            <div className="py-[5px]">
              <p>
                Hurry up! only
                <span className="text-[#ff0000] px-1 font-semibold ">
                  {product.leftcount}
                </span>
                items left in stock!
              </p>
            </div>
            <h3 className="text-[18px] font-normal leading-[26px] tracking-[0.5px]">
              Color: Orange
            </h3>
            <div className="mt-2 flex gap-2">
              <div className="h-[30px] w-[30px] rounded-full bg-orange-500 outline-gray-200  outline-offset-2"></div>
              <div className="h-[30px] w-[30px] rounded-full bg-[#5d9cec]  outline-gray-200 outline-offset-2"></div>
              <div className="h-[30px] w-[30px] rounded-full bg-yellow-500  outline-gray-200 outline-offset-2"></div>
            </div>
            <div className="mt-[10px] flex  items-baseline gap-2  text-[23px]">
              <span className="text-[23px] font-semibold text-[#666] line-through">
                $58.00
              </span>
              <span className="text-[23px] font-semibold text-red-600">
                ${product.price}
              </span>
              <span className="bg-red-600 px-[8px] text-[13px] font-medium text-white">
                -{product.discount}%
              </span>
            </div>
            <div>
              <p className=" mt-[1px]  text-[15px] font-normal leading-[26px] text-[#666]">
                Free Shipping (Est. Delivery Time 2-3 Days)
              </p>
            </div>
            <div className="mt-[14px] flex gap-2">
              <div>
                <input
                  type="number"
                  placeholder="1"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="max-w-[70px] outline-none text-black text-[22px] min-h-[44px]"
                />
              </div>
              <div className="  flex sm:min-w-[200px] min-w-[150px] items-center justify-center  px-[15px] py-[10px] sm:px-[25px] sm:py-[10px] text-white bg-[#222] hover:text-white min-h-[44px]">
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    addToCart(product);
                    toast({
                      title: "This Product is added to your cart",
                      description: `${product.heading} is added to your cart`,
                    });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="sm:mt-[15px] mt-[10px]  flex gap-2 sm:gap-5">
              <div className=" flex items-center justify-center gap-2">
                <MdContentCopy size={20} />
                <h3 className="sm:text-[18px] text-[14px]  font-normal capitalize leading-[22px] tracking-[0.5px] text-black">
                  add to compare
                </h3>
              </div>
              <div className=" flex items-center justify-center gap-2">
                <Image alt="" src="/images/heart.svg" width={20} height={20} />

                <h3 className="sm:text-[18px] text-[14px]  font-normal capitalize leading-[22px] tracking-[0.5px] text-black">
                  add to wishlist
                </h3>
              </div>
            </div>
            <div className="mt-[20px] mb-[15px]">
              <span className="border-2 border-[#4cbb6c] bg-[#e9f9ee] px-[7px] py-[3px]  text-[15px] font-normal capitalize leading-[15px] tracking-[0.5px] text-[#4cbb6c] duration-300 group-hover:translate-x  ">
                In Stock
              </span>
            </div>

            <div className="flex gap-2 mb-[10px]">
              <div className="items-center justify-center flex w-[58px] h-[33px] hover:fill-[#00f0e0] border-[#00f0e0] border">
                <Image src="/images/twitter.png" width={65} height={35} />
              </div>
              <div className="items-center justify-center flex w-[58px] h-[33px] hover:fill-[#ff0000] border-[#ff0000] border">
                <Image src="/images/pinterst.png" width={35} height={35} />
              </div>
              <div className="items-center justify-center flex w-[58px] h-[33px] hover:fill-[#435f9f] border-[#435f9f] border">
                <Image src="/images/facebook.png" width={35} height={35} />
              </div>
            </div>

            <div className="flex-col space-y-[10px]">
              <Security
                Title="Security policy"
                Para="(edit with the Customer Reassurance module)"
                icon="Security"
              />
              <Security
                Title="Return policy"
                Para="(edit with the Customer Reassurance module)"
                icon="Return"
              />
              <Security
                Title="Delivery  policy"
                Para="(edit with the Customer Reassurance module)"
                icon="Delivery"
              />
            </div>
          </div>
        </div>
        <Tabscompo />
        <div className=" mt-[50px] sm:mt-[90px]">
          <div>
            <h2 className="sm:text-[45px] max-sm:text-[30px] font-normal">
              You might also like
            </h2>
            <div className="grid mt-[40px] grid-cols-2 items-start gap-[10px] sm:gap-[30px] place-items-center sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  w-full ">
              {jsonData.map((product) => (
                <div key={product.index} className="">
                  <div className="group relative duration-1000 overflow-hidden">
                    <Image
                      src={`/images${product.all_images[0]}`}
                      alt="Image of person"
                      width={256}
                      height={300}
                      className=" opacity-100 w-full"
                    />
                    {product.all_images.length > 1 && (
                      <Image
                        src={`/images${product.all_images[1]}`}
                        alt="Image of person"
                        width={256}
                        height={300}
                        className="opacity-0 w-full duration-1000 group-hover:opacity-100 absolute left-0 top-0"
                      />
                    )}
                    <div className=" absolute right-[10px] top-[-25px] flex flex-col gap-2 opacity-0 duration-500 group-hover:right-[10px] group-hover:translate-y-[35px]  group-hover:opacity-100 group-hover:transition ">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center   ">
                        <Image
                          src="../images/heart.svg"
                          alt=""
                          width={17}
                          height={17}
                          className="brightness-0 invert "
                        />
                      </div>
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                        <Image
                          src="../images/compare.svg"
                          alt=""
                          width={17}
                          height={17}
                          className="brightness-0 invert"
                        />
                      </div>
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                        <Image
                          src="../images/wide.svg"
                          alt=""
                          width={17}
                          height={17}
                          className="brightness-0 invert"
                        />
                      </div>
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full  bg-black hover:bg-red-600 group-hover:items-center  group-hover:justify-center ">
                        <Image
                          src="../images/addtoviewpage.svg"
                          alt=""
                          width={17}
                          height={17}
                          className="brightness-0 invert max-w-[17px] w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-[-2px] top-[8px] flex flex-col gap-[2px] ">
                      <div className="opacity-0 duration-500 group-hover:opacity-100">
                        <div>
                          <span className="bg-green-500 px-[7px] py-[3px] text-[11px] font-medium capitalize leading-[15px] tracking-[0.5px] text-white duration-300 group-hover:translate-x-3  shadow-sm shadow-slate-950">
                            new
                          </span>
                        </div>
                      </div>

                      <div className="opacity-100">
                        <span className="bg-[#E22D2D] px-[7px] py-[3px] text-[11px] font-medium capitalize leading-[15px] tracking-[0.5px] text-white  duration-300 group-hover:translate-x-3 shadow-sm shadow-slate-500 ">
                          -12%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-[10px]">
                    <h3 className=" text-[16px] font-normal leading-[26px] tracking-[0.3px] text-[#666666]">
                      {product.subheading}
                    </h3>
                    <Link
                      href="/products"
                      className=" text-[18px] font-normal capitalize leading-[22px] tracking-[0.3px] line-clamp-1"
                    >
                      {product.heading}
                    </Link>
                    <div className="flex py-1">
                      <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                      <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                      <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                      <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                      <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                    </div>
                    <h3 className="mt-[4px] text-[20px] font-medium leading-[20px] text-[#ff0000]  ">
                      ${product.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:mt-[90px] mt-[50px]">
          <div>
            <h2 className="sm:text-[45px] max-sm:text-[30px] font-normal sm:leading-[50px] leading-[30px]">
              10 other products in the same category:
            </h2>
            <div className="grid mt-[40px] grid-cols-2 items-start gap-[10px] sm:gap-[30px] place-items-center sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  ">
              {jsonData.map((product) => (
                <div key={product.index} className="">
                  <div className="group relative duration-1000 overflow-hidden">
                    <Image
                      src={`/images${product.all_images[0]}`}
                      alt="Image of person"
                      width={256}
                      height={300}
                      className=" opacity-100 w-full"
                    />
                    {product.all_images.length > 1 && (
                      <Image
                        src={`/images${product.all_images[1]}`}
                        alt="Image of person"
                        width={256}
                        height={300}
                        className="opacity-0 w-full duration-1000 group-hover:opacity-100 absolute left-0 top-0"
                      />
                    )}
                    <div className=" absolute right-[10px] top-[-25px] flex flex-col gap-2 opacity-0 duration-500 group-hover:right-[10px] group-hover:translate-y-[35px]  group-hover:opacity-100 group-hover:transition ">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center   ">
                        <Image
                          src="../images/heart.svg"
                          alt=""
                          width={17}
                          height={17}
                          className="brightness-0 invert "
                        />
                      </div>
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                        <Image
                          src="../images/compare.svg"
                          alt=""
                          width={17}
                          height={17}
                          className="brightness-0 invert"
                        />
                      </div>
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black  hover:bg-red-600 group-hover:items-center group-hover:justify-center  ">
                        <Image
                          src="../images/wide.svg"
                          alt=""
                          width={17}
                          height={17}
                          className="brightness-0 invert"
                        />
                      </div>
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full  bg-black hover:bg-red-600 group-hover:items-center  group-hover:justify-center ">
                        <Image
                          src="../images/addtoviewpage.svg"
                          alt=""
                          width={17}
                          height={17}
                          className="brightness-0 invert max-w-[17px] w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-[-2px] top-[8px] flex flex-col gap-[2px] ">
                      <div className="opacity-0 duration-500 group-hover:opacity-100">
                        <div>
                          <span className="bg-green-500 px-[7px] py-[3px] text-[11px] font-medium capitalize leading-[15px] tracking-[0.5px] text-white duration-300 group-hover:translate-x-3  shadow-sm shadow-slate-950">
                            new
                          </span>
                        </div>
                      </div>

                      <div className="opacity-100">
                        <span className="bg-[#E22D2D] px-[7px] py-[3px] text-[11px] font-medium capitalize leading-[15px] tracking-[0.5px] text-white  duration-300 group-hover:translate-x-3 shadow-sm shadow-slate-500 ">
                          -12%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-[10px]">
                    <h3 className=" text-[16px] font-normal leading-[26px] tracking-[0.3px] text-[#666666]">
                      {product.subheading}
                    </h3>
                    <Link
                      href="/products"
                      className=" text-[18px] font-normal capitalize leading-[22px] tracking-[0.3px] line-clamp-1"
                    >
                      {product.heading}
                    </Link>
                    <div className="flex py-1">
                      <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                      <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                      <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                      <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                      <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                    </div>
                    <h3 className="mt-[4px] text-[20px] font-medium leading-[20px] text-[#ff0000]  ">
                      ${product.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-[80px]">
          <Reviews />
        </div>
      </div>
    </>
  );
};

<Footer />;

export default page;
