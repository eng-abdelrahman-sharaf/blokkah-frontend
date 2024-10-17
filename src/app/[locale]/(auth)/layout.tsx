import AuthCardContainer from "./components/authCardContainer";
import BuildingBG from "./components/buildingBG";

export default function Layout({children}:{children:React.ReactNode}) { 
    return (
        <div className="w-full h-full min-h-96 flex">
            <BuildingBG/>
            <AuthCardContainer> 
                {children}
            </AuthCardContainer>
        </div>
    )
}