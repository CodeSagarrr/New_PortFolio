"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div className=' w-full flex  justify-center pt-12'>
        <div className=' text-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 lg:mb-0 lg:mr-12"
          >
            <div className='flex justify-center'>
              <Image src={"/Sagar.jpeg"} alt='Sagar' width={240} height={240} className='rounded-md mb-4 sm:ml-16 ml-0' />
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" text-center lg:text-left space-y-4 sm:mt-0 mt-4"
          >
            <div>
              <h2 className='sm:text-[3rem] text-[2rem] text-center font-bold font-["Signika"]'>I'm Sagar Vishwakarma</h2>
              <h2 className='text-center sm:text-[1.6rem] text-[1.2rem] font-bold font-["Signika","sans-serif"]'>and i'm a Full Stack Developer.</h2>
            </div>
            <p className='max-w-[60%] sm:text-[14px] text-[12px] text-gray-400 p-1 mx-auto font-["Heebo"]'>Full-stack developers passionate about transforming ideas into scalable, high-performance digital solutions. With expertise in both frontend and backend development, we bring a holistic approach to web and mobile applications, ensuring seamless functionality and user experiences across all platforms.
            </p>
            <p className='max-w-[60%] p-1 sm:text-[14px] text-[12px] text-gray-400 mx-auto font-["Heebo"]'>Our skill set covers a wide range of modern technologies, from responsive frontend frameworks like React, and Tailwind and Next.js to robust backend environments such as Node.js with Express.js. We specialize in building secure, efficient, and optimized systems, handling everything from MongoDB database architecture and API integration to interactive UI/UX design. Our goal is to deliver solutions that are not only technically sound but also aligned with your business objectives.</p>

          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="sm:mt-4 mt-6 mb-6 bg-white text-black font-semibold py-2 px-6 rounded-lg"
          >
            <span> Contact </span>
          </motion.button>
      </div>
    </div >
    </>
  )
}

export default About
