import Logo from "@/app/assets/logo";
import { cn, fontSizesAliases } from "@/lib/utils";
import clsx from "clsx";

export default function FindUrNextHome({className}:{ className?: string}) {
    return (
        <div className="w-[20.75rem] flex-col flex items-center gap-2.5 py-10 px-7 bg-white/40 rounded-[2rem] backdrop-blur-sm">
            <Logo className="w-full" />
            <div className={cn(`text-xl  font-medium text-Brand-600`)}>Find your next home easily</div>
        </div>
    )
}