import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div>
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        Contact Me
      </motion.h1>
       <div className="flex flex-col justify-center items-center">
         <h1>Gmail : saxenakushagra34@gmail.com</h1>
         <h2>Phone No. : +91 8077240947</h2>
       </div>
    </div>
  )
}

export default Contact