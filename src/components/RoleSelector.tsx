'use client';

import React, { useState, useRef, useEffect, FC } from 'react';
import Input from './UI/Input';
import { Chevron } from './icons';

interface RoleSelectorProps {
    selectList: string[];
    label?: string;
}

const RoleSelector: FC<RoleSelectorProps> = ({ selectList, label }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (item: string) => {
        setSelectedValue(item);
        setDropdownVisible(false);
    };

    return (
        <div ref={containerRef} className='w-full relative'>
            {label && <label htmlFor="role-selector" className="block mb-1">{label}</label>}
            <Input
                ref={inputRef}
                id="role-selector"
                name="role-selector"
                placeholder="Role"
                value={selectedValue}
                onFocus={() => setDropdownVisible(true)}
                readOnly
                endComponent={
                    <div className={`transition-transform ${isDropdownVisible ? 'rotate-180' : ''}`}>
                        <Chevron />
                    </div>
                }
            />
            {isDropdownVisible && selectList.length > 0 && (
                <ul className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 h-40 overflow-y-auto">
                    {selectList.map((item, index) => (
                        <li
                            key={index}
                            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RoleSelector;