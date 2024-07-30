'use client'

import React, { useState, ChangeEvent, FC } from 'react';

import { useModal } from '@/context/ModalContext';

import { Button } from '@/components/UI/Button';

import { Arrow, Check, Edit, PasscodeLock, Trash, User, XClose } from '@/components/icons';

import MemberCredentialsModal from '@/components/modals/MemberCredentialsModal';
import DeleteMemberModal from '@/components/modals/DeleteMemberModal';

import { cn } from '@/lib/utils';

import './team-management.css';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    active: boolean;
}

const mockUserData: User[] = [
    { id: 1, name: 'User One', email: 'ahmedali@works.com', role: 'Admin', active: true },
    { id: 2, name: 'User Two', email: 'ahmedali@works.com', role: 'Owner', active: false },
    { id: 3, name: 'User Three', email: 'ahmedali@works.com', role: 'Owner', active: true },
    { id: 4, name: 'User Four', email: 'ahmedali@works.com', role: 'Admin', active: false },
    { id: 5, name: 'User Five', email: 'ahmedali@works.com', role: 'Owner', active: true },
];

const MembersManagementTable: FC = () => {
    const [users, setUsers] = useState<User[]>(mockUserData);
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const rowsPerPage = 3;

    const { openModal } = useModal();

    const handleShowMemberCredentials = (memberName: string, memberEmail: string, memberPassword?: string) => {
        openModal(<MemberCredentialsModal memberName={memberName} memberEmail={memberEmail} />);
    };

    const handleDeleteMember = (username: string, id: string) => {
        openModal(<DeleteMemberModal username={username} id={id} />);
    };

    const handleMasterCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedUsers(users.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map(user => user.id));
        } else {
            setSelectedUsers([]);
        }
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, userId: number) => {
        if (e.target.checked) {
            setSelectedUsers([...selectedUsers, userId]);
        } else {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        }
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        setSelectedUsers([]);
    };

    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    const paginatedUsers = users.slice(startIdx, endIdx);

    return (
        <div className='flex flex-col items-center justify-between max-h-[21.5rem] h-full w-full'>
            <div className="w-full h-full overflow-x-auto team-management-table">
                <table className='table table-auto'>
                    <thead>
                        <tr>
                            <th className='gap-3 w-full'>
                                <input
                                    type="checkbox"
                                    onChange={handleMasterCheckboxChange}
                                    checked={selectedUsers.length === paginatedUsers.length && selectedUsers.length > 0}
                                />
                                Name
                            </th>
                            <th className='flex items-center justify-start gap-1 ] w-full'>
                                Status
                                <div className='-rotate-90'>
                                    <Arrow width={16} height={16} />
                                </div>
                            </th>
                            <th className=' w-full'>Email Address</th>
                            <th className='flex items-center justify-start gap-1 ] w-full'>
                                Role
                                <div className='-rotate-90'>
                                    <Arrow width={16} height={16} />
                                </div>
                            </th>
                            <th className='flex items-center justify-start gap-1 m] w-full'>
                                Creation Date
                                <div className='-rotate-90'>
                                    <Arrow width={16} height={16} />
                                </div>
                            </th>
                            <th className='flex-grow w-full text-transparent select-none'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.map(user => (
                            <UserRow
                                key={user.id}
                                user={user}
                                selectedUsers={selectedUsers}
                                onCheckboxChange={handleCheckboxChange}
                                onShowMemberCredentials={handleShowMemberCredentials}
                                onDeleteMember={handleDeleteMember}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                users={users}
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

interface UserRowProps {
    user: User;
    selectedUsers: number[];
    onCheckboxChange: (e: ChangeEvent<HTMLInputElement>, userId: number) => void;
    onShowMemberCredentials: (memberName: string, memberEmail: string, memberPassword?: string) => void;
    onDeleteMember: (username: string, id: string) => void;
}

const UserRow: FC<UserRowProps> = React.memo(({ user, selectedUsers, onCheckboxChange, onShowMemberCredentials, onDeleteMember }) => (
    <tr>
        <td className='flex items-center gap-3 text-sm text-Gray-900 font-medium whitespace-nowrap w-full'>
            <input
                type="checkbox"
                checked={selectedUsers.includes(user.id)}
                onChange={(e) => onCheckboxChange(e, user.id)}
            />
            <div className='rounded-full bg-Brand-50 p-2'>
                <User />
            </div>
            {user.name}
        </td>
        <td className='text-sm text-Gray-600 font-regular w-full'>
            <span className={`flex items-center gap-1 w-fit px-2 py-[0.125rem] rounded-full text-xs font-medium whitespace-nowrap ${user.active ? 'bg-Success-50 text-Success-700' : 'bg-Error-50 text-Error-700'}`}>
                {user.active ? <Check /> : <XClose stroke='#F04438' width={8} height={8} />}
                {user.active ? 'Active' : 'In Active'}
            </span>
        </td>
        <td className='text-sm text-Gray-600 font-regular w-full'>
            {user.email}
        </td>
        <td className='text-xs text-Gray-700 font-medium w-full'>
            <span className='w-fit px-2 py-[0.125rem] rounded-full bg-Gray-100'>
                {user.role}
            </span>
        </td>
        <td className='text-sm text-Gray-600 font-regular whitespace-nowrap w-full'>
            8:00pm - 23 Aug 2023
        </td>
        <td className='flex items-center justify-end gap-2 flex-grow w-full'>
            <ActionButtons
                onShowMemberCredentials={() => onShowMemberCredentials(user.name, user.email)}
                onDeleteMember={() => onDeleteMember(user.name, String(user.id))}
            />
        </td>
    </tr>
));

interface ActionButtonsProps {
    onShowMemberCredentials: () => void;
    onDeleteMember: () => void;
}

const ActionButtons: FC<ActionButtonsProps> = React.memo(({ onShowMemberCredentials, onDeleteMember }) => (
    <>
        <Button
            variant={'secondaryGray'}
            title='Show User Credentials'
            className='rounded-lg p-[0.625rem] border-Gray-100 bg-Gray-100 hover:bg-Gray-100 active:bg-Gray-100 w-10 h-10 m-0'
            style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}
            onClick={onShowMemberCredentials}
        >
            <PasscodeLock />
        </Button>
        <Button
            variant={'secondaryGray'}
            title='Show User Credentials'
            className='rounded-lg p-[0.625rem] border-Gray-100 bg-Gray-100 hover:bg-Gray-100 active:bg-Gray-100 w-10 h-10 m-0'
            style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}
        >
            <Edit />
        </Button>
        <Button
            variant={'secondaryGray'}
            title='Delete User'
            className='rounded-lg p-[0.625rem] border-Gray-100 bg-Gray-100 hover:bg-Gray-100 active:bg-Gray-100 w-10 h-10 m-0'
            style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}
            onClick={onDeleteMember}
        >
            <Trash />
        </Button>
    </>
));

