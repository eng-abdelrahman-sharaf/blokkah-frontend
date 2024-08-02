'use client'

import React, { ChangeEvent, FC, useMemo } from 'react';

import { useModal } from '@/context/ModalContext';

import usePagination from '@/hooks/usePagination';
import useTableSelection from '@/hooks/useTableSelection';

import { Button } from '@/components/UI/Button';

import { Arrow, User, PhoneCall, Copy, Eye } from '@/components/icons';

import MemberCredentialsModal from '@/components/modals/MemberCredentialsModal';
import DeleteModal from '@/components/modals/DeleteModal';

import formatDateTime from '@/lib/formatDateTime';
import { cn } from '@/lib/utils';

import toast from 'react-hot-toast';

import '@/components/table-styles.css';

type User = {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    status: 'pending' | 'accepted' | 'rejected';
    roles: string[];
    creationDate: string;
    dateOfBirth: string;
    falLicense?: string;
    nationalId?: string;
    country?: string;
    type?: 'individual' | 'company' | 'developer';
};

const AgentsRequestsTable: FC<{ usersData: User[] }> = ({ usersData }) => {
    const rowsPerPage = 3;
    const { currentPage } = usePagination({ totalItems: usersData.length, rowsPerPage });
    const { selectedItems, handleMasterCheckboxChange, handleCheckboxChange } = useTableSelection({ items: usersData, rowsPerPage, currentPage });

    return (
        <div className="w-full h-full overflow-x-auto custom-blokkah-table">
            <table>
                <TableHeader
                    selectedItems={selectedItems}
                    handleMasterCheckboxChange={handleMasterCheckboxChange as any}
                />
                <tbody>
                    {usersData.map(user => (
                        <AgentRequestRow
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

const TableHeader: FC<{ selectedItems: number[], handleMasterCheckboxChange: () => void }> = React.memo(({ selectedItems, handleMasterCheckboxChange }) => (
    <thead>
        <tr>
            <th>
                <div className="table-cell-flex-wrapper !gap-3">
                    <input
                        type="checkbox"
                        onChange={handleMasterCheckboxChange}
                        checked={selectedItems.length > 0}
                    />
                    User Name
                </div>
            </th>
            <th>
                <div className='table-cell-flex-wrapper'>
                    Status
                    <div className='-rotate-90'>
                        <Arrow width={16} height={16} />
                    </div>
                </div>
            </th>
            <th>Fal License</th>
            <th>National ID</th>
            <th>
                <div className='table-cell-flex-wrapper'>
                    Country
                    <div className='-rotate-90'>
                        <Arrow width={16} height={16} />
                    </div>
                </div>
            </th>
            <th>
                <div className='table-cell-flex-wrapper'>
                    Date of Birth
                    <div className='-rotate-90'>
                        <Arrow width={16} height={16} />
                    </div>
                </div>
            </th>
            <th>
                <div className='table-cell-flex-wrapper'>
                    Type
                    <div className='-rotate-90'>
                        <Arrow width={16} height={16} />
                    </div>
                </div>
            </th>
            <th>
                <div className='table-cell-flex-wrapper'>
                    Registration Date
                    <div className='-rotate-90'>
                        <Arrow width={16} height={16} />
                    </div>
                </div>
            </th>
            <th className='text-transparent select-none'>Actions</th>
        </tr>
    </thead>
));

interface AgentRequestRowProps {
    user: User;
    selectedUsers: number[];
    onCheckboxChange: (e: ChangeEvent<HTMLInputElement>, userId: number) => void;
}

const AgentRequestRow: FC<AgentRequestRowProps> = React.memo(({ user, selectedUsers, onCheckboxChange }) => (
    <tr>
        <UserCell user={user} selectedUsers={selectedUsers} onCheckboxChange={onCheckboxChange} />
        <StatusCell status={user.status} />
        <FalLicenseCell falLicense={user.falLicense as string} />
        <td className='text-sm text-Gray-600 font-regular'>{user.nationalId}</td>
        <td className='text-sm text-Gray-600 font-regular'>{user.country}</td>
        <td className='text-sm text-Gray-600 font-regular'>{formatDateTime(user.dateOfBirth ?? '', true)}</td>
        <td className='text-xs text-Gray-700 font-medium'>
            <span className='px-2 py-[2px] rounded-full bg-Gray-100'>
                {user.type}
            </span>
        </td>
        <td className='text-sm text-Gray-600 font-regular'>{formatDateTime(user.creationDate)}</td>
        <ActionButtonsCell
            user={user}
        />
    </tr>
));

interface UserCellProps {
    user: User;
    selectedUsers: number[];
    onCheckboxChange: (e: ChangeEvent<HTMLInputElement>, userId: number) => void;
}

const UserCell: FC<UserCellProps> = ({ user, selectedUsers, onCheckboxChange }) => (
    <td className='text-sm text-Gray-900 font-medium whitespace-nowrap'>
        <div className='table-cell-flex-wrapper !gap-3 !justify-between'>
            <div className='table-cell-flex-wrapper !gap-3'>
                <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={(e) => onCheckboxChange(e, user.id)}
                />
                <div className='rounded-full bg-Brand-50 p-2 w-fit'>
                    <User />
                </div>
                <div>
                    <p>{user.name}</p>
                    <p className='text-Gray-600 font-regular'>{user.phoneNumber}</p>
                </div>
            </div>
            <Button
                variant={'secondaryGray'}
                title={'whatsapp message'}
                className='rounded-lg w-fit p-2 m-0 shadow-xs'
                icon='only'
                customIconComponent={<PhoneCall />}
                onClick={() => window.open(`https://wa.me/${user.phoneNumber}`, '_blank')}
            />
        </div>
    </td>
);

interface StatusCellProps {
    status: 'pending' | 'accepted' | 'rejected';
}

const StatusCell: FC<StatusCellProps> = ({ status }) => {
    let statusText = '';
    let statusClass = '';

    switch (status) {
        case 'pending':
            statusText = 'Pending';
            statusClass = 'bg-Brand-50 text-Brand-700 [&>span]:bg-Brand-700';
            break;
        case 'accepted':
            statusText = 'Accepted';
            statusClass = 'bg-Success-50 text-Success-700 [&>span]:bg-Success-700';
            break;
        case 'rejected':
            statusText = 'Rejected';
            statusClass = 'bg-Error-50 text-Error-700 [&>span]:bg-Error-700';
            break;
        default:
            statusText = 'Unknown';
            statusClass = 'bg-Gray-50 text-Gray-700 [&>span]:bg-Gray-700';
    }

    return (
        <td className='text-sm text-Gray-600 font-regular'>
            <span className={`flex items-center gap-2 w-fit px-2 py-[0.125rem] rounded-full text-xs font-medium whitespace-nowrap ${statusClass}`}>
                <span
                    className='rounded-full w-[6px] h-[6px] bg-Gray-900'
                />
                {statusText}
            </span>
        </td>
    );
};

interface FalLicenseCellProps {
    falLicense: string;
}

const FalLicenseCell: FC<FalLicenseCellProps> = ({ falLicense }) => {

    const handleCopyClick = () => {
        navigator.clipboard.writeText(falLicense)
            .then(() => {
                toast.success('License copied to clipboard!');
            })
            .catch(() => {
                toast.error('Failed to copy license.');
            });
    };

    return (
        <td className='text-sm text-Gray-600 font-regular table-cell-flex-wrapper !gap-3 !justify-between'>
            {falLicense}
            <Button
                variant={'secondaryGray'}
                title={'Copy License'}
                className='rounded-lg w-fit p-2 m-0 shadow-xs'
                icon='only'
                customIconComponent={<Copy />}
                onClick={handleCopyClick}
            />
        </td>
    );
};

interface ActionButtonsCellProps {
    user: {
        name: string;
        email: string;
        id: number;
        status: 'pending' | 'rejected' | 'accepted';
    };
}

const ActionButtonsCell: React.FC<ActionButtonsCellProps> = ({ user }) => {
    const { openModal } = useModal();

    const handleShowMemberCredentials = (memberName: string, memberEmail: string) => {
        openModal(<MemberCredentialsModal memberName={memberName} memberEmail={memberEmail} />);
    };

    const handleDeleteMember = (username: string, id: string) => {
        openModal(
            <DeleteModal
                itemId={id}
                deleteModalMessage={`Are you sure that you need to delete “${username}”?`}
                deleteModalConfirmation='By deleting this user, he will lose access to your dashboard any more unless you add him again.'
                onDelete={() => null}
            />);
    };

    return (
        <td>
            <div className='table-cell-flex-wrapper !gap-2 !justify-end'>
                <ActionButtons
                    status={user.status}
                    onShowAgentRequestDetails={() => handleShowMemberCredentials(user.name, user.email)}
                    onRejectAgentRequest={() => handleDeleteMember(user.name, String(user.id))}
                    onAcceptAgentRequest={() => console.log('Accept Action')}
                    onViewAgentProfile={() => console.log('View Profile Action')}
                />
            </div>
        </td>
    );
};

interface ActionButtonsProps {
    status: 'pending' | 'rejected' | 'accepted';
    onShowAgentRequestDetails: () => void;
    onRejectAgentRequest: () => void;
    onAcceptAgentRequest: () => void;
    onViewAgentProfile: () => void;
}

const ActionButtons: FC<ActionButtonsProps> = React.memo(({
    status,
    onShowAgentRequestDetails,
    onRejectAgentRequest,
    onAcceptAgentRequest,
    onViewAgentProfile
}) => {
    const actionButtons = useMemo(() => {
        return [
            {
                title: 'Show Agent Request',
                icon: <Eye />,
                viewRequest: true,
                onClick: onShowAgentRequestDetails
            },
            {
                title: 'Reject Agent Request',
                icon: <span>Reject</span>,
                reject: true,
                onClick: onRejectAgentRequest
            },
            {
                title: 'Accept Agent Request',
                icon: <span>Accept</span>,
                accept: true,
                onClick: onAcceptAgentRequest
            },
            {
                title: 'View Agent Profile',
                icon: <span className='flex items-center gap-2'>
                    <Eye />
                    View Profile
                </span>,
                view: true,
                onClick: onViewAgentProfile
            }
        ];
    }, [onShowAgentRequestDetails, onRejectAgentRequest, onAcceptAgentRequest, onViewAgentProfile]);

    const filteredButtons = useMemo(() => {
        switch (status) {
            case 'pending':
                return actionButtons.filter(button => !button.view);
            case 'rejected':
                return actionButtons.filter(button => button.accept || button.viewRequest);
            case 'accepted':
                return actionButtons.filter(button => button.view);
            default:
                return [];
        }
    }, [status, actionButtons]);

    return (
        <>
            {filteredButtons.map(actionButton => (
                <Button
                    key={actionButton.title}
                    variant='secondaryGray'
                    title={actionButton.title}
                    onClick={actionButton.onClick}
                    className={cn(
                        'rounded-lg p-[0.625rem] border-Gray-100 !bg-Gray-100 min-w-10 w-fit h-10 m-0 shadow-xs',
                        { 'border-Error-50 !bg-Error-50 !text-Error-700': actionButton.reject },
                        { 'border-Success-50 !bg-Success-50 !text-Success-700': actionButton.accept }
                    )}
                >
                    {actionButton.icon}
                </Button>
            ))}
        </>
    );
});

export default AgentsRequestsTable;