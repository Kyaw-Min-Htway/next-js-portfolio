'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {

    const containerRef = useRef(null);
    const skillRef = useRef(null);
    const experienceRef = useRef(null);
    const bioRef = useRef(null);

    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
    const isBioInView = useInView(bioRef, { margin: "-100px" });

    return (
        <motion.div className="h-full" 
            initial={{ y: "-220vh" }} 
            animate={{ y: "0%" }} 
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2" ref={bioRef}>
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY TITLE */}
                        <motion.h1 initial={{ x: "-300px" }} 
                            animate={isBioInView ? { x: 0 } : {}} 
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            BIOGRAPHY
                        </motion.h1>
                        {/* BIOGRAPHY DESC */}
                        <motion.p initial={{ x: "-300px" }} 
                            animate={isBioInView ? { x: 0 } : {}} 
                            transition={{ delay: 0.2 }} 
                            className="text-lg"
                        >
                            Hello, I'm Kyaw Min Htway. I studied physics at Yangon University, and in 2021 I left university, and then I changed my career so I started my Web-development journey. First of all, I studied Html, CSS, and JavaScript on YouTube, and then I taught my first FDC course in the code lab. 
                            I didn't feel sufficient, so after learning The Professional Web Developer Course, I was especially skilled in PHP and Laravel. I studied web development continuously, and now I'm continuing to study React.js, Next.js, and TypeScript. 
                            Over the past two years, I've been deeply immersed in web development, exploring various technologies and frameworks to build responsive and intuitive web applications. 
                            My technical skill set includes proficiency in HTML, CSS, JavaScript, and I have hands-on experience with modern frameworks like React.js. 
                            Looking ahead, I am eager to contribute my skills and enthusiasm to a dynamic team.
                        </motion.p>
                        {/* BIOGRAPHY QUOTE */}
                        <motion.span initial={{ x: "-300px" }} 
                            animate={isBioInView ? { x: 0 } : {}} 
                            transition={{ delay: 0.2 }} 
                            className="italic"
                        >
                            Enthusiastic and detail-oriented Junior Web Developer with a strong foundation in front-end and back-end development. Proficient in modern web technologies and frameworks with a passion for creating responsive, user-friendly websites and web applications. Committed to continuous learning and staying updated with the latest industry trends.
                        </motion.span>
                    </div>
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1 
                            initial={{ x: "-300px" }} 
                            animate={isSkillRefInView ? { x: 0 } : {}} 
                            transition={{ delay: 0.2 }} 
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div initial={{ x: "-300px" }} 
                            animate={isSkillRefInView ? { x: 0 } : {}} 
                            className="flex gap-4 flex-wrap"
                        >
                            {['JavaScript', 'React.js', 'Next.js', 'SCSS', 'Tailwind CSS', 'MongoDB', 'Framer Motion', 'Node.js', 'Laravel', 'PHP', 'MySQL', 'jQuery', 'Ajax', 'HTML', 'CSS', 'Typescript'].map(skill => (
                                <div key={skill} className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">{skill}</div>
                            ))}
                        </motion.div>
                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                        {/* EXPERIENCE TITLE */}
                        <motion.h1 initial={{ x: "-300px" }} 
                            animate={isExperienceRefInView ? { x: 0 } : {}} 
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            Education
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div initial={{ x: "-300px" }} 
                            animate={isExperienceRefInView ? { x: 0 } : {}}  
                            className=""
                        >
                            {[
                                {
                                    title: 'Bachelor Of Science (B.sc)',
                                    description: 'University Of Yangon',
                                    date: '2019-2020',
                                    alignLeft: true
                                },
                                {
                                    title: 'Full Stack Developer Course',
                                    description: 'Code Lab',
                                    date: '2021',
                                    alignLeft: false
                                },
                                {
                                    title: 'Professional Web Developer Course',
                                    description: 'Fairway Technology',
                                    date: '2022',
                                    alignLeft: true
                                },
                                {
                                    title: 'JLPT N4',
                                    description: 'Power Japanese Language School',
                                    date: '2022',
                                    alignLeft: false
                                }
                            ].map((exp, index) => (
                                <div key={index} className="flex justify-between h-48">
                                    {exp.alignLeft ? (
                                        <>
                                            <div className="w-1/3">
                                                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">{exp.title}</div>
                                                <div className="p-3 text-md italic">{exp.description}</div>
                                                <div className="p-3 text-red-400 text-sm font-semibold">{exp.date}</div>
                                            </div>
                                            <div className="w-1/6">
                                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                                </div>
                                            </div>
                                            <div className="w-1/3"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-1/3"></div>
                                            <div className="w-1/6">
                                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                                </div>
                                            </div>
                                            <div className="w-1/3">
                                                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">{exp.title}</div>
                                                <div className="p-3 text-md italic">{exp.description}</div>
                                                <div className="p-3 text-red-400 text-sm font-semibold">{exp.date}</div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 xl:w-1/2"></div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
