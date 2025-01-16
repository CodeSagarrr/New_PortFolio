"use client"
import { LayoutTemplate } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='sm:w-full w-[97%] h-[84vh] sm:pt-12 pt-24'>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-8 lg:mb-0 lg:mr-12"
      >
        <div className='sm:w-[48%] w-full mx-auto text-center '>
          <h2 className='text-center sm:text-[1.8rem] text-[1.2rem] font-bold font-["Signika","sans-serif"]'>Hello, Welcome</h2>
          <h2 className='sm:text-[3rem] text-[2rem] text-center font-bold font-["Signika"]'>I'm Sagar Vishwakarma</h2>
          <p className='sm:max-w-[70%] max-w-[87%] mx-auto sm:text-[12px] text-[10px] text-gray-400 font-["Inter"] '>I specialize in creating user-friendly and dynamic web applications using modern technologies like React.js, TailwindCSS, and Next.js. My expertise lies in designing seamless user experiences and efficient backend solutions.</p>
          <button
            className="flex gap-4 items-center mx-auto shrink-0 sm:mt-6 mt-4  rounded-md border bg-white px-8 py-2 text-md font-semibold text-black transition-all hover:bg-gray-300 
            ">
            <a href={'/SagarCv.pdf'} download={'/SagarCv.pdf'} className='flex gap-4 items-center'>
              Resume <LayoutTemplate className='w-5 h-5 ' />
            </a>

          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className=" text-center lg:text-left space-y-4 sm:mt-0 mt-4"
      >
        <div className='flex justify-center mt-6 sm:pl-0 pl-4'>
          <Image src={'/Logo.webp'} alt='Image' width={500} height={500} />
        </div>
      </motion.div>
    </div>
  )
}

export default Home
