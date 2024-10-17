import React from "react";
import Image from "next/image";
import mapCard from "../../assets/mapCard.png";

export default function Cards() {
    return (
        <>
            <div className="w-full flex flex-wrap gap-6 justify-stretch items-stretch">
            {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(600px,_1fr))] w-full gap-3"> */}
            {/* Card */}
            <div className="flex justify-between items-center bg-Secondary-100 rounded-lg overflow-hidden p-12 grow">
                {/* TextConTainer
                // TODO - Delete teh card height */}
                <div className="flex flex-col gap-2 max-w-64">
                <div className="text-Gray-700 font-bold text-3xl">
                    {"Property map"}
                </div>
                <div className="text-Gray-600 font-regular text-2xl">
                    {"Find all properties near you in a  simple map-like view."}
                </div>
                </div>
                {/* Image  */}
                <div>
                {/* w-full to make the image shrink */}
                <Image
                    src={mapCard}
                    alt="card-image"
                    width={186}
                    height={186}
                    className="w-full max-w-44"
                    />
                </div>
            </div>
            {/* Card */}
            <div className="flex justify-between items-center bg-Secondary-100 rounded-lg overflow-hidden p-12 grow">
                {/* TextConTainer
                // TODO - Delete teh card height */}
                <div className="flex flex-col gap-2 max-w-64">
                <div className="text-Gray-700 font-bold text-3xl">
                    {"Property map"}
                </div>
                <div className="text-Gray-600 font-regular text-2xl">
                    {"Find all properties near you in a  simple map-like view."}
                </div>
                </div>
                {/* Image  */}
                <div>
                {/* w-full to make the image shrink */}
                <Image
                    src={mapCard}
                    alt="card-image"
                    width={186}
                    height={186}
                    className="w-full max-w-44"
                    />
                </div>
            </div>

            {/* Card */}
            <div className="flex justify-between items-center bg-Secondary-100 rounded-lg overflow-hidden p-12 grow">
                {/* TextConTainer
                // TODO - Delete teh card height */}
                <div className="flex flex-col gap-2 max-w-64">
                <div className="text-Gray-700 font-bold text-3xl">
                    {"Property map"}
                </div>
                <div className="text-Gray-600 font-regular text-2xl">
                    {"Find all properties near you in a  simple map-like view."}
                </div>
                </div>
                {/* Image  */}
                <div>
                {/* w-full to make the image shrink */}
                <Image
                    src={mapCard}
                    alt="card-image"
                    width={186}
                    height={186}
                    className="w-full max-w-44"
                    />
                </div>
            </div>
            </div>
        </>
    )
}