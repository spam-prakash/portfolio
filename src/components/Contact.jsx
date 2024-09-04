import React, { Component } from 'react'
import { CONTACT } from '../contents'
import { motion } from 'framer-motion'

export class Contact extends Component {
  render() {
    return (
      <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 initial={{opacity:0,y:-50}} whileInView={{opacity:1, y:0}} transition={{delay:0,duration:0.5}} className='my-10 text-center text-4xl'>Contact Me</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="my-4">{CONTACT.address}</motion.p>
            <motion.p initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="mailto:prakashkumar01031975@gmail.com" className="my-4">{CONTACT.email}</a>
        </div>
      </div>
    )
  }
}

export default Contact