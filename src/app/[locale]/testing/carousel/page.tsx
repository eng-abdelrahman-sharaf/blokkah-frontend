import CustomCarousel from "@/app/[locale]/(user-flow)/components/carousel";
import DetailedProperty from "./detailed-property/page";

export default function Home() {
  const items = Array.from({ length: 10 }).map((_) => {
    return <DetailedProperty />
  })
  return (
    <CustomCarousel
      items={items}
    itemBorderRadiusClassName="rounded-lg"/>
  );
}