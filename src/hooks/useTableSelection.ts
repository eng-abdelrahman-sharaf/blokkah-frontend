import { useState, useCallback } from 'react';

interface TableSelectionProps {
    items: any[];
    rowsPerPage: number;
    currentPage: number;
}

const useTableSelection = ({ items, rowsPerPage, currentPage }: TableSelectionProps) => {
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const handleMasterCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedItems(items.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    }, [items, currentPage, rowsPerPage]);

    const handleCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, itemId: number) => {
        if (e.target.checked) {
            setSelectedItems(prevSelectedItems => [...prevSelectedItems, itemId]);
        } else {
            setSelectedItems(prevSelectedItems => prevSelectedItems.filter(id => id !== itemId));
        }
    }, []);

    return {
        selectedItems,
        handleMasterCheckboxChange,
        handleCheckboxChange,
    };
};

export default useTableSelection;