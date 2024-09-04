import React, { Component } from "react";
import dp from "../assets/img/DP.gif";
import { ABOUT_TEXT } from "../contents";
import { motion } from "framer-motion";

export class About extends Component {
  render() {
    return (
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h1>
        <div className="flex flex-wrap">
          <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{delay:0.2, duration:0.6}} className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img src={dp} alt="" className="w-96 rounded-2xl" />
            </div>
          </motion.div>
          <div className="w-full lg:w-1/2">
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{delay:0.2, duration:0.6}} className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 ">{ABOUT_TEXT}</p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
