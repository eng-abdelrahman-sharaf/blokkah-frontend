'use client'

import React, { ChangeEvent, FC, useMemo } from 'react';

import { useModal } from '@/context/ModalContext';

import usePagination from '@/hooks/usePagination';
import useTableSelection from '@/hooks/useTableSelection';

import { Button } from '@/components/UI/Button';

import { Arrow, Check, Edit, PasscodeLock, Trash, User, XClose } from '@/components/icons';

import MemberCredentialsModal from '@/components/modals/MemberCredentialsModal';
import DeleteModal from '@/components/modals/DeleteModal';

import formatDateTime from '@/lib/formatDateTime';

import '@/components/table-styles.css';

interface User {
    id: number;
    name: string;
    email: string;
    roles: string[];
    active: boolean;
    creationDate: string;
}

const MembersManagementTable: FC<{ usersData: User[] }> = ({ usersData }) => {
    const rowsPerPage = 3;

    const { currentPage } = usePagination({ totalItems: usersData?.length, rowsPerPage });

    const { selectedItems, handleMasterCheckboxChange, handleCheckboxChange } = useTableSelection({
        items: usersData,
        rowsPerPage,
        currentPage
    });

    return (
        <div className="w-full h-full overflow-x-auto custom-blokkah-table">
            <table>
                <thead>
                    <TableHeader
                        handleMasterCheckboxChange={handleMasterCheckboxChange}
                        selectedItems={selectedItems}
                        usersData={usersData}
                    />
                </thead>
                <tbody>
                    {usersData.map(user => (
                        <MemberRow
                            key={user.id}
                            user={user}
                            selectedUsers={selectedItems}
                            onCheckboxChange={handleCheckboxChange}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

interface TableHeaderProps {
    handleMasterCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
    selectedItems: number[];
    usersData: User[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ handleMasterCheckboxChange, selectedItems, usersData }) => {
    const isChecked = selectedItems.length === usersData.length && selectedItems.length > 0;

    return (
        <tr>
            <th>
                <div className="table-cell-flex-wrapper !gap-3">
                    <input
                        type="checkbox"
                        onChange={handleMasterCheckboxChange}
                        checked={isChecked}
                    />
                    Name
                </div>
            </th>
            <th>
                <div className="table-cell-flex-wrapper">
                    Status
                    <div className="-rotate-90">
                        <Arrow width={16} height={16} />
                    </div>
                </div>
            </th>
            <th>Email Address</th>
            <th>
                <div className="table-cell-flex-wrapper">
                    Role
                    <div className="-rotate-90">
                        <Arrow width={16} height={16} />
                    </div>
                </div>
            </th>
            <th>
                <div className="table-cell-flex-wrapper">
                    Creation Date
                    <div className="-rotate-90">
                        <Arrow width={16} height={16} />
                    </div>
                </div>
            </th>
            <th className="text-transparent select-none">Actions</th>
        </tr>
    );
};

interface MemberRowProps {
    user: User;
    selectedUsers: number[];
    onCheckboxChange: (e: ChangeEvent<HTMLInputElement>, userId: number) => void;
}

const MemberRow: FC<MemberRowProps> = React.memo(({ user, selectedUsers, onCheckboxChange }) => (
    <tr>
        <UserCell user={user} selectedUsers={selectedUsers} onCheckboxChange={onCheckboxChange} />
        <StatusCell active={user.active} />
        <td className='text-sm text-Gray-600 font-regular'>{user.email}</td>
        <RolesCell roles={user.roles} />
        <td className='text-sm text-Gray-600 font-regular whitespace-nowrap'>
            {formatDateTime(user.creationDate)}
        </td>
        <ActionButtonsCell user={user} />
    </tr>
));

interface UserCellProps {
    user: User;
    selectedUsers: number[];
    onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>, userId: number) => void;
}

const UserCell: React.FC<UserCellProps> = ({ user, selectedUsers, onCheckboxChange }) => (
    <td className='text-sm text-Gray-900 font-medium whitespace-nowrap'>
        <div className='table-cell-flex-wrapper !gap-3'>
            <input
                type="checkbox"
                checked={selectedUsers.includes(user.id)}
                onChange={(e) => onCheckboxChange(e, user.id)}
            />
            <div className='rounded-full bg-Brand-50 p-2 w-fit'>
                <User />
            </div>
            {user.name}
        </div>
    </td>
);

interface StatusCellProps {
    active: boolean;
}

const StatusCell: React.FC<StatusCellProps> = ({ active }) => (
    <td className='text-sm text-Gray-600 font-regular'>
        <span className={`flex items-center gap-1 w-fit px-2 py-[0.125rem] rounded-full text-xs font-medium whitespace-nowrap ${active ? 'bg-Success-50 text-Success-700' : 'bg-Error-50 text-Error-700'}`}>
            {active ? <Check /> : <XClose stroke='#F04438' width={8} height={8} />}
            {active ? 'Active' : 'In Active'}
        </span>
    </td>
);

interface RolesCellProps {
    roles: string[];
}

const RolesCell: React.FC<RolesCellProps> = ({ roles }) => (
    <td className='text-xs text-Gray-700 font-medium gap-1'>
        <div className='table-cell-flex-wrapper'>
            {roles.slice(0, 2).map((role, index) => (
                <span
                    key={role + '-' + index}
                    className='w-fit px-2 py-[0.125rem] rounded-full bg-Gray-100'
                >
                    {role}
                </span>
            ))}
            {roles.length > 2 && (
                <span className='w-fit px-2 py-[0.125rem] rounded-full bg-Gray-100'>
                    +{roles.length - 2}
                </span>
            )}
        </div>
    </td>
);

interface ActionButtonsCellProps {
    user: User;
}

const ActionButtonsCell: React.FC<ActionButtonsCellProps> = ({ user }) => {
    const { openModal } = useModal();
    const handleShowMemberCredentials = (memberName: string, memberEmail: string, memberPassword?: string) => {
        openModal(<MemberCredentialsModal memberName={memberName} memberEmail={memberEmail} />);
    };

    const handleDeleteMember = (username: string, id: string) => {
        openModal(
            <DeleteModal
                itemId={id}
                deleteModalMessage={`Are you sure that you need to delete “${username}”?`}
                deleteModalConfirmation='By deleting this user, he will lose access to your dashboard any more unless you add him again.'
                onDelete={() => null}
            />
        );
    };

    return (
        <td>
            <div className='table-cell-flex-wrapper !gap-2 !justify-end'>
                <ActionButtons
                    onShowMemberCredentials={() => handleShowMemberCredentials(user.name, user.email)}
                    onDeleteMember={() => handleDeleteMember(user.name, String(user.id))}
                />
            </div>
        </td>
    )
}

interface ActionButtonsProps {
    onShowMemberCredentials: () => void;
    onDeleteMember: () => void;
}

const ActionButtons: FC<ActionButtonsProps> = React.memo(({ onShowMemberCredentials, onDeleteMember }) => {
    const actionButtons = useMemo(() => {
        return [
            {
                title: 'Show User Credentials',
                icon: <PasscodeLock />,
                onClick: onShowMemberCredentials
            },
            {
                title: 'Edit User Credentials',
                icon: <Edit />,
            },
            {
                title: 'Delete User',
                icon: <Trash />,
                onClick: onDeleteMember
            }
        ]
    }, [])
    return (
        <>
            {actionButtons.map(actionButton => (
                <Button
                    key={actionButton.title}
                    variant={'secondaryGray'}
                    title={actionButton.title}
                    onClick={actionButton.onClick}
                    className='rounded-lg p-[0.625rem] border-Gray-100 bg-Gray-100 hover:bg-Gray-100 active:bg-Gray-100 w-10 h-10 m-0 shadow-xs'
                    icon='only'
                    customIconComponent={
                        actionButton.icon
                    }
                />
            ))}
        </>
    )
});

export default MembersManagementTable;