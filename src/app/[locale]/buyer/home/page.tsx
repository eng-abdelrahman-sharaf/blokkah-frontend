// "use client"

import Header from "./components/header";
import CustomCarousel from "../components/carousel";
import propertyimage from "./assets/property.png"
import propertyMapimage from "./assets/propMap.png"
import bannerImg from "./assets/banner.png"
import agencyImg from "./assets/agency.png"
import Search from "./components/Search";
import GPT from "./components/GPT";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="mt-24">
      <Header />
      <Search />
      <GPT />
      <div className="flex  flex-col gap-16 w-full px-[7.5%] items-center mt-16">
        <img
          src={bannerImg.src}
          className="w-full object-cover"
          alt="banner-image"
        />
        <CustomCarousel
          CarouselClassName="-z-50"
          carouselItemClassName="w-[32.75rem]"
          items={[
            <img src={propertyMapimage.src}></img>,
            <img src={propertyMapimage.src}></img>,
            <img src={propertyMapimage.src}></img>,
          ]}
        />
        <CustomCarousel
          CarouselClassName="-z-50"
          items={[
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
            <img src={propertyimage.src} className="w-72"></img>,
          ]}
        />
        <CustomCarousel
          CarouselClassName="-z-50"
          items={[
            <img src={agencyImg.src} className="h-32"></img>,
            <img src={agencyImg.src} className="h-32"></img>,
            <img src={agencyImg.src} className="h-32"></img>,
            <img src={agencyImg.src} className="h-32"></img>,
            <img src={agencyImg.src} className="h-32"></img>,
            <img src={agencyImg.src} className="h-32"></img>,
            <img src={agencyImg.src} className="h-32"></img>,
            <img src={agencyImg.src} className="h-32"></img>,
            <img src={agencyImg.src} className="h-32"></img>,
            <img src={agencyImg.src} className="h-32"></img>,
          ]}
        />
      </div>
    </div>
  );
}
