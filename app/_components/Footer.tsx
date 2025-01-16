"use client"
import React from "react";
import { motion } from "framer-motion";
import { Github, Inbox, Instagram, Linkedin, Quote, Twitter } from "lucide-react";

const socialLinks = [
  { icon: <Instagram />, href: "https://www.instagram.com/dev.sgr_/", color: "hover:text-purple-500" },
  { icon: <Linkedin />, href: "https://www.linkedin.com/in/codesagarrr/", color: "hover:text-blue-500" },
  { icon: <Github />, href: "https://github.com/CodeSagarrr", color: "hover:text-gray-600" },
  { icon: <Twitter />, href: "https://www.x.com/dev_sagar_7", color: "hover:text-black" },
  { icon: <Inbox />, href: "/contact", color: "hover:text-red-500" },
];

const Footer = () => {
  return (
    <div className=" text-white  py-6 px-8 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.p
          className="text-[12px] font-bold sm:max-w-[24%] max-w-[98%] sm:mb-0 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
            <Quote className="my-2"/>
          <p>
          "If you believe in yourself as much as we believe in you, nothing can ever stop you from achieving what you want in life."
          </p>
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6 my-4 md:my-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl transition duration-300 ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-gray-400 mt-4 md:mt-0 font-['Signika']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} Portfolio Sagar Vishwakarma. All rights reserved
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;