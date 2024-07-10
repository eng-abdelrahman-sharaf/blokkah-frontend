'use client';

import React, { ChangeEvent, ReactNode, useState } from 'react';
import Mail from '../icons/Mail';

enum InputType {
    'text',
    'email',
    'password',
    'number'
}

interface Input {
    id: string;
    label?: string;
    type: InputType;
    placeholder?: string;
    disabled?: boolean;
    Error?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

const Input = () => {
    // const [inputValue, setInputValue] = useState<string | null>(null);

    // const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setInputValue(event.target.value);
    // };

    return (
        <div className="flex flex-col items-start w-full">
            <label
                htmlFor={'id'}
                className="text-Gray-700 text-sm font-medium leading-5 mb-[6px]"
            >
                Label Text
            </label>
            <div className="relative w-full bg-white">
                <div className="absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-400 z-10">
                    <Mail />
                </div>
                <input
                    type={"email"}
                    id={"id"}
                    className={`w-full relative py-3 pl-[42px] pr-[14px] shadow-inputBoxShadow border border-Gray-300 focus:border-Brand-300 rounded-lg focus:outline-none transition-colors focus:shadow-inputFocusedBoxShadow`}
                    placeholder="admin@blokka.io"
                // value={inputValue as string}
                // onChange={handleInputValueChange}
                />
            </div>
        </div>
    );
};

export default Input;