'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id:1,
    color: "from-gold-300 to-violet-300",
    title: "First Website",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    img: "/2.png",
    link: "https://motivate-iota.vercel.app/",
    target: "_blank"
  },
  {
    id:2,
    color: "from-red-300 to-violet-300",
    title: "Hangman",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    img: "/2.png",
    link: "https://sample-project-snowy.vercel.app/",
    target: "_blank"
  },
  {
    id:3,
    color: "from-blue-300 to-violet-300",
    title: "Third Website",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    img: "/2.png",
    link: "https://lama.dev"
  },
  {
    id:4,
    color: "from-purple-300 to-violet-300",
    title: "Fourth website",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    img: "/2.png",
    link: "https://lama.dev"
  }
];

const PortfolioPage = () => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%","-80%"]);
    
  return (
        <motion.div 
          className="h-full" 
          initial={{y: "-200vh" }} 
          animate={{y: "0%" }} 
          transition={{ duration:1 }}
         >
        <div className="h-[600vh] relative" ref={ref}>
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
            My works
          </div>
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
           <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
           {items.map((item) => (
              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                <div className="flex flex-col gap-8 text-white ">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:text-lg lg:w-[500px] xl:w-[600px]">{item.desc}</p>
                  {item.link && (
                   <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                   </Link>
                  )}
                </div>
              </div>
            ))}
           </motion.div>
          </div>
        </div>
           <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
            <h1>Do you have a project?</h1>
            <Link href="/content">
            <div className="relative">
              <motion.svg animate={{rotate:360}} transition={{duration:8, ease:"linear", repeat:Infinity }} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60, 60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
                    />
                </defs>
                <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl">Full Stack Web Developer</textPath>
                </text>
              </motion.svg>
              <button><Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">Hire Me</Link></button>
          </div>
            </Link>
        </div>
      </motion.div>
    );
};

export default PortfolioPage;