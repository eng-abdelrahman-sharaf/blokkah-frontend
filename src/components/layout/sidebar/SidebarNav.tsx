import CheckSquare from '@/components/icons/CheckSquare'
import { Button } from '@/components/UI/Button'
import React from 'react'

const SidebarNav = () => {
    return (
        <div>
            <Button
                icon='leading'
                customIconComponent={<CheckSquare />}
                className='bg-transparent border-transparent hover:bg-Brand-600 transition-colors justify-start gap-3'
            >
                Content Management
            </Button>
        </div>
    )
}

export default SidebarNav