import React from 'react'
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa'

const Socials = () => {
    return (
        <div className='xs:hidden md:block w-100 pb-3'>
            <a href='https://www.linkedin.com/in/aaron-quinn/' target="_blank" rel="noreferrer">
                <FaLinkedin size={40} className='inline hover:fill-blue-600'/>
            </a>
            <a href='mailto:aaron.quinn.nfld@gmail.com' target="_blank" rel="noreferrer">
                <FaEnvelopeSquare size={40} className='inline hover:fill-blue-600'/>
            </a>
            <a href='https://github.com/aaroncquinn' target="_blank" rel="noreferrer">
                <FaGithubSquare size={40} className='inline hover:fill-blue-600'/>
            </a>
        </div>
    )
}

export default Socials