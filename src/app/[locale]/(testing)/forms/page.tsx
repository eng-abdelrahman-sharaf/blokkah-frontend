"use client"

import { MailIcon } from "lucide-react";
import Input from "../../components/input";
import { DropDownBody } from "../../(user-flow)/components/dropDown";
import { useState } from "react";

const CountriesMenu = () => { 
    return (
        <div className="flex flex-col items-center px-10 rounded-lg absolute top-full left-0 bg-slate-500 translate-y-4 -translate-x-3.5">
            <div>us</div>
            <div>as</div>
            <div>es</div>
        </div>
    )
}

export default function () {
    const errorMessage = "This is an error message."
    const placeholder = "olivia@untitledui.com"
    const label = "Email"
    const [isCountriesOpen, setIsCountriesOpen] = useState(false)
    return (
        <div className="flex flex-col items-center w-full px-10">
            <Input inputType="text" label={label} placeholder={placeholder}/>
            <Input inputType="text" label={label} placeholder={placeholder} errorMessage={errorMessage} error={true} />
            <Input inputType="text" label={label} placeholder={placeholder} errorMessage={errorMessage} error={true} startComponent={<MailIcon className="w-5 h-5 text-Gray-500" />} />
            <Input inputType="number" label="Number" placeholder="1234567890" startComponent={<DropDownBody dropDownText="US" chevronDownClassName="text-Gray-500 w-5 h-5"   buttonProps={{size:"custom" ,className:"border-0 gap-0 text-Gray-900 text-md font-regular"}}   isOpenState={[isCountriesOpen , setIsCountriesOpen]} AbsoluteMenu={<CountriesMenu/>} />} />
        </div>
    )
}