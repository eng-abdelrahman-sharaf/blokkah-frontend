import Background from "@/app/components/background"
import FindUrNextHome from "./findYourNextHome"
import { cn } from "@/app/lib/utils"
import buildingImage from "@/app/buyer/assets/building.png";


const BuildingBG = ({className}:{className?:string}) => {
    return (
        <div className={cn("w-1/2 h-full" , className)}>
        <Background imageSrc={buildingImage.src} className="h-full flex justify-center items-center">
            <FindUrNextHome />
        </Background>
    </div>
    )
}

export default BuildingBG