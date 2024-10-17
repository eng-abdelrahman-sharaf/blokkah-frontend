import Image from "next/image";
import mobileAppImage from "../../assets/mobileApp.png";
import GooglePlaybadge from "../../assets/googlePlaybadge";
import AppStorebadge from "../../assets/appStorebadge";

export default function MobileSection() {
    return (
        <div className="flex justify-center bg-Gray-200 items-center mt-[3.75rem] border-Gray-400 border-b-1">
          {/* this div is used to make the image shrink */}
          <div>
            <Image src={mobileAppImage} alt="map" className="max-w-[40rem] w-full" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="font-semibold text-5xl text-Gray-900">
                Finding Properties never been easier.
              </div>
              <div className="text-Gray-500 text-xl font-regular">
                Download our app and Find one now.
              </div>
            </div>
            <div className="flex gap-3">
              <GooglePlaybadge className="h-11 w-auto"/>
              <AppStorebadge className="h-11 w-auto"/>
            </div>
          </div>
        </div>
    )
}