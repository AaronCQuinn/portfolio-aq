import React from 'react'
import CatagoriesButton from './CatagoriesButton'

const Catagories = () => {
    return (
        <div className='flex xs:justify-center xs:flex-row md:flex-col gap-5 w-full text-white text-lg xs:pr-3 sm:pr-0'>
            <CatagoriesButton><a href='#Home' className='hidden sm:block'>Home</a></CatagoriesButton>
            <CatagoriesButton><a href='#AboutMe'>About Me</a></CatagoriesButton>
            <CatagoriesButton><a href="#Mentors">Mentors</a></CatagoriesButton>
            <CatagoriesButton><a href='#Projects'>Projects</a></CatagoriesButton>
            <CatagoriesButton><a href="#CTA">Contact Me</a></CatagoriesButton>
        </div>
    )
}

export default Catagories