import Header from "./components/header";
import CustomCarousel from "../components/carousel";
import propertyimage from "./assets/property.png"
import propertyMapimage from "./assets/propMap.png"
import bannerImg from "./assets/banner.png"
import agencyImg from "./assets/agency.png"

export default function Home() { 
    return (
        <div className="mt-24">
            <Header />
            <div className="flex  flex-col gap-16 w-full px-[7.5%] items-center">
            <CustomCarousel carouselItemClassName="w-[32.75rem]" items={
                [
                    <img src={propertyMapimage.src}></img>,
                    <img src={propertyMapimage.src}></img>,
                    <img src={propertyMapimage.src}></img>,
                ]
            }
            />
            <img src={bannerImg.src} className="w-full object-cover" alt="banner-image" />
            <CustomCarousel items={
                [
                    <img src={propertyimage.src}></img>,
                    <img src={propertyimage.src}></img>,
                    <img src={propertyimage.src}></img>,
                    <img src={propertyimage.src}></img>,
                    <img src={propertyimage.src}></img>,
                    <img src={propertyimage.src}></img>,
                    <img src={propertyimage.src}></img>,
                    <img src={propertyimage.src}></img>,
                    <img src={propertyimage.src}></img>,
                    <img src={propertyimage.src}></img>,
                ]
            }
            />
            <CustomCarousel items={
                [
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
                ]
            }
            />

            </div>
        </div>
    );
}