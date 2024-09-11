import { fontSizesAliases } from "@/lib/utils";
import PropertyIcon from "./prototype-icon";
import propertyImage from "./property.png"

function PropertyImage({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return <img src={src} alt="property image" className={className} />;
}

export default function DetailedProperty() {
  return (
    <>
      <div className="w-full bg-white rounded-lg relative flex flex-col gap-3">
        <div className="relative">
        <PropertyImage
          src={propertyImage.src}
          className="w-full  max-h-full  rounded-t-lg object-cover"
        />
        <PropertyIcon className="absolute left-[8%] bottom-0 translate-y-1/4 w-[14%] drop-shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1)]" />
        </div>
        <div className="flex flex-col text-start relative gap-2 p-[5%]">
          <div
            className={`text-sm font-bold text-Gray-900`}
          >
            Mountin View City
          </div>
          <div
            className={`text-xs font-regular text-Gray-900`}
          >
            6th of October City, Egypt
          </div>
        </div>
      </div>
    </>
  );
}
