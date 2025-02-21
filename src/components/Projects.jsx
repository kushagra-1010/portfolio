import React from "react";
import Amazon from "../assets/Amazon.png"; 
import Juspay from "../assets/Juspay.png"// Ensure this path is correct
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
      >
        Projects
      </motion.h1>
      <div className="flex flex-col items-center md:flex-row justify-center">
        <img src={Amazon} alt="Amazon Project" className="w-full max-w-md mb-4 md:mb-0" />
        <motion.div 
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center md:items-start md:ml-5 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-sans bg-gradient-to-t from-purple-300 to-blue-400 bg-clip-text tracking-tight text-transparent"> Amazon</h2>
          <div className="mt-3 text-sm md:text-base">
            This project is a clone of the Amazon e-commerce website built using
            HTML, CSS, and JavaScript. It features a dynamic homepage, product
            listings with filter and sort options, detailed product pages, and a
            shopping cart with add/remove functionality. The project highlights
            responsive design techniques, ensuring a seamless experience across
            devices, and demonstrates proficiency in front-end development. The
            user interface is designed to be clean and intuitive, with
            interactive elements that enhance the overall user experience.
          </div>
          <button className="border-1 rounded-xl w-28 h-12 bg-white text-black mt-5 p-2">
            <a href="https://github.com/kushagra-1010/Amazon-Clone">Github</a>
          </button>
        </motion.div>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-center mt-10">
        <img src={Juspay} alt="Amazon Project" className="w-full max-w-md mb-4 md:mb-0" />
        <motion.div 
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center md:items-start md:ml-5 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl bg-gradient-to-t from-purple-300 to-blue-400 bg-clip-text tracking-tight text-transparent"> Juspay</h2>
          <div className="mt-3 text-sm md:text-base">
            This project is a clone of the Juspay payment gateway, built using
            HTML, CSS, Tailwind CSS, and JavaScript. It features a secure and
            user-friendly payment form, integration with Juspay's payment API,
            and a transaction history page. The project emphasizes responsive
            design, ensuring compatibility across various devices. It highlights
            skills in front-end development, particularly with Tailwind CSS for
            efficient styling and JavaScript for dynamic content. The user
            interface is designed to be clean and intuitive, providing a
            seamless payment experience while prioritizing security.
          </div>
          <button className="border-1 rounded-xl w-28 h-12 bg-white text-black mt-5 p-2">
            <a href="https://github.com/kushagra-1010/Juspay-Clone">Github</a>
          </button>
        </motion.div>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-center mt-10 hidden">
        <img src={Amazon} alt="Amazon Project" className="w-full max-w-md mb-4 md:mb-0" />
        <div className="flex flex-col items-center md:items-start md:ml-5 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold font-mono">Amazon</h2>
          <div className="mt-3 text-sm md:text-base">
            Description of the Amazon project goes here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

