import React, { Component } from "react";
import { PROJECTS } from "../contents";
import { motion } from "framer-motion";

export class Projects extends Component {
  render() {
    return (
      <div className="border-b border-neutral-400 pb-4">
        <motion.h2 initial={{opacity:0,y:-100}} whileInView={{opacity:1, y:0}} transition={{delay:0.2,duration:0.8}} className="my-20 text-center text-4xl">Projects</motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="flex flex-wrap mb-8 lg:justify-center align-middle "
            >
              <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{delay:0, duration:0.5}}  className="w-full lg:w-1/4">
                <a href={project.liveLink} target="_blank"><img
                  src={project.image}
                  alt={project.title}
                  className="w-96 mb-6 rounded"
                /></a>
              </motion.div>
              <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:300}} transition={{delay:0, duration:0.5}}  className="w-full max-w-xl lg:w-3/4 lg:mx-24 ">
                <h6 className="mb-2 font-semibold"><a href={project.repoLink} target="_blank">{project.title}</a></h6>
                <p className="mb-2 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap mb-4 lg:mb-0">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
