import ArrowHead from "@/app/assets/arrowHead";
import { fontSizesAliases } from "@/app/lib/utils";

const AuthCardHeader = ({ ContainsArrow = false, title, subtitle }: { ContainsArrow?: boolean, title: string, subtitle: string }) => {
    return (
        <div className="relative gap-2 flex flex-col items-center w-full">
            {ContainsArrow && <ArrowHead className="absolute top-0 left-0 w-10" />}
            <h1 className={`${fontSizesAliases["display-sm"]} font-bold`}>{title}</h1>
            <h2 className={`${fontSizesAliases["text-lg"]} font-regular`}>{subtitle}</h2>
        </div>
    )
}

export default AuthCardHeader;