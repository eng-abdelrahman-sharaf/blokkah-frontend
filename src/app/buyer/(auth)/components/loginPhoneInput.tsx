"use client"
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, parsePhoneNumber } from 'react-phone-number-input'
import { useState } from 'react'
import flags from 'react-phone-number-input/flags'
import { set } from 'mongoose'
import { cn } from '@/lib/utils'

export default function LoginPhoneInput({className}:{className?:string}) {
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
    <PhoneInput
      defaultCountry = {country as any}
      placeholder="Enter phone number"
      value={value}
      onChange={onChange}
      flags={flags}
      className={cn("bg-white p-2 rounded-lg w-full" , className)}
      />
  )
}