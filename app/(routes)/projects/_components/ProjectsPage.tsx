"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce-Firebase",
      description: "A full-stack e-commerce application with Firebase.",
      image: '/ecommerce.png',
      link: "http://e-commerce-deploy.netlify.app",
    },
    {
      title: "FlowBoard – Real-Time Visual Canvas ",
      description: "Developed a real-time collaborative technical design and documentation.",
      image: '/eraser.png',
      link: "https://eraser-application.vercel.app/",
    },
    {
      title: "Bios - Generator",
      description: "An AI-powered tool that creates personalized social media bios based on your name, profession, interests, and skills.",
      image: '/Bio.png',
      link: "https://eraser-application.vercel.app/",
    },
    {
      title: "SmartTalk ChatBot",
      description: "SmartTalk is an AI-powered chatbot built using the MERN stack, enabling seamless real-time communication. It features intelligent responses, user authentication, and a modern, intuitive interface.",
      image: '/chatbot.webp',
      link: "https://smarttalk-chatbot-ai.netlify.app/",
    },
    {
      title: "TwitterBioGenerator",
      description: "A smart and user-friendly tool built with Next.js Tailwind and Together ai that crafts creative, professional, and engaging Twitter bios in seconds. This generator offers personalized bio suggestions tailored to your selected vibe, such as professional, casual, or funny.",
      image: '/twitter.png',
      link: "https://twitter-bio-generator--sooty.vercel.app/",
    },
    {
      title: "Real-Time-Chat-App",
      description: "A chat application built with MERN stack and WebSocket for real-time communication.",
      image: '/chatapp.jpg',
      link: "https://github.com/CodeSagarrr/-Real-Time-Chat-Application-",
    },
    {
      title: "IMDB_CLONE",
      description: "This project is dedicated to gaining a deep understanding of React.js and Tailwind CSS.",
      image: '/movie.webp',
      link: "https://imdbclone-deploy.netlify.app",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <div className="flex sm:flex-row flex-col">

        <div className="sm:py-20 py-8 px-6  text-white flex flex-col w-full items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Image src={project.image} alt={project.title} width={600} height={600} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-2xl font-bold text-yellow-500 font-['Signika'] mb-2">{project.title}</h3>
                  <p className="text-[13px] font-['Signika']">{project.description}</p>
                  <a href={project.link} rel="noopener noreferrer" className="mt-2 inline-block bg-white font-['Signika'] hover:bg-gray-400 transition-all text-black font-semibold py-1 px-3 rounded">
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="sm:mt-14 mt-6 bg-white font-['Signika'] hover:bg-gray-400 transition-all text-black font-semibold py-2 px-6 rounded-lg"
          >
            <a href="https://github.com/CodeSagarrr"> Github</a>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
