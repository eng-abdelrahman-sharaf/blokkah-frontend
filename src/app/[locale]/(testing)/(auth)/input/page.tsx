import { Eye, Lock } from "@/components/icons";
import Input from "@/components/UI/Input";



export default function Home() {
  return (
    <div className="w-[80%]">
          <Input label="label" inputType="password" startComponent={<Lock />} placeholder="••••••••" endComponent={<Eye />} />
      
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
