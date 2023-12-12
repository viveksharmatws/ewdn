"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import List from "@/elements/list";
import Image from "next/image";
import Table from "./Table";
import { useState } from "react";

const handleTabClick = (value) => {
  setSelectedTab(value);
};
const Tabscompo = () => {
  const [selectedTab, setSelectedTab] = useState("Description");
  return (
    <>
      <Tabs
        defaultValue="account"
        className="max-w-[1430px] mx-auto px-[10px]  mt-[80px]"
      >
        <TabsList className="w-full border-b-[0.5px] pb-[10px] lg:pb-[1px] border-[#d1d1d1]">
          <div className="sm:min-h-[60px] space-x-5 ">
            <TabsTrigger
              className={`text-[20px] text-[#666]  
               pb-[12px] ml-[20px] px-[12px]  min-h-[38px] hover:border-b-4 hover:border-black  font-medium   ${
                 selectedTab === "Description" ? "border-b-4 border-black" : ""
               }`}
              value="Description"
              onClick={() => setSelectedTab("Description")}
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              className={`text-[20px] span  text-[#666]   
               pb-[12px] px-[12px]   min-h-[38px] hover:border-b-4 hover:border-black font-medium   ${
                 selectedTab === "Product Details"
                   ? "border-b-4 border-black"
                   : ""
               }`}
              value="Product Details"
              onClick={() => setSelectedTab("Product Details")}
            >
              Product Details
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="Description">
          <div className="mt-[30px]">
            <p className="text-[18px] xl:text-left font-normal mb-[10px] text-[#666]">
              The best is yet to come! Give your walls a voice with a framed
              poster. This aesthethic, optimistic poster will look great in your
              desk or in an open-space office. Painted wooden frame with
              passe-partout for more depth. We denounce with righteous
              indignation and dislike men who are so beguiled and demoralized by
              the charms of pleasure of the moment, so blinded by desire that
              they cannot forese deleniti atque corrupti quos dolores et quas
              molestias excepturi.
            </p>
            <h2 className="text-[18px] font-medium mb-[10px]">
              Lorem Ipsum is not simply random text
            </h2>
            <div>
              <p className="text-[18px] font-normal mb-[10px] text-[#666]">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <p className="text-[18px] font-normal mb-[10px] text-[#666]">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="flex-col px-[5px] ">
              <List listitem="Bomber jacket" />
              <List listitem="Black colourway" />
              <List listitem="Ribbed high neckline Knit waistband cuffs and collar" />
              <List listitem="Zipper closure with a storm flap" />
              <List listitem="Zipper closure with a storm flap" />
              <List listitem="Signature zippered utility-pencil pocket on the sleeve with the Remove Before Flight ribbon keychain" />
              <List listitem="Two snap closure hand pockets" />
              <List listitem="Fill: 100% polyester" />
              <List listitem="Style guide Pair with a crew neck, jeans and sneakers." />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Product Details">
          <div className="pt-[30px]">
            <Image
              src="/images/kenzo.jpg"
              alt="brand"
              width={150}
              height={30}
              className="border p-[10px]"
            />
            <div className="mt-[8px] flex-col">
              <h3 className="mb-[7px] text-[18px] font-normal leading-[26px] tracking-[0.5px]">
                Reference: Product2
              </h3>
              <h3 className=" text-[18px] font-normal  leading-[26px] tracking-[0.5px] ">
                Available In Stock:
                <span className="text-[18px] font-medium leading-[26px] tracking-[0.5px]  text-[#4CBB6C]">
                  82 Items
                </span>
              </h3>
            </div>
          </div>
          <div>
            <Table />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Tabscompo;
