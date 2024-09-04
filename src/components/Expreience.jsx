import React, { Component } from "react";
import { EXPERIENCES } from "../contents";
import { motion } from "framer-motion";

export class Expreience extends Component {
  render() {
    return (
      <div className="border-b border-neutral-400 pb-4">
        <motion.h2 initial={{opacity:0,y:-100}} whileInView={{opacity:1, y:0}} transition={{delay:0.2,duration:0.8}} className="my-20 text-center text-4xl">Exprerience</motion.h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{delay:0.4, duration:0.9}}  key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </div>
              <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:300}} transition={{delay:0.4, duration:0.9}}  className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{experience.role} - <span className="text-sm text-purple-300">{experience.company}</span> </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
                <div className="flex flex-wrap">
                {experience.technologies.map((tech,index)=>(
                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                ))}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
}

export default Expreience;
