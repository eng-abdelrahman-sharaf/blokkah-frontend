import { Eye, Lock } from "@/components/icons";
import Input from "@/components/UI/Input";



export default function Home() {
  return (
    <>
          <Input label="label" inputType="password" startComponent={<Lock />} placeholder="••••••••" endComponent={<Eye />} />
      
    </>
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
