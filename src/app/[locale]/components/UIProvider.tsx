"use client";

import { NextUIProvider } from "@nextui-org/system";
import { Toaster } from "react-hot-toast";


export default function UIProvider({ children } : { children: React.ReactNode }) {
    return (
      <NextUIProvider>
        {children}
        <Toaster position="bottom-right" />
      </NextUIProvider>
    )
}