"use client"
import { DropDownBody } from "../../../components/dropDown";
import { useState } from "react";
import Link from "next/link";

const NavLinks = () => (
    <div className="absolute top-full bg-red-500 flex flex-col">
      <Link href={"/home"}>Home</Link>
      <Link href={"/home"}>Home</Link>
      <Link href={"/home"}>Home</Link>
    </div>
  );
  

const ExploreDropDown = () => {
    return (
      <DropDownBody
        isOpenState={useState(false)}
        dropDownText="Explore"
        buttonProps={{ variant: "linkGray", size: "2xl"}}
        AbsoluteMenu={<NavLinks />}
      />
    );
  };
export default ExploreDropDown;