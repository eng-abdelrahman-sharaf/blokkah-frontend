import Image from "next/image";
import CustomCarousel from "../../../components/carousel";
import propertyimage from "../../assets/property.jpg";
import LocationIcon from "../../assets/locationIcon";
import React from "react";
import { icons } from "lucide-react";
import BedsIcon from "../../assets/bedsIcon";
import BathsIcons from "../../assets/bathsIcon";
import BathsIcon from "../../assets/bathsIcon";
import LivingIcon from "../../assets/livingIcon";
import MeterSquare from "../../assets/meterSquare";
import CompanyLogo from "../../assets/agency.png"

const BedsBathsLiving = ({ beds, baths, living }: { beds: number, baths: number, living: number }) => { 
  const data = [
    { value: beds , icon: <BedsIcon className="w-10 h-10"></BedsIcon> },
    { value: baths, icon: <BathsIcon className="w-10 h-10"></BathsIcon> },
    { value: living, icon: <LivingIcon className="w-10 h-10"></LivingIcon> },
  ]
  return (
    <>
      {data.map((item, index) => (
      <div key={index} className="bg-Gray-100 flex px-0.5 py-1 gap-1 rounded-[0.25rem] items-center">
          <div>{item.value}</div>
          {item.icon}
        </div>
      ))}
    </>
  )
}

const Property = ({name , propertySrc , location , beds , living , baths , cost  , installment , area , companyLogoSrc}:{name:string , location:string , area:number , beds:number , baths:number , living:number, cost:string , installment?:string , companyLogoSrc:string , propertySrc:string}) => { 
  return (
    <>
      <div className="flex flex-col border border-Gray-200 rounded-lg overflow-hidden">
        {/* <div className="bg-red-400 min-h-40"></div> */}
        <Image src={propertySrc} alt={name} className="max-h-40 w-full object-cover" width={5080} height={2020} />
        <div className="flex p-6 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="text-Gray-900 text-2xl font-semibold">{name}</div>
              <div className="flex gap-1 items-center"><LocationIcon className="w-5 h-5"/><div className="text-Gray-500 text-lg font-regular">{location}</div></div>
            </div>
            <div className="flex gap-2 text-lg font-regular text-Gray-500 items-center">
              <BedsBathsLiving beds={beds} baths={baths} living={living} />
              <div className="h-3 bg-Gray-500 w-[1px]"></div>
              <div className="flex gap-1">
                <div className="text-lg font-regular text-Gray-500">{area}</div>
                <MeterSquare className="w-7 h-7"></MeterSquare>
              </div>
            </div>
            <div className="min-h-[3.25rem] flex flex-col justify-center">              
              <div className="flex flex-col pl-2 text-Secondary-900 relative justify-center">
                <div className="absolute h-full bg-Gray-300 w-[1px] top-0 left-0"></div>
                <div className="text-2xl font-bold ">{cost}</div>
                <div className={"text-sm font-regular"}>{installment}</div>
              </div>
            </div>
          </div>
          
          {/* company logo, save button and map  */}
          <div>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default function FeaturedProperties() {
  const className = "basis-full w-96 -ml-2 *:w-full"
  return (
      <div className="flex flex-col gap-6 items-start">
        <div className="font-bold text-3xl text-Gray-900">Featured Properties</div>
      <CustomCarousel
        CarouselClassName=""
        carouselItemClassName="basis-full max-w-[380px]" 
        // max-w-96"
        // sm:basis-1/2 md:basis-1/3"
        items={[
          <Property cost={"3,250,700 EGP"} installment="" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
          <Property cost={"3,250,700 EGP"} installment="( 250,000 Monthly / 10 Years )" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
          <Property cost={"3,250,700 EGP"} installment="( 250,000 Monthly / 10 Years )" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
          <Property cost={"3,250,700 EGP"} installment="( 250,000 Monthly / 10 Years )" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
          <Property cost={"3,250,700 EGP"} installment="( 250,000 Monthly / 10 Years )" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
          <Property cost={"3,250,700 EGP"} installment="( 250,000 Monthly / 10 Years )" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
          <Property cost={"3,250,700 EGP"} installment="( 250,000 Monthly / 10 Years )" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
          <Property cost={"3,250,700 EGP"} installment="( 250,000 Monthly / 10 Years )" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
          <Property cost={"3,250,700 EGP"} installment="( 250,000 Monthly / 10 Years )" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
          <Property cost={"3,250,700 EGP"} installment="( 250,000 Monthly / 10 Years )" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
          <Property cost={"3,250,700 EGP"} installment="( 250,000 Monthly / 10 Years )" area={120} name="Mountin View City" location="6th of October City, Egypt" baths={1} beds={1} living={1} propertySrc={propertyimage.src} companyLogoSrc={CompanyLogo.src} />,
        ]}
        />
      </div>
    )
}