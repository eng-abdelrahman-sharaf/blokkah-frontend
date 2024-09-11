"use client"
import { fontSizesAliases } from '@/lib/utils';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function App() {
  const [otp, setOtp] = useState('');
  return (
    <>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        placeholder='0000'
        inputStyle={`rounded-lg  !w-full h-16 ${fontSizesAliases['display-lg']} font-medium`}
        containerStyle={"w-[29.25rem] gap-1.5"}
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

