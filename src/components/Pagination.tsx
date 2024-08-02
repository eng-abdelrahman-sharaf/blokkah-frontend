import React from 'react';
import { Button } from './UI/Button';
import { Arrow } from './icons';
import { cn } from '@/lib/utils';

interface PaginationComponentProps {
    totalItems: number;
    rowsPerPage: number;
    currentPage: number;
    onPageChange: (newPage: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ totalItems, rowsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / rowsPerPage);

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const leftPages = 3;
        const rightPages = 3;

        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            for (let i = 1; i <= leftPages; i++) {
                pages.push(i);
            }

            if (currentPage > leftPages + 1) {
                pages.push('...');
            }

            const startPage = Math.max(currentPage - 1, leftPages + 1);
            const endPage = Math.min(currentPage + 1, totalPages - rightPages);

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - rightPages - 1) {
                pages.push('...');
            }

            for (let i = totalPages - rightPages + 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className='flex items-center justify-between gap-2 w-full px-6 py-3'>
            <Button
                variant='secondaryGray'
                icon='leading'
                customIconComponent={
                    <Arrow stroke={currentPage === 1 ? '#d0d5dd' : undefined} />
                }
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className='w-fit [&>span]:hidden lg:[&>span]:block'
            >
                Previous
            </Button>
            <div className="flex items-center gap-[0.125rem]">
                {pageNumbers.map((page, index) => (
                    <React.Fragment key={index}>
                        {typeof page === 'number' ? (
                            <Button
                                onClick={() => onPageChange(page)}
                                className={cn(
                                    'bg-white text-sm font-medium text-Gray-500 rounded-lg hover:bg-white active:bg-white border-white w-10 h-10 m-0',
                                    { 'text-Brand-600 bg-Brand-50 hover:bg-Brand-50 active:bg-Brand-50 border-Brand-50': currentPage === page }
                                )}
                            >
                                {page}
                            </Button>
                        ) : (
                            <span className="text-Gray-500">...</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <Button
                variant='secondaryGray'
                icon='trailing'
                customIconComponent={
                    <div className='rotate-180'>
                        <Arrow stroke={currentPage === totalPages ? '#d0d5dd' : undefined} />
                    </div>
                }
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className='w-fit [&>span]:hidden lg:[&>span]:block'
            >
                Next
            </Button>
        </div>
    );
};

export default React.memo(PaginationComponent);