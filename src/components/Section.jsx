import React from 'react'
import bg from '../assets/hero-image.jpg'


export const Section = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='w-full h-screen bg-cover bg-center flex items-center px-4'>
        < div className='uppercase text-center text-black font-extrabold font-serif '>
            <h1 className='text-8xl'>Sik-Wa</h1>
            <h2>TazBae</h2>
        </div>
        </div>
  )
}
export default Section;