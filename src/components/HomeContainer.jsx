import React from 'react'
import SplashText from './SplashText'
import Picture from '../Picture.jpg'
import Divider from './Divider'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const HomeContainer = () => {
    return (
        <section id="Home">

            <InView threshold={0.25}>
                {({ ref, inView }) => (
                    <motion.div ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1, translateY: -25 } : {opacity: 0}}
                        transition={{ duration: 1 }}
                        className='xs:px-10 min-h-screen w-full pt-28 grid gap-10 sm:grid-cols-1 lg:grid-cols-2 place-items-center'
                    >
                        {/* Home Text */}
                        <div>
                            <SplashText />
                        </div>

                        {/* Profile Picture */}
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full sm:scale-75 lg:scale-75 p-1 shadow-2xl">
                            <img src={Picture} alt='Profile.' className='rounded-full' />
                        </div>
                    </motion.div>
                )}
            </InView>

        <Divider />
        </section>
    )
}

export default HomeContainer