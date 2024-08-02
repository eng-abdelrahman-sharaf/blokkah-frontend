import React from 'react'

import AboutBlokkah from '@/components/pages/content-management/about-blokkah/AboutBlokkah';

const page = () => {
    // here, you can fetch the content of the page on the server, and pass it down as prop to the AboutBlokka component
    return (
        <AboutBlokkah
            aboutUs='This is the About Us Text Coming from the Backend'
            termsOfConditions='Do Not Disturb'
            privacyPoilicy='This is the Privacy Policy'
        />
    )
}

export default page;