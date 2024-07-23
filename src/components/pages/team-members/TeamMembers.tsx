'use client'

import React from 'react';

import { useModal } from '@/context/ModalContext';

import { Plus } from '@/components/icons';

import DashboardPagesHeader from '@/components/layout/DashboardPagesHeader';

import NewMemberModal from '@/components/modals/NewMemberModal';

import MembersManagementTable from './MembersManagementTable';

const TeamMembers = () => {
    const { openModal } = useModal();

    const handleAddBanner = () => {
        openModal(
            <NewMemberModal />
        );
    };

    return (
        <div className='dashboard-pages-wrapper'>
            <DashboardPagesHeader
                title='Team Members'
                description='Mange your team members.'
                customIconComponent={<Plus />}
                buttonText="New Member"
                onClick={handleAddBanner}
            />
            <MembersManagementTable />
        </div>)
}

export default TeamMembers;