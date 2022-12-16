import React from 'react'

const Mentor = ({imgsrc, title, quote}) => {
  return (
    <div className='xs:px-10 md:px-20 flex flex-col lg:flex-row justify-center items-center font-poppins'>
        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full scale-75 p-1 min-w-fit">
            <img src={imgsrc} alt='Mentor.' className='rounded-full' />
        </div>

      <div className='text-white sm:text-left p-4 rounded-lg font-semibold mx-auto w-90 outline outline-1 outline-blue-300'>
      <span className='text-2xl sm:text-3xl'>{title}</span>
      <p className='text-l mt-5'>{quote}</p>
      </div>
    </div>
  )
}

export default Mentor