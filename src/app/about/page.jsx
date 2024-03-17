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
        <div className="h-full overflow-scroll lg:flex">
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
              {/* EXPERIENCE LIST */}
              <div className="">
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
              <div className="">
                {/* LEFT */}
                <div className="">
                  {/* JOB TITLE */}
                  <div className="">
                    Junior Javascript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="">
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className="">
                    2024 - Present
                  </div>
                </div>
                {/* CENTER */}
                <div className="">
                  {/* LINE  */}
                  <div className="">
                    {/* LINE CIRCCLE */}
                    <div className=""></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className=""></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="">
                {/* LEFT */}
                <div className="">
                  {/* JOB TITLE */}
                  <div className="">
                    Junior Javascript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="">
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className="">
                    2024 - Present
                  </div>
                </div>
                {/* CENTER */}
                <div className="">
                  {/* LINE  */}
                  <div className="">
                    {/* LINE CIRCCLE */}
                    <div className=""></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="">
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
              </div>
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