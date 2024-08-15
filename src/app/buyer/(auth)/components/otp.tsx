"use client"

import { cn, fontSizesAliases } from '@/lib/utils';
import { useState } from 'react';
import OtpInput ,{OTPInputProps} from 'react-otp-input';


export default function OTP() {
  const [otp, setOtp] = useState('');
  return (
    <>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        placeholder='0000'
        inputStyle={cn(`rounded-lg  !w-full h-16 text-5xl font-medium`)}
        containerStyle={"w-full gap-1.5"}
        renderSeparator={undefined}
        shouldAutoFocus={true}
        renderInput={(props) => {
            props.type = 'number';
            return <input {...props} />
        }
        }
      />
    </>
  );
}

