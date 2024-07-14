import Logout from '@/components/icons/Logout'
import { Button } from '@/components/UI/Button'
import Image from 'next/image'
import React from 'react'

const ProfileTab = ({ name = 'Ahmed Ali', email = 'ahmedali@works.com' }: { name: string, email: string }) => {
    return (
        <div className='flex items-center gap-6'>
            <div className='flex items-center gap-3'>
                <Image
                    src={'/assets/Avatar.png'}
                    alt="User's Avatar"
                    width={40}
                    height={40}
                />
                <div className='text-left'>
                    <p className='text-Gray-200 font-semibold text-sm'>{name}</p>
                    <p className='text-Gray-400 font-regular text-sm'>{email}</p>
                </div>
            </div>
            <Button className='w-fit p-2'>
                <Logout />
            </Button>
        </div>
    )
}

export default ProfileTab