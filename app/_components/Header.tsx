"use client"
import { cn } from '@/lib/utils';
import { Contact, Menu, X } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { usePathname } from "next/navigation"


const Header = () => {
    const href = usePathname();
    const nav = [
        { id: 1, title: 'Home', path: '/' , active: href === '/'},
        { id: 2, title: 'About', path: '/about' ,active: href === '/about'},
        { id: 3, title: 'Skills', path: '/skills' , active: href === '/skills' },
        { id: 4, title: 'Projects', path: '/projects' , active: href === '/projects'},
    ]
    const [menu, setMenu] = useState<boolean>(false);

    return (
        <div>
            <div className='w-full h-24 flex items-center justify-around px-4 py-4 '>
                {/* {Left} */}
                <div className='flex gap-2 items-center'>
                    <Image src={'/Code3.png'} alt='User' width={36} height={36} className='bg-transparent rounded-full' />
                    <h1 className='sm:text-[1.4rem] text-[1.2rem] font-extrabold font-["Heebo"]'>CodeSagarr</h1>
                </div>
                {/* {center} */}
                <span className='sm:hidden block ml-20 cursor-pointer '
                    onClick={() => setMenu(!menu)}
                >{menu ? <X className='w-7 h-7 mr-3' /> : <Menu className='w-7 h-7 mr-3' />}
                </span>

                <div className='sm:block hidden'>
                    <ul className='flex items-center gap-10 text-[16px] font-extrabold font-["Heebo"]'>
                        {
                            nav.map((nav:any, i:number) => (
                                <Link href={nav.path} key={i}><li className={cn(
                                    `cursor-pointer transition-colors `,
                                    nav.active ? "bg-white px-5 py-1 text-black rounded-sm transition-all" : "text-white"
                                )}
                                >{nav.title}</li></Link>
                            ))
                        }

                    </ul>
                </div>

                {
                    menu ? (
                        <div className='absolute z-10 sm:hidden block top-20 rounded-sm bg-black w-full py-6'>
                            <ul className='flex flex-col items-center gap-8 text-[16px] font-extrabold font-["Heebo"]'>
                                {
                                    nav.map((nav, i) => (
                                        <Link href={nav.path} key={i}><li className={cn(
                                            `cursor-pointer transition-colors `,
                                            nav.active ? "bg-white px-5 py-1 text-black rounded-sm transition-all" : "text-white"
                                        )}
                                        >{nav.title}</li></Link>
                                    ))
                                }
                            </ul>
                        </div>
                    ) : ""
                }
                {/* {right} */}
                <div className="flex gap-4 items-center">

                    <Link href="/contact" className="flex gap-2 items-center w-full  rounded border border-white sm:px-6 px-3 sm:py-2 py-1 text-sm text-white font-semibold hover:text-black hover:bg-white   sm:w-auto transition-all font-['Heebo']"
                    >

                        Contact
                        <Contact className='w-4 h-4' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header