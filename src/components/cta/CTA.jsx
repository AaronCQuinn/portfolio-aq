import React from 'react'
import VisibilityWrapper from '../VisibilityWrapper'
import Resume from './Aaron_Quinn_Resume.pdf'
import CTAWideButton from './CTAWideButton'

const CTA = () => {
    return (
        <section id="CTA">
            <VisibilityWrapper>
            <div className='font-extrabold text-center text-blue-300 text-7xl md:text-9xl text-opacity-70 font-poppins'>
            THANK YOU
            </div>
            <p className='text-center text-white font-poppins font-bold'>Thank you for taking the time to view my portfolio.</p>
            <p className='text-center text-white font-poppins font-bold'>Please feel free to reach out to me through the following channels</p>
            <div className='grid lg:grid-cols-3 gap-1 lg:gap-10 my-10 sm:grid-col-1 md:grid-cols-1'>
                <CTAWideButton>
                    <a href="https://www.linkedin.com/in/aaron-quinn/" target="_blank" rel="noreferrer">LinkedIn</a>
                </CTAWideButton>
                <CTAWideButton>
                        <a href="mailto:aaron.quinn.nfld@gmail.com" target="_blank" rel="noreferrer">Email</a>
                </CTAWideButton>
                <CTAWideButton>
                        <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                </CTAWideButton>
            </div>
            </VisibilityWrapper>
        </section>
    )
}

export default CTA