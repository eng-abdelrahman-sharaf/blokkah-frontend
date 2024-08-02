'use client'

import React from 'react';

import { useModal } from '@/context/ModalContext';

import usePagination from '@/hooks/usePagination';

import { Plus } from '@/components/icons';

import DashboardPagesHeader from '@/components/layout/DashboardPagesHeader';

import Pagination from '@/components/Pagination';

import NewMemberModal from '@/components/modals/NewMemberModal';

import MembersManagementTable from '@/components/pages/team-members/MembersManagementTable';

interface User {
    id: number;
    name: string;
    email: string;
    roles: string[];
    active: boolean;
    creationDate: string;
}

const mockUserData: User[] = [
    { id: 1, name: 'User One', email: 'ahmedali@works.com', roles: ['Admin'], active: true, creationDate: '2023-08-01T08:00:00Z' },
    { id: 2, name: 'User Two', email: 'ahmedali@works.com', roles: ['Owner', 'Admin'], active: false, creationDate: '2023-08-02T14:00:00Z' },
    { id: 3, name: 'User Three', email: 'ahmedali@works.com', roles: ['Owner', 'Admin'], active: true, creationDate: '2023-08-03T08:00:00Z' },
    { id: 4, name: 'User Four', email: 'ahmedali@works.com', roles: ['Admin', 'Visitor', 'Viewer', 'Admin'], active: false, creationDate: '2023-08-04T23:35:00Z' },
    { id: 5, name: 'User Five', email: 'ahmedali@works.com', roles: ['Owner', 'Visitor', 'Viewer', 'Admin', 'Owner', 'Visitor', 'Viewer', 'Admin'], active: true, creationDate: '2023-08-05T08:00:00Z' },
];

const TeamMembers = () => {
    const rowsPerPage = 3

    const { openModal } = useModal();

    const handleAddMember = () => {
        openModal(
            <NewMemberModal />
        );
    };

    const {
        currentPage,
        paginatedData,
        handlePageChange,

    } = usePagination({ totalItems: mockUserData.length, rowsPerPage });

    const paginatedUsers = paginatedData(mockUserData);

    return (
        <div className='dashboard-pages-wrapper'>
            <DashboardPagesHeader
                title='Team Members'
                description='Mange your team members.'
                customIconComponent={<Plus />}
                buttonText="New Member"
                onClick={handleAddMember}
            />
            <div className='table-pagination-wrapper'>
                <MembersManagementTable usersData={paginatedUsers} />
                <Pagination
                    totalItems={mockUserData.length}
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default TeamMembers;