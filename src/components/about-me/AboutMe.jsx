import React from 'react'
import BgText from '../BgText'
import Divider from '../Divider'
import VisibilityWrapper from '../VisibilityWrapper'

const AboutMe = () => {
    return (
    <section id="AboutMe">
        <VisibilityWrapper>

            <BgText text={"ABOUT ME"} />
            <div className='text-white font-poppins mt-4 text-xl'>
                <div className='md:px-24 xs:px-10'>
                    During the final semester of my Bachelor of Commerce, I filled a mandatory elective slot with the Introduction to Computer Programming within Memorial's Computer Science faculty. This course served as a catalyst into my interest in software development. 
                    During the start of the Covid pandemic, I began self-teaching myself Java. Fast forward to May 2021, and I have joined the Get Coding NL program here in St. John's.
                    <br />
                    <br />
                    <div className='font-semibold'>
                        Currently, I'm looking to bring my development skills to the job market and gain professional experience.
                    </div>
                </div>
            </div>

            <Divider />

        </VisibilityWrapper>
    </section>
    )
}

export default AboutMe