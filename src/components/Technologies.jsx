import React, { Component } from "react";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export class Technologies extends Component {
  render() {
    return (
      <div className="border-b border-neutral-500 pb-24">
        <motion.h2 initial={{opacity:0,y:-100}} whileInView={{opacity:1, y:0}} transition={{delay:0.2,duration:0.8}}  className="my-20 text-center text-4xl">Techonologies</motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >

          <motion.div
            variants={iconVarients(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <RiHtml5Line className="text-7xl text-red-400" />
          </motion.div>

          <motion.div
            variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <RiCss3Line className="text-7xl text-blue-800" />
          </motion.div>

          <motion.div
            variants={iconVarients(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <RiTailwindCssLine className="text-7xl text-cyan-200" />
          </motion.div>

          <motion.div
            variants={iconVarients(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <RiJavascriptLine className="text-7xl text-yellow-400" />
          </motion.div>

          <motion.div
            variants={iconVarients(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <RiNodejsLine className="text-7xl " />
          </motion.div>

          <motion.div
            variants={iconVarients(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>

          <motion.div
            variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>

          <motion.div
            variants={iconVarients(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <SiExpress className="text-7xl text-slate-400" />
          </motion.div>

          <motion.div
            variants={iconVarients(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <SiMysql className="text-7xl text-orange-300" />
          </motion.div>

          <motion.div
            variants={iconVarients(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <SiPython className="text-7xl text-yellow-300" />
          </motion.div>

          <motion.div
            variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <SiCplusplus className="text-7xl text-blue-800" />
          </motion.div>
          
        </motion.div>
      </div>
    );
  }
}

export default Technologies;
