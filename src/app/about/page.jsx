'use client';

import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div className="h-full" 
        initial={{y:"-220vh"}} 
        animate={{y:"0%"}} 
        transition={{duration:1}}
      >
        {/* CONTAINER */}
        <div className="">
          {/* TEXT CONTAINER  */}
          <div className="p-4 sm:p-8 md:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
            {/* BIOGRAPHY CONTAINER */}
            <div className="flex flex-col gap-12 justify-center">
                {/* BIOGRAPHY TITLE */}
              <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                {/* BIOGRAPHY DESC */}
              <p className="text-lg">
                Lorem ipsum dollar sit amet consectetur adipisicing elit. Nostrum 
                harum quibusdam cupiditate nobis accusamus sed aut aperiam,
                reiciendis Vel dolaremque numquam quam nuhil.
              </p>
                {/* BIOGRAPHY QUOTE */}
              <span className="italic">
                Lorem ispum dolar sit amet consectetur adipisicing elit.
              </span>
            </div>
            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-12 justify-center">
              {/* SKILL TITLE */}
              <h1 className="font-bold text-2xl">SKILLS</h1>
              {/* SKILL LIST */}
              <div className="flex gap-4 flex-wrap">
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
              </div>
            </div>
            {/* EXPERIENCE CONTAINER */}
            <div className="flex flex-col gap-12 justify-center pb-48">
              {/* EXPERIENCE TITLE */}
              <h1 className="font-bold text-2xl">EXPERIENCE</h1>
              {/* EXPERIENCE LIST ITEM */}
              <div className="">
                {/* LEFT */}
                {/* CENTER */}
                {/* RIGHT */}
              </div>
            </div>
          </div>
          {/* SVG CONTAINER */}
          <div className="hidden"></div>
        </div>
      </motion.div>
    )
}

export default AboutPage