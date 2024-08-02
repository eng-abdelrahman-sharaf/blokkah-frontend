'use client';

import React, { useState, useRef, useEffect, FC, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Chevron, XClose, CheckCircle } from './icons';

interface RoleSelectorProps {
    selectList: string[];
    label?: string;
}

const RoleSelector: FC<RoleSelectorProps> = ({ selectList, label }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setDropdownVisible(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    const handleSelect = useCallback((item: string) => {
        setSelectedValues((prevSelectedValues) => {
            if (prevSelectedValues.includes(item)) {
                return prevSelectedValues.filter(value => value !== item);
            }
            return [...prevSelectedValues, item];
        });
    }, []);

    const handleRemove = useCallback((item: string, event: React.MouseEvent) => {
        event.stopPropagation();
        setSelectedValues((prevSelectedValues) => prevSelectedValues.filter(value => value !== item));
    }, []);

    const handleInputFocus = useCallback(() => {
        inputRef.current?.focus();
        setDropdownVisible(true);
    }, []);

    return (
        <div className='relative cursor-pointer flex flex-col items-start w-full'>
            {label && <label
                htmlFor="role-selector"
                className="text-Gray-700 text-sm font-medium mb-[6px]"
            >
                {label}
            </label>
            }
            <div ref={containerRef} className="relative w-full">
                <div
                    className={cn(
                        "py-3 px-[14px] flex items-center justify-between w-full border border-gray-300 rounded-lg transition-shadow",
                        { 'shadow-activeElementBoxShadow border-Brand-300': isDropdownVisible }
                    )}
                    onClick={handleInputFocus}
                >
                    <div className='flex items-center flex-wrap gap-2'>
                        {selectedValues.map((item, index) => (
                            <div key={index} className="flex items-center gap-1 bg-Gray-100 px-2 py-[2px] rounded-2xl">
                                <span className="text-Gray-700 text-xs font-medium">{item}</span>
                                <div
                                    onClick={(event) => handleRemove(item, event)}
                                    className="cursor-pointer"
                                >
                                    <XClose stroke='#667085' width={8} height={8} />
                                </div>
                            </div>
                        ))}
                        <input
                            id="role-selector"
                            ref={inputRef}
                            name="role-selector"
                            value={selectedValues.join(', ')}
                            placeholder={selectedValues.length === 0 ? "Member Roles" : ""}
                            className={cn(
                                "flex-grow outline-none cursor-pointer placeholder:text-Gray-500 placeholder:text-md",
                                { 'sr-only': selectedValues.length !== 0 }
                            )}
                            readOnly
                        />
                    </div>
                    <div className={`transition-transform ${isDropdownVisible ? 'rotate-180' : ''}`}>
                        <Chevron />
                    </div>
                </div>
                {isDropdownVisible && selectList.length > 0 && (
                    <ul className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                        {selectList.map((item, index) => (
                            <li
                                key={index}
                                className="py-2 px-3 flex justify-between items-center text-sm text-Gray-700 hover:bg-Gray-100 cursor-pointer"
                                onClick={() => handleSelect(item)}
                            >
                                <span>{item}</span>
                                {selectedValues.includes(item) && <CheckCircle width={16} height={16} />}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default React.memo(RoleSelector);