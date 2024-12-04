import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact} from "react-icons/fa";
// import { SiRadis } from 'react-icons/si';
import {SiMongodb} from "react-icons/si";
const Experience = () => {
  return (
    <>
      <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50}/>
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50}/>
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50}/>
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50}/>
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50}/>
        </span>
        
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50}/>
        </span>
        {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRadis color="#FF4438" size={50}/>
        </span> */}
        </div>

        <div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
                <h2 className="leading-tight">Web Developer Intern, NexaByteOrg</h2>
                <p className="text-sm leading-tight font-thin">Sep 2023 - Oct-2023</p>
                <ul className="text-sm p-2">
                    <li>Work As Web Developer Intern</li>
                    <li>Developed Frontend projects using HTML, CSS, JavaScript, ReactJS, TailwindCSS, and Git.</li>
                </ul>
            </span>
        </div>

        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
                <h2 className="leading-tight">Python Intern, Dezignolics</h2>
                <p className="text-sm leading-tight font-thin">June 2023 - July-2023</p>
                <ul className="text-sm p-2">
                    <li>Work As Python Intern</li>
                    <li>Work With GIT, Pre-processing of data, EDA and ML Projects</li>
                </ul>
            </span>
        </div>

        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
                <h2 className="leading-tight">Python Intern, MSME</h2>
                <p className="text-sm leading-tight font-thin">Aug 2021 - Sep 2021</p>
                <ul className="text-sm p-2">
                    <li>Work As Python Intern</li>
                    <li>Work With Python Programming Language And Projects.</li>
                </ul>
            </span>
        </div>


        </div>
      </div>
      
      </div>
    </>
  )
}

export default Experience
