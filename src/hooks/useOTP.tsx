import { useState, useRef, useEffect } from 'react';

const useOTP = (length: number) => {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>, index: number) => {
        // Check if the value is a number or an empty string
        if (isNaN(Number(value)) && value !== "") {
            return;
        }

        const newOTP = [...otp];
        newOTP[index] = value.slice(-1);

        setOtp(prev => newOTP);

        if (value) {
            let nextIndex = index + 1;
            while (nextIndex < otp.length && inputRefs.current[nextIndex]?.disabled) {
                nextIndex++;
            }
            setActiveOTPIndex(prev => Math.min(nextIndex, otp.length - 1));
        }
    };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index]) {
            let prevIndex = index - 1;
            while (prevIndex >= 0 && inputRefs.current[prevIndex]?.disabled) {
                prevIndex--;
            }
            setActiveOTPIndex(Math.max(prevIndex, 0));
        }
    };

    useEffect(() => {
        inputRefs.current[activeOTPIndex]?.focus();
    }, [activeOTPIndex]);

    return {
        otp,
        inputRefs,
        handleOnChange,
        handleOnKeyDown,
    };
};

export default useOTP;