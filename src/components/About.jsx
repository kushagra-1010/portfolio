import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -100 }}
          transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>About 
            <span> Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
            <motion.div 
              whileInView={{opacity:1,x:0}}
              initial= {{opacity:1,x:-100}}
              transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
               <div className="flex items-center justify-center">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/008/045/140/small_2x/hand-drawn-casual-business-man-working-on-laptop-illustration-vector.jpg" alt="" className='rounded-2xl'/>
               </div>
            </motion.div>
            <motion.div 
               whileInView={{opacity:1,x:0}}
               initial= {{opacity:1,x:100}}
               transition={{duration:0.5}}
            className="w-full lg:w-1/2">
                  <div className="flex justify-center lg:justify-start">
                    <p className='my-2 max-w-xl py-5 '>Hi there! I'm Kushagra Saxena, a passionate web developer with a knack for creating dynamic and responsive websites that delight users. My journey 
                        into web development began six years ago when I built my first personal blog. Since then, I've been captivated by the endless possibilities of the web and the ability to bring
                        ideas to life through code.
                        <br />
                        <h3 className='text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-100 bg-clip-text text-transparent mt-5'>My Expertise</h3>
                        <br/>Front-end Development: HTML, CSS, JavaScript, React, Vue.js
                        <br/>Back-end Development: Node.js, Express, MongoDB, SQL
                        <br></br>Other Technologies: Git, Docker, Webpack, RESTful APIs</p>
                  </div>
               </motion.div>
        </div>
    </div>
  )
}

export default About