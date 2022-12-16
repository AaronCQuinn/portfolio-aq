import React from 'react'

const CatagoriesButton = ({children}) => {
    return (
        <button className='
        py-3 
        font-semibold 
        rounded-sm
        transition 
        ease-in-out 
        delay-150 
        hover:-translate-y-1
        hover:scale-110'>{children}</button>
    )
}

export default CatagoriesButton