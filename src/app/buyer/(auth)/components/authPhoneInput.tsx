"use client"
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, parsePhoneNumber } from 'react-phone-number-input'
import { useState } from 'react'
import flags from 'react-phone-number-input/flags'
import { cn } from '@/lib/utils'
import styles from "./styles.module.css"

export default function AuthPhoneInput({className}:{className?:string}) {
  const [value, setValue] = useState("")
  const [country, setCountry] = useState("SA")
  const onChange = (newValue:any) => {
    if(!newValue) {
        setValue("")
        return
    }
    setValue(newValue)
    const newCountry = parsePhoneNumber(newValue)?.country;
    if(newCountry) setCountry(newCountry)
    
  }
  
  return (
    <div className='flex flex-col items-start gap-1.5 w-full'>
      <div className='text-Gray-700 text-xl font-medium ml-1'>
        Phone Number
      </div>
      <PhoneInput
        defaultCountry = {country as any}
        placeholder="Enter phone number"
        value={value}
        onChange={onChange}
        flags={flags}
        international
        className={cn(`bg-white p-2 rounded-lg w-full text-lg font-medium border border-Gray-300 shadow-xs h-[3.125rem] ${styles["authPhoneInput"]}` , className)}
        />
      </div>
  )
}