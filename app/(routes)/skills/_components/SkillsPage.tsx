"use client"
import React from 'react'
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiTailwindcss , SiNextdotjs , SiExpress , SiTypescript  } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import { RiFirebaseFill } from 'react-icons/ri';
const SkillsPage = () => {

 
    const skills = [
        { name: "HTML5", icon: <FaHtml5  className="text-orange-600" />, color: "bg-orange-100 text-slate-800" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, color: "bg-blue-200 text-slate-800" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, color: "bg-yellow-100 text-slate-800" },
        { name: "TypeScript", icon: <SiTypescript  className="text-sky-600" />, color: "bg-sky-200  text-slate-800"  },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-600" />, color: "bg-teal-100 text-slate-800" },
        { name: "React.js", icon: <FaReact className="text-sky-500" />, color: "bg-blue-100  text-slate-800" },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, color: "bg-green-100 text-slate-800" },
        { name: "Express.js", icon: <SiExpress  className="text-black" />, color: "bg-white  text-black"  },
        { name: "Next.Js", icon: <SiNextdotjs  className="text-white" />, color: "bg-black  text-white"  },
        { name: "PostgresSQL", icon: <BiLogoPostgresql  className="text-blue-500" />, color: "bg-blue-200  text-slate-800"  },
        { name: "MongoDB", icon: <BiLogoMongodb  className="text-green-600" />, color: "bg-green-200 text-slate-800" },
        { name: "FireBase", icon: <RiFirebaseFill  className="text-[#FF9100]" />, color: "bg-yellow-100  text-slate-800"  },         
    ];

    return (
        <>
            <div className='flex  sm:flex-row flex-col'>

                <div className="sm:py-16 md:py-20 py-4 text-white flex flex-col w-full items-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className={`p-6 rounded-lg shadow-lg ${skill.color} flex flex-col items-center transform transition duration-300 hover:scale-105`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="text-6xl mb-4">{skill.icon}</div>
                                <h3 className="text-xl font-bold font-['Signika']">{skill.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default SkillsPage