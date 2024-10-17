import CustomCarousel from "../../../components/carousel";
import agencyImg from "../../assets/agency.png";

export default function TrustedAgencies() {
  const className = "pl-24"
  return (
    <div className="flex flex-col gap-6 items-start">
      <div className="font-bold text-3xl text-Gray-900">Our trusted Agencies</div>
      <CustomCarousel
        carouselItemClassName="pl-24"
        carouselContentClassName="-ml-24"
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
  );
}
