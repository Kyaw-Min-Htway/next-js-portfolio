'use client';

import { delay, motion, useInView, useScroll } from "framer-motion";
import { Dekko } from "next/font/google";
import { useRef } from "react";

const AboutPage = () => {

    const containerRef = useRef()

    const { scrollYProgress } = useScroll({container:containerRef})

    const skillRef = useRef()
    const isSkillRefInView = useInView(skillRef, {margin:"-100px"});
    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, {margin: "-100px"});
    const bioRef = useRef();
    const isBioInView = useInView(bioRef, {margin: "-100px"})
    return (
        <motion.div className="h-full" 
        initial={{y:"-220vh"}} 
        animate={{y:"0%"}} 
        transition={{duration:1}}
      >
        {/* CONTAINER */}
        <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
          {/* TEXT CONTAINER  */}
          <div className="p-4 sm:p-8 md:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2" ref={bioRef}>
            {/* BIOGRAPHY CONTAINER */}
            <div className="flex flex-col gap-12 justify-center">
                {/* BIOGRAPHY TITLE */}
              <motion.h1 initial={{ x:"-300px" }} 
                animate={ isBioInView ? { x: 0 } : {}} 
                transition={{delay:0.2}}
                className="font-bold text-2xl">BIOGRAPHY</motion.h1>
                {/* BIOGRAPHY DESC */}
              <motion.p initial={{ x:"-300px" }} 
                animate={ isBioInView ? { x: 0 } : {}} transition={{delay: 0.2}} className="text-lg">
                Lorem ipsum dollar sit amet consectetur adipisicing elit. Nostrum 
                harum quibusdam cupiditate nobis accusamus sed aut aperiam,
                reiciendis Vel dolaremque numquam quam nuhil.
              </motion.p>
                {/* BIOGRAPHY QUOTE */}
              <motion.span initial={{ x:"-300px" }} 
                animate={ isBioInView ? { x: 0 } : {}} transition={{delay: 0.2}} className="italic">
                Motivated Junior Web Developer with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, and React. Proven ability to collaborate effectively in a team environment and deliver high-quality code. Eager to contribute to dynamic web development projects and further hone technical skills in a challenging role.
              </motion.span>
            </div>
            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
              {/* SKILL TITLE */}
              <motion.h1 
                initial={{ x:"-300px" }} 
                animate={ isSkillRefInView ? { x: 0 } : {}} 
                transition={{ delay:0.2 }} 
                className="font-bold text-2xl"
              >
                SKILLS
              </motion.h1>
              {/* SKILL LIST */}
              <motion.div initial={{ x:"-300px" }} 
                animate={ isSkillRefInView ? { x: 0 } : {}} 
                className="flex gap-4 flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SCSS</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Laravel</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Php</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Msql</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Jquery</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Ajax</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Html</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Css</div>
              </motion.div>
            </div>
            {/* EXPERIENCE CONTAINER */}
            <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
              {/* EXPERIENCE TITLE */}
              <motion.h1 initial={{ x:"-300px" }} 
                animate={ isExperienceRefInView ? { x: 0 } : {}} 
                transition={{delay: 0.2 }}
                className="font-bold text-2xl">EXPERIENCE</motion.h1>
              {/* EXPERIENCE LIST */}
              <motion.div initial={{ x:"-300px" }} 
                animate={ isExperienceRefInView ? { x: 0 } : {}}  
                className="">
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semiblod rounded-b-lg rounded-s-lg">
                    Junior Javascript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semiblod rounded-b-lg rounded-s-lg">
                    Junior Javascript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semiblod rounded-b-lg rounded-s-lg">
                    Junior Javascript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                </div>
              </div>
              </motion.div>
            </div>
          </div>
          {/* SVG CONTAINER */}
          <div className="hidden lg-block w-1/3 xl:1-2"></div>
        </div>
      </motion.div>
    )
}

export default AboutPage