import React from 'react'
import Catagories from './Catagories'
import Logo from './Logo'
import Name from './Name'
import Socials from './Socials'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <nav>
            <InView threshold={0.25}>
            {({ ref, inView }) => (
                <motion.div ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {opacity: 0}}
                transition={{ duration: 1 }}
                className='
                font-poppins
                xs:w-full
                xs:flex-row
                xs:h-fit
                xs:border-r-0
                md:h-screen 
                md:w-40 
                md:flex-col 
                md:justify-between 
                md:text-center 
                text-neutral-100 
                md:fixed 
                md:right-auto 
                md:border-r-2 
                flex'
                >
                    <a href='#Home'>
                        <Logo />
                        <Name />
                    </a>
                    <Catagories />
                    <Socials />
                </motion.div>
            )}
            </InView>
        </nav>
    )
}

export default Navbar