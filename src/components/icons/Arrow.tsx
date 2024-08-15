import React from 'react'

const Arrow = ({className ,  stroke = "#344054", width = 21, height = 20 }:{className?:string , stroke?: string, width?: number, height?: number}) => {
    return (
        <svg
            width={className ? undefined :"21"}
            height={className? undefined :"20"}
            className={className}
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.3334 10H4.66675M4.66675 10L10.5001 15.8333M4.66675 10L10.5001 4.16667"
                stroke={stroke}
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    )
}

export default Arrow