import React from 'react'

const SplashText = () => {
    return (
        <div className='text-white select-none'>
            <div className='md:text-3xl lg:text-5xl leading-tight font-bold font-poppins'>
                Hello, my name is
            </div>
            <div className='xs:text-5xl lg:text-8xl leading-tight font-extrabold font-poppins'>
            Aaron Quinn.
            </div>
            <div className='md:text-base lg:text-xl my-2'>
                As of 2022, I am looking to merge my passion for programming
                <br />
                into my career path and find employment in the local tech industry.
            </div>
        </div>
    )
}

export default SplashText