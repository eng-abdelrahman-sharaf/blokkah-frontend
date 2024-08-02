import { useState, useMemo, useCallback } from 'react';

interface PaginationProps {
    totalItems: number;
    rowsPerPage: number;
}

const usePagination = ({ totalItems, rowsPerPage }: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = useMemo(() => Math.ceil(totalItems / rowsPerPage), [totalItems, rowsPerPage]);

    const handlePageChange = useCallback((newPage: number) => {
        setCurrentPage(newPage);
    }, []);

    const paginatedData = useCallback(
        (data: any[]) => {
            const startIdx = (currentPage - 1) * rowsPerPage;
            const endIdx = startIdx + rowsPerPage;
            return data.slice(startIdx, endIdx);
        },
        [currentPage, rowsPerPage]
    );

    return {
        currentPage,
        totalPages,
        handlePageChange,
        paginatedData,
    };
};

export default usePagination;