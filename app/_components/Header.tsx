"use client"
import { Contact, Menu, X } from 'lucide-react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Header = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const router = useRouter();

    const handleRoute = (route:string) =>{
        if(route !== ""){
            router.push(route)
        }
    }
    return (
        <div>
            <div className='w-full h-24 flex items-center justify-around px-4 py-4 '>
                {/* {Left} */}
                <div className='flex gap-2 items-center'>
                    <Image src={'/Code3.png'} alt='User' width={36} height={36} className='bg-transparent rounded-full'/>
                    <h1 className='sm:text-[1.4rem] text-[1.2rem] font-extrabold font-["Heebo"]'>CodeSagarr</h1>
                </div>
                {/* {center} */}
                <span className='sm:hidden block ml-20 cursor-pointer '
                    onClick={() => setMenu(!menu)}
                >{menu ? <X className='w-7 h-7 mr-3' /> : <Menu className='w-7 h-7 mr-3' />}
                </span>

                <div className='sm:block hidden'>
                    <ul className='flex items-center gap-10 text-[16px] font-extrabold font-["Heebo"]'>
                        <li className='cursor-pointer'
                        onClick={() => handleRoute("/")}
                        >Home</li>
                        <li className='cursor-pointer'
                        onClick={() => handleRoute("/about")}
                        >About</li>
                        <li className='cursor-pointer'
                        onClick={() => handleRoute("/skills")}
                        >Skills</li>
                        <li className='cursor-pointer'
                        onClick={() => handleRoute("/projects")}
                        >Projects</li>
                    </ul>
                </div>

                {
                    menu ? (
                        <div className='absolute z-10 sm:hidden block top-20 rounded-sm bg-black w-full py-6'>
                            <ul className='flex flex-col items-center gap-8 text-[16px] font-extrabold font-["Heebo"]'>
                                <li className='cursor-pointer'
                                onClick={() => handleRoute("/")}
                                >Home</li>
                                <li className='cursor-pointer' 
                                onClick={() => handleRoute("/about")}>About</li>
                                <li className='cursor-pointer'
                                onClick={() => handleRoute("/skills")}
                                >Skills</li>
                                <li className='cursor-pointer'
                                onClick={() => handleRoute("/projects")}
                                >Projects</li>
                            </ul>
                        </div>
                    ) : ""
                }
                {/* {right} */}
                <div className="flex gap-4 items-center">

                    <button className="flex gap-2 items-center w-full  rounded border border-white sm:px-6 px-3 sm:py-2 py-1 text-sm text-white font-semibold hover:text-black hover:bg-white   sm:w-auto transition-all font-['Heebo']"
                    onClick={() => handleRoute("/contact")}
                    >

                        Contact
                        <Contact className='w-4 h-4' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header