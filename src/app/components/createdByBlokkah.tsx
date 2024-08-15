import { Logo } from "@/components/icons";
import { fontSizesAliases } from "../lib/utils";

const CreatedByBlokkah = () => (
        <div className="flex border bg-Gray-50 border-Gray-300 px-6 py-3 rounded-full w-fit gap-2">
            <span className={`${fontSizesAliases["text-sm"]} font-semibold`}>Created by</span>
            <Logo className="h-7"/>
        </div>
)

export default CreatedByBlokkah;