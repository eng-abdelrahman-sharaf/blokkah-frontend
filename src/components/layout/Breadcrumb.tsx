'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Home from '../icons/Home';
import Chevron from '../icons/Chevron';
import Link from 'next/link';

const Breadcrumb: React.FC = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 640px)');
        setIsMobile(mediaQuery.matches);

        const handleResize = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener('change', handleResize);
        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    const transformSegment = (segment: string): string => {
        return segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const shouldTruncate = pathSegments.length > 2 || isMobile;

    const visibleSegments = isMobile
        ? ['...', pathSegments[pathSegments.length - 1]]
        : shouldTruncate
            ? [pathSegments[0], '...', pathSegments[pathSegments.length - 1]]
            : pathSegments;

    return (
        <nav aria-label="breadcrumb" className="py-1 px-2 rounded-[40px] bg-gray-50 w-fit">
            <ol className="flex items-center gap-2 list-none">
                <li>
                    <Link href="/" className="flex items-center p-1">
                        <Home width={20} height={20} />
                    </Link>
                </li>
                {visibleSegments.map((segment, index) => {
                    const href = '/' + pathSegments.slice(0, index + 1).join('/');
                    return (
                        <li key={index} className="flex items-center gap-2">
                            {index !== 0 && <span className="-rotate-90 w-[16px] h-[16px]"><Chevron /></span>}
                            {segment === '...' ? (
                                <span className="text-gray-600 text-sm font-regular px-2 py-1 select-none">...</span>
                            ) : (
                                <Link href={href} className="text-gray-600 text-sm font-regular px-2 py-1">
                                    {transformSegment(segment)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;