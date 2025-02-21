import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Resume from '../assets/Resume.pdf';

const Navbar = () => {
  return (
    <nav className='mb-20 flex flex-col md:flex-row items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center mb-4 md:mb-0'>
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className='text-white text-2xl md:text-4xl'
        >
          KUSHAGRA SAXENA
        </motion.h1>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center text-2xl gap-4 mb-4 md:mb-0'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className='mb-2 md:mb-0'
        >
          <a href='https://www.linkedin.com/in/kushagra-saxena10' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='text-blue-600' />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className='mb-2 md:mb-0'
        >
          <a href='https://github.com/kushagra-1010' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='text-white' />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className='mb-2 md:mb-0'
        >
          <a href='https://twitter.com/your-twitter-username' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='text-blue-400' />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className='mb-2 md:mb-0'
        >
          <a href='https://www.instagram.com/https_kushu/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-pink-600' />
          </a>
        </motion.div>
      </div>
      <motion.button 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className='border-1 rounded-md w-28 h-10 flex items-center justify-center bg-gradient-to-r from-pink-300 to-purple-400 text-white pl-4 pr-4 text-sm md:text-base'
      >
        <a href={Resume} download='Resume' className='font-bold'>Download Resume</a>
      </motion.button>
    </nav>
  );
}

export default Navbar;