interface PaginationProps {
    users: User[];
    rowsPerPage: number;
    currentPage: number;
    onPageChange: (newPage: number) => void;
}

const Pagination: FC<PaginationProps> = React.memo(({ users, rowsPerPage, currentPage, onPageChange }) => (
    <div className='flex items-center justify-between gap-2 w-full px-6 py-3'>
        <Button
            variant='secondaryGray'
            icon='leading'
            customIconComponent={
                <Arrow
                    stroke={currentPage === 1 ? '#d0d5dd' : undefined}
                />
            }
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className='w-fit [&>span]:hidden lg:[&>span]:block'
        >
            Previous
        </Button>
        <div className="flex items-center gap-[0.125rem]">
            {Array.from({ length: Math.ceil(users.length / rowsPerPage) }, (_, page) => (
                <Button
                    key={page}
                    onClick={() => onPageChange(page + 1)}
                    className={cn(
                        'bg-white text-sm font-medium text-Gray-500 rounded-lg hover:bg-white active:bg-white border-white w-10 h-10 m-0',
                        { 'text-Brand-600 bg-Brand-50 hover:bg-Brand-50 active:bg-Brand-50 border-Brand-50': currentPage === page + 1 }
                    )}
                >
                    {page + 1}
                </Button>
            ))}
        </div>
        <Button
            variant='secondaryGray'
            icon='trailing'
            customIconComponent={
                <div className='rotate-180'>
                    <Arrow
                        stroke={currentPage === Math.ceil(users.length / rowsPerPage) ? '#d0d5dd' : undefined}
                    />
                </div>
            }
            disabled={currentPage === Math.ceil(users.length / rowsPerPage)}
            onClick={() => onPageChange(currentPage + 1)}
            className='w-fit [&>span]:hidden lg:[&>span]:block'
        >
            Next
        </Button>
    </div>
));

export default MembersManagementTable;