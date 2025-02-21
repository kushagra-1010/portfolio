import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { motion } from 'framer-motion'  

const iconVar = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})

const Tech = () => {
  return (
    <div className='border-b border-neutral-500 pb-24'>
        <motion.h1 
          whileInView={{opacity:1,y:0}}
          initial={{opacity:1,y:-100}}
          transition={{duration:1.5}}
          className='my-20 flex items-center justify-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
          Technologies
        </motion.h1>
        
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:1,x:-100}}
          transition={{duration:1.5}}
          className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
              variants={iconVar(4)}
              initial= "initial"
              animate= "animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
              variants={iconVar(6)}
              initial= "initial"
              animate= "animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl text-white'/>
            </motion.div>
            <motion.div 
              variants={iconVar(4)}
              initial= "initial"
              animate= "animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
              variants={iconVar(6)}
              initial= "initial"
              animate= "animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className='text-7xl text-red-500'/>
            </motion.div>
            <motion.div 
              variants={iconVar(4)}
              initial= "initial"
              animate= "animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-cyan-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech