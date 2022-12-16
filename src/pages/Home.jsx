import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeContainer from '../components/HomeContainer'
import AboutMe from '../components/about-me/AboutMe'
import Projects from '../components/projects/Projects'
import CTA from '../components/cta/CTA'
import MentorsContainer from '../components/mentors/MentorsContainer'

const Home = () => {
  return (
    <div className='bg-neutral-900'>
        <Navbar />
        <div className="h-screen md:w-screen sm:w-10/12 sm:mx-auto sm:text-center md:text-left md:pl-52 md:pr-12 overflow-x-hidden scrollbar-hide">
            <HomeContainer />
            <AboutMe />
            <MentorsContainer />
            <Projects />
            <CTA />
        </div>
    </div>
  )
}

export default Home