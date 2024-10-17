"use client";
import Input from "@/components/UI/Input";
import { cn } from "@/lib/utils";
import { EyeOff, Eye, Lock } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [inputType, setInputType] = useState<"password" | "text">("password");
  return (
    <div className="w-[80%]">
      <Input
        label="label"
        inputType={inputType}
        startComponent={<Lock />}
        placeholder="••••••••"
        endComponent={
          <>
            {inputType == "password" ? (
              <Eye
                className={cn("w-6 h-6")}
                onClick={() => setInputType("text")}
              />
            ) : (
              <EyeOff className={cn("w-6 h-6")} onClick={()=>setInputType("password")}/>
            )}
          </>
        }
      />

      <Input inputType="otp" placeholder="0" />
    </div>
  );
}

// label?: string;
// startComponent?: ReactNode;
// endComponent?: ReactNode;
// hintMessage?: string;
// error?: boolean;
// placeholder?: string;
// errorMessage?: string;
// inputType?: 'text' | 'email' | 'password' | 'number' | 'otp';
