"use client";
import DealofDay from "@/components/DealofDay";
import Fourcategories from "@/components/Fourcategories";
import Gridproducts from "@/components/Gridproducts";
import Homebanner from "@/components/Homebanner";

import LatestBlogs from "@/components/LatestBlog";

import Marquecontent from "@/components/Marquecontent";
import Ouproducts from "@/components/Ouproducts";
import PinkBanner from "@/components/PinkBanner";
import ShippingDescription from "@/components/ShippingDescription";
import Testimonials from "@/components/Testimonials";
import Tshirtspec from "@/components/Tshirtspec";
import BrandCarousal from "@/components/brandcarousal";
import React from "react";

const page = () => {
  return (
    <>
      <Homebanner />
      <ShippingDescription />
      <Fourcategories />
      <Ouproducts />
      <Gridproducts />
      <PinkBanner />

      <Marquecontent />
      <DealofDay />

      <BrandCarousal />
      <Tshirtspec />
      <Testimonials />
      <LatestBlogs />
    </>
  );
};

export default page;
