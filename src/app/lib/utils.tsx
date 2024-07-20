import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const fontSizesAliases = {
    "display-2xl": "text-7xl",
    "display-xl": "text-6xl",
    "display-lg": "text-5xl",
    "display-md": "text-4xl",
    "display-sm": "text-3xl",
    "display-xs": "text-2xl",
};
