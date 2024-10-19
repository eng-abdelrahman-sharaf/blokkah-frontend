import Background from "@/app/[locale]/components/background"
import FindUrNextHome from "./findYourNextHome"
import { cn } from "@/lib/utils"
import buildingImage from "@/app/[locale]/assets/building.png";


const BuildingBG = ({className}:{className?:string}) => {
    return (
        <div className={cn("hidden xl:block w-1/2 h-full" , className)}>
            <Background imageSrc={buildingImage.src} className="h-full flex justify-center items-center">
                <FindUrNextHome />
            </Background>
        </div>
    )
}

export default BuildingBG