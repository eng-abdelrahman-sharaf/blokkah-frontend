import React from 'react';

import Textarea from '@/components/UI/Textarea';
import { Button } from '@/components/UI/Button';

import DashboardPagesHeader from '@/components/layout/DashboardPagesHeader';

import { Save } from '@/components/icons';

const AboutBlokkah: React.FC<{ aboutUs?: string, termsOfConditions?: string }> = ({ aboutUs, termsOfConditions }) => {

  const handleSubmit = async (formdata: FormData) => {
    'use server'
    const aboutUs = formdata.get('aboutUs');
    const termsConditions = formdata.get('termsConditions');

    console.log(aboutUs, termsConditions);
  };

  return (
    <form action={handleSubmit} className='dashboard-pages-wrapper'>
      <DashboardPagesHeader
        title='About Blokkah'
        description='We have missed you.'
        customIconComponent={<Save />}
        buttonText="Save Changes"
      />
      <div className="flex flex-col items-start gap-4 sm:gap-6 w-full h-full">
        <div className='flex flex-col sm:flex-row items-start gap-5 sm:gap-8 w-full max-h-[12.5rem] h-full'>
          <div className='max-w-[18.875rem] w-full'>
            <h2 className='text-lg text-Gray-900 font-semibold mb-1'>About Us</h2>
            <p className='text-sm text-Gray-600 font-regular'>We have missed you.</p>
          </div>
          <Textarea
            name='aboutUs'
            placeholder='Content Here...'
            className='max-w-[32.5rem] w-full h-full resize-none'
            containerClassNames='h-full'
            defaultValue={aboutUs}
          />
        </div>

        <hr className='bg-Gray-200 w-full' />

        <div className='flex flex-col sm:flex-row items-start gap-5 sm:gap-8 w-full max-h-[12.5rem] h-full'>
          <div className='max-w-[18.875rem] w-full'>
            <h2 className='text-lg text-Gray-900 font-semibold mb-1'>Terms Of Conditions</h2>
            <p className='text-sm text-Gray-600 font-regular'>We have missed you.</p>
          </div>
          <Textarea
            name='termsConditions'
            placeholder='Content Here...'
            className='max-w-[32.5rem] w-full h-full resize-none'
            containerClassNames='h-full'
            defaultValue={termsOfConditions}
          />
        </div>
      </div>
    </form>
  );
};

export default AboutBlokkah;