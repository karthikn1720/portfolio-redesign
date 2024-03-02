import "./App.css";
import CodeHighlight from "./CodeHighLight/CodeHighlight";
import Skills from "./Skills";
import { motion } from "framer-motion";
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
import Reveal from "./Reveal";
import RevealOneByOne from "./RevealOneByOne";

function App() {
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
      designation: "WIMS",
      yearFrom: "Dec 2020",
      yearTo: "Dec 2022",
      desc: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    },
    {
      company: "Byteforza Technologies",
      location: "Coimbatore",
      designation: "Software Engineer",
      yearFrom: "Jan 2023",
      yearTo: "Present",
      desc: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    },
  ];

  return (
    <div className="">
      <motion.div
        animate={{
          height: ["100dvh", "100dvh", "0dvh"],
          opacity: [1, 0, 0],
        }}
        transition={{
          delay: 4,
          duration: 1.5,
        }}
        className="fixed left-0 top-0 bottom-0 right-0 overflow-hidden w-dvw h-dvh  z-20 flex items-center bg-white justify-center"
      >
        <h1 className="z-30 text-white">Hello!</h1>
        <motion.div
          initial={{
            width: "200px",
            height: "200px",
          }}
          animate={{
            scale: [1, 2, 2, 1, 1, 1, 30],
            rotate: [0, 0, 270, 270, 0, 0, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            display: "hidden",
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1, 0.01],
            // repeat: Infinity,
            // repeatDelay: 1,
          }}
          className="absolute bg-red-200  z-20"
        ></motion.div>
      </motion.div>

      <nav className="w-full h-20 absolute z-10  bg-indigo-300 flex justify-between px-20 align-middle">
        <div className="flex items-center">
          <span className="font-bai font-bold">Karthik</span>
        </div>
        <div className="flex items-center">
          <span className="font-bai font-bold">Home</span>
          <span className="font-bai font-bold">Skills</span>
          <span className="font-bai font-bold">Contact Me</span>
        </div>
      </nav>
      <body>
        <section className=" bg-gray-50 h-dvh flex items-center justify-center overflow-hidden px-20">
          <motion.div
            animate={{
              x: 0,
            }}
            transition={{
              duration: 2,
            }}
            className="flex-1 flex flex-col gap-8"
          >
            <div className="">
              <h1 className="text-primary">I am Karthik</h1>
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
          </motion.div>
          <div className="flex-1 flex p-14 justify-center items-center">
            <div className="img bg-gray-400">
              <img src={testImg} alt="" className="img" />
            </div>
          </div>
        </section>
        <section className="px-20 py-32 justify-center text-pri flex flex-col gap-14 items-center">
          <h1>Skills</h1>
          <div className="flex w-full items-center">
            <div className="flex-1 px-5">
              <p className=" text-2xl">
                I'm passionate about technology and always strive to stay at the
                forefront of innovation by learning new technologies and
                upgrading my skills frequently. In today's rapidly evolving
                digital landscape, I believe that continuous learning is key to
                success as a developer. Throughout my career, I've embraced
                challenges and opportunities to expand my skill set, tackle
                complex problems, and deliver impactful solutions.{" "}
              </p>
              <RevealOneByOne>
              I'm passionate about technology and always strive to stay at the
                forefront of innovation by learning new technologies and
                upgrading my skills frequently. In today's rapidly evolving
                digital landscape, I believe that continuous learning is key to
                success as a developer. Throughout my career, I've embraced
                challenges and opportunities to expand my skill set, tackle
                complex problems, and deliver impactful solutions.
              </RevealOneByOne>
            </div>
            <div className="flex-1">
              <Skills items={skills} />
            </div>
          </div>
        </section>
        <section className="px-20 justify-center text-pri flex flex-col gap-8 items-center">
          {/* <h1>Experience</h1> */}
          <Experience details={experience} />
        </section>
        <section className="px-20 w-dvw h-dvh justify-center text-pri flex flex-col gap-8 items-center">
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
        </section>
        <section>
        </section>
      </body>
    </div>
  );
}

export default App;
