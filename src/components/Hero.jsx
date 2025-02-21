import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 bg-clip-text text-transparent">
              Kushagra Saxena
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Hi, I'm a dedicated web developer with a passion for building
              dynamic and responsive websites. Over the years, I’ve honed my
              skills in HTML, CSS, JavaScript, and various frameworks such as
              React and Angular. My journey began when I created my first
              personal blog back in high school, and since then, I've been
              captivated by the endless possibilities of web development. I
              thrive on turning complex problems into elegant solutions and love
              to stay up-to-date with the latest trends and technologies in the
              field. Whether it's front-end design or back-end logic, I enjoy
              every aspect of the development process and take pride in
              delivering high-quality work that meets user needs.
            </motion.span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
