import React from 'react'
import { Logo } from './icons';

const CopyRightBadge = () => {
  return (
    <div className='flex items-center justify-center gap-2 px-6 py-3 mx-auto w-fit rounded-full bg-Gray-50 border border-Gray-300'>
      <p className='text-sm font-semibold text-Gray-700 select-none'>Created by</p>
      <div className='max-w-[57px] max-h-[28px] w-full h-full overflow-hidden'>
        <Logo />
      </div>
    </div>
  )
}

export default CopyRightBadge;