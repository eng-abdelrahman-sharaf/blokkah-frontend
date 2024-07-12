import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
} 

export const fontSizesAliases = {
    "display-2xl": "text-20xl",
    "display-xl": "text-18xl",
    "display-lg": "text-16xl",
    "display-md": "text-14xl",
    "display-sm": "text-12xl",
    "display-xs": "text-10xl",
    "text-xl": "text-5xl",
    "text-lg": "text-4xl",
    "text-md": "text-3xl",
    "text-sm": "text-2xl",
    "text-xs": "text-xl",
  };
  