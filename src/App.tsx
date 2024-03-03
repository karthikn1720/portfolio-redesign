import "./App.css";
import CodeHighlight from "./CodeHighLight/CodeHighlight";
import Skills from "./Skills";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  scroll,
} from "framer-motion";
import Experience from "./Experience";

//images
import testImg from "./assets/bg-1.jpg";
import reactLogo from "./assets/react-logo.svg";
import angularLogo from "./assets/angular.svg";
import nestLogo from "./assets/nestjs.svg";
import nodeLogo from "./assets/nodejs.svg";
import sqlLogo from "./assets/postgres.svg";
import mongoLogo from "./assets/mongodb.svg";
import csharpLogo from "./assets/csharp.svg";
import dotnetLogo from "./assets/dotnetcore.svg";
import a10002 from "./assets/10002.jpg";
import manSittingInDesk from "./assets/4002783-ai.svg";
import Reveal from "./Reveal";
import RevealOneByOne from "./RevealOneByOne";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "./InfiniteScroll";
import Atom from "./components/Atom";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Velocity from "./components/Velocity";
import ChangeTextColorOneByOne from "./components/ChangeTextColorOneByOne";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const skills = [
    { name: "React JS", level: 9, icon: reactLogo },
    { name: "Angular", level: 8, icon: angularLogo },
    { name: "Node JS", level: 8, icon: nodeLogo },
    { name: "Nest JS", level: 8, icon: nestLogo },
    { name: "MongoDB", level: 7, icon: mongoLogo },
    { name: "SQL", level: 8, icon: sqlLogo },
    { name: ".NET Core", level: 5, icon: dotnetLogo },
  ];

  const experience = [
    {
      company: "Wipro Limited",
      location: "Chennai",
      designation: "Mainframe Devops",
      yearFrom: "Dec 2020",
      yearTo: "Dec 2022",
      desc: [
        `Responsible for deploying packages to test environments and
other infra related activities like recycling the CICSes, Data
copy, etc`,
        `Scheduled mainframe jobs in workload scheduler LTP, Pulling
the batch and Working with Dev teams to fix the abended jobs.`,
        `Used VBA to automate report tasks`,
      ],
    },
    {
      company: "Wipro Limited",
      location: "Chennai",
      designation: "Frontend Developer",
      yearFrom: "Dec 2020",
      yearTo: "Dec 2022",
      desc: [
        `Created responsive HTML email templates.`,
        `Collaborated closely with the team to implement new features.`,
        `Executed UI-related changes to improve the user experience and bug fixes`,
      ],
    },
    {
      company: "Byteforza Technologies",
      location: "Coimbatore",
      designation: "Fullstack Developer",
      yearFrom: "Jan 2023",
      yearTo: "Present",
      desc: [
        `Developed and maintained web application using React and
Nest.js, providing robust and scalable solutions to meet client
requirements.`,
        `Successfully delivered new features within deadlines, meeting
client expectations.`,
        `Optimized APIs for improved performance.`,
        `Implemented highly responsive frontend features`,
        `Worked on database table migrations.`,
        `Ensured adherence to the project's code style and coding
standards, promoting code quality and maintainability.`,
      ],
    },
  ];

  const section1Ref = useRef(null);
  const section2Scroll = useScroll({
    target: section1Ref,
    offset: ["start center", "end end"],
  });

  const scaleX = useTransform(
    section2Scroll.scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 3, 3, 1],
    {}
  );

  const sectionMainRef = useRef(null);
  const scrollMain = useScroll({
    target: sectionMainRef,
    offset: ["start start", "end end"],
  });
  scrollMain.scrollYProgress.on("change", (v) => {
    const ele = document.getElementById("maintext")?.children;
    const len = Math.round(v * 12);
    if (ele) {
      for (let index = 0; index < ele.length; index++) {
        const element = ele[index];
        if (len > index && element.className) {
          element.className = "text-red-500";
        } else {
          element.className = "text-red-300";
        }
      }
    }
  });
  const mainTextTransform = useTransform(
    scrollMain.scrollYProgress,
    [0, 1],
    [0, window.innerWidth / 2]
  );

  const sectionSkills = useRef(null);
  const scrollSkills = useScroll({
    target: sectionSkills,
    offset: ["start start", "end end"],
  });
  const skillsTransform = useTransform(
    scrollSkills.scrollYProgress,
    [0, 1],
    [0, window.innerWidth / 2]
  );

  const expSection = useRef(null);
  const expScroll = useScroll({
    target: expSection,
    offset: ["start start", "end end"],
  });
  const expTransform = useTransform(
    expScroll.scrollYProgress,
    [0, 1],
    [window.innerHeight / 2, 0]
  );

  const Loader = (
    <motion.div
      animate={{
        opacity: [1, 0, 0],
      }}
      transition={{
        delay: 4,
        duration: 1.5,
      }}
      onAnimationComplete={() => setIsLoading(false)}
      className="fixed left-0 top-0 bottom-0 right-0 overflow-hidden w-dvw h-dvh  z-20 flex items-center bg-white justify-center"
    >
      <h1 className="z-30 text-white">Hello!</h1>
      <motion.div
        initial={{
          width: "200px",
          height: "200px",
        }}
        animate={{
          rotate: [0, 0, 270, 270, 0, 0, 0],
          width: [
            "20dvw",
            "30dvw",
            "30dvw",
            "20dvw",
            "20dvw",
            "20dvw",
            "150dvw",
          ],
          height: [
            "20dvw",
            "30dvw",
            "30dvw",
            "20dvw",
            "20dvw",
            "20dvw",
            "150dvw",
          ],
          borderRadius: ["20%", "20%", "50%", "50%", "0%"],
          display: "hidden",
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1, 0.01],
        }}
        className="absolute bg-red-200  z-20"
      ></motion.div>
    </motion.div>
  );

  return (
    <ReactLenis root>
      <div className="">
        {isLoading && Loader}
        <nav className="w-full h-20 absolute z-10   flex justify-between px-20 align-middle">
          <div className="flex items-center">
            <span className="font-bai font-bold">Karthik</span>
          </div>
          <div className="flex items-center">
            <span className="font-bai font-bold">Home</span>
            <span className="font-bai font-bold">Skills</span>
            <span className="font-bai font-bold">Contact Me</span>
          </div>
        </nav>
        <div>
          <section
            ref={sectionMainRef}
            id="main"
            className="w-full relative h-3dvh"
          >
            <div className="w-full sticky top-0 h-dvh flex items-center justify-center overflow-hidden">
              <motion.div className="flex-1">
                <div className=" pl-20  flex flex-col gap-8">
                  <div className="flex flex-col">
                    {/* <h1 className="text-primary">I am Karthik</h1> */}
                    <h1 id="maintext" className="">
                      {"I am Karthik".split("").map((child, i) => {
                        return (
                          <motion.span key={i} className="text-red-300">
                            {child}
                          </motion.span>
                        );
                      })}
                    </h1>
                    <h2 className="text-primary">A Full stack developer</h2>
                  </div>
                  <p>
                    with a keen interest in building innovative solutions and
                    exploring the endless possibilities of technology.
                  </p>
                  <div className="">
                    <button className="btn-primary">Get in touch</button>
                    <button className=" btn-secondary">View my Github</button>
                  </div>
                </div>
              </motion.div>
              <motion.div className="w-6/12 flex-1">
                <img src={a10002} alt="" />
              </motion.div>
              <motion.div
                className="absolute h-full top-0 right-0 bg-black"
                style={{ width: mainTextTransform }}
              ></motion.div>
              <motion.div
                className="absolute w-full bottom-0 right-0 bg-black opacity-50"
                style={{ height: mainTextTransform }}
              ></motion.div>
              <motion.div
                className="absolute w-full top-0 right-0 bg-red-300 opacity-50"
                style={{ height: mainTextTransform }}
              ></motion.div>
              <motion.div
                className="absolute h-full top-0 left-0 bg-indigo-400 opacity-50"
                style={{ width: mainTextTransform }}
              ></motion.div>
            </div>
          </section>

          <motion.div className="h-3dvh relative" ref={section1Ref}>
            <motion.div className=" sticky top-1/2" style={{ scale: scaleX }}>
              <Velocity />
            </motion.div>
          </motion.div>
          <section ref={sectionSkills} className=" relative h-3dvh bg-black ">
            <motion.div className="px-20 h-dvh sticky top-0 bg-white justify-center text-pri flex flex-col gap-14 items-center">
              <h1 className="text-heading">Skills</h1>
              <div className="flex w-full items-center   bg-white">
                <div className="flex-1">
                  <div className="img w-2/3">
                    <img src={testImg} alt="" className="img" />
                  </div>
                  <div className="flex-1 px-5 pt-3">
                    <RevealOneByOne>
                      I'm passionate about technology and always strive to stay
                      at the forefront of innovation by learning new
                      technologies and upgrading my skills frequently. In
                      today's rapidly evolving digital landscape, I believe that
                      continuous learning is key to success as a developer.
                      Throughout my career, I've embraced challenges and
                      opportunities to expand my skill set, tackle complex
                      problems, and deliver impactful solutions.
                    </RevealOneByOne>
                  </div>
                </div>
                <div className="flex-1">
                  <Skills items={skills} />
                </div>
              </div>
              <motion.div
                className="absolute h-full top-0 left-0 bg-black"
                style={{ width: skillsTransform }}
              ></motion.div>
              <motion.div
                className="absolute h-full top-0 right-0 bg-black"
                style={{ width: skillsTransform }}
              ></motion.div>
            </motion.div>
          </section>
          <section className="relative bg-black">
            <div className=" top-0 text-pri flex flex-col gap-8 items-center px-20">
              <Experience details={experience} />
            </div>
          </section>
          <section ref={expSection} className="h-3dvh relative bg-white">
            <div className="px-20 sticky top-0 w-dvw h-dvh justify-center text-pri flex flex-col gap-8 items-center">
              <h1 className="text-secondary">Send me a message!</h1>
              <h4 className="text-secondary">
                Got a question or proposal, or just want to say hello? Go ahead.
              </h4>
              <form className=" w-7/12 min-w-lg flex flex-col gap-14">
                <div className="flex flex-row gap-10">
                  <div className="input">
                    <label htmlFor="name">Name</label>
                    <input id="name" className="" type="text" />
                  </div>
                  <div className="input">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" />
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="desc">Description</label>
                  <textarea id="desc" className=" resize-none" />
                </div>
                <button className="btn-secondary">Submit</button>
              </form>
              <motion.div
                className="absolute w-full top-0 left-0 bg-black"
                style={{ height: expTransform }}
              >
                <div className="relative flex justify-center w-full h-full overflow-hidden">
                  <div className=" absolute  -bottom-20 ">
                    <Atom />
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute w-full bottom-0 left-0 bg-black"
                style={{ height: expTransform }}
              >
                <div className="relative flex justify-center w-full h-full overflow-hidden">
                  <div className=" absolute  -top-20 ">
                    <Atom />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          {/* <Atom /> */}
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
