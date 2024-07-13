'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const CV = 'http://localhost:3000/CV.pdf';

const Homepage = () => {
  const downloadFileAtURl = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <motion.div 
      className="h-full"
      initial={{ y: "-220vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/2.png" alt="Developer" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-center lg:text-left">
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Junior Full Stack Web Developer</h1>
          {/* DESCRIPTION */}
          <p className="text-base md:text-lg lg:text-xl">Aspiring Junior Web Developer seeking to leverage strong programming skills and practical experience with modern web technologies in a fast-paced and innovative company. Committed to continuous learning and enthusiastic about contributing to meaningful web development projects.</p>
          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => { downloadFileAtURl(CV) }} 
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              Download CV
            </button>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black transition duration-300 ease-in-out transform hover:scale-105">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
