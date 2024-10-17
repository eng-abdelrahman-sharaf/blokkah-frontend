// "use client";
import bannerImg from "./assets/banner.png";
import Search from "./components/searchComponents/Search";


import React from "react";
import TrustedAgencies from "./components/sections/trustedAgencies";
import FeaturedProperties from "./components/sections/featuredProperties";
import { PopularSearches } from "./components/sections/popularSearches";
import Cards from "./components/sections/cards";
import MobileSection from "./components/sections/mobileSection";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
        <Search />
        {/* <GPT /> */}

        {/* Sections Container */}
        <div className="flex  flex-col gap-14 w-full px-14 items-center mt-14 [&>*]:w-full">
          <img
            src={bannerImg.src}
            className="w-full object-cover"
            alt="banner-image"
          />

          {/* Cards */}
          <Cards />
          
          {/* Featured Properties */}
          <FeaturedProperties/>

          {/* Trusted Agencies*/}
          <TrustedAgencies />

          {/* Popular Searches */}
          <PopularSearches />

        </div>
        
        {/* Mobile Section */}
        <MobileSection />
    </>
  );
}
