import React from 'react'

const KeyLetter = ({children}) => {
    return (
        <span className="block w-full absolute bottom-[7px] transition-opacity duration-300 text-[20px]">
            {children}
        </span>
    )
}

export default KeyLetter