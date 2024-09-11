import React from 'react'

import AgentsRequestsTable from '@/components/pages/user-management/AgentsRequestsTable'

type User = {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    status: 'pending' | 'accepted' | 'rejected';
    roles: string[];
    creationDate: string; // Full datetime
    dateOfBirth: string; // Date only (YYYY-MM-DD)
    falLicense?: string;
    nationalId?: string;
    country?: string;
    type?: 'individual' | 'company' | 'developer'; // Optional type field
};

const mockUserData: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phoneNumber: '(+20)1211937946',
        status: 'pending',
        roles: ['agent'],
        creationDate: '2024-07-30T12:34:56Z',
        dateOfBirth: '1990-01-01',
        falLicense: '12345678asdfasdf90',
        nationalId: 'ID1234567890',
        country: 'USA',
        type: 'individual',
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phoneNumber: '(+20)1211937946',
        status: 'rejected',
        roles: ['admin'],
        creationDate: '2024-06-15T08:22:33Z',
        dateOfBirth: '1985-05-15',
        falLicense: '9876543210',
        nationalId: 'ID0987654321',
        country: 'Canada',
        type: 'company',
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        phoneNumber: '(+20)1211937946',
        status: 'accepted',
        roles: ['agent'],
        creationDate: '2024-05-20T14:11:22Z',
        dateOfBirth: '1992-07-10',
        falLicense: '1357924680',
        nationalId: 'ID1357924680',
        country: 'UK',
        type: 'developer',
    }
]

const page = () => {
    return (
        <AgentsRequestsTable usersData={mockUserData} />
    )
}

export default page