import React from 'react'
import { Logo } from './icons';

const CopyRightBadge = () => {
  return (
    <div className='flex items-center justify-center gap-2 px-6 py-3 mx-auto w-fit rounded-full bg-Gray-50 border border-Gray-300'>
      <p className='text-sm font-semibold text-Gray-700 select-none'>Created by</p>
      <Logo width={57} height={28} />
    </div>
  )
}

export default CopyRightBadge;