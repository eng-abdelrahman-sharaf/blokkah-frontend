import React from 'react'

const Plus = ({ width = 20, height = 20 }: { width?: number, height?: number }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 4.16663V15.8333M4.16669 9.99996H15.8334"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    )
}

export default Plus