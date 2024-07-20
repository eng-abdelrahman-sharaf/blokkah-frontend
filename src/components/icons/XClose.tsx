import React from 'react'

const XClose = ({ stroke = '#98A2B3', width = 14, height = 14 }: { stroke?: string, width?: number, height?: number }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 14 14"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 1L1 13M1 1L13 13"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    )
}

export default XClose