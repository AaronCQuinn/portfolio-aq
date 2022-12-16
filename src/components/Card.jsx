import React from 'react'
import {VscGithubAlt} from 'react-icons/vsc'
import {GoLinkExternal} from 'react-icons/go'
import {motion} from 'framer-motion'
import './Card.css'

const Card = ({title, tech, links, desc}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.5}}
        >
        <div className='bg-neutral-900 card w-fit p-5 max-w-sm text-white rounded-md outline outline-1 outline-blue-300'>
            {/* Header Portion */}
            <div className='flex justify-between items-center mb-5 text-2xl px-2'>
                <div>
                    {title}
                </div>
                <div>
                    <a href={links.ghLink} target="_blank" rel="noreferrer">
                        {<VscGithubAlt size={25} className='inline mx-2' />}
                    </a>
                
                    <a href={links.liveLink} target="_blank" rel="noreferrer">
                        {<GoLinkExternal size={25} className="inline" />}
                    </a>
                </div>
            </div>

            {/* Description portion */}
            <div className='px-3 mb-5'>
                {desc}
            </div>
            <hr />

            {/* Technologies Section */}

            <div className='px-2 grid grid-cols-2 mt-3 place-items-center gap-3'>
                <div>
                    {tech[0]}
                </div>
                <div>
                    {tech[1]}
                </div>
                <div>
                    {tech[2]}
                </div>
                <div>
                    {tech[3]}
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default Card