import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

const Footer = () => {
  return (
    <>
      <div id="Contact" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
        <div>
            <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
            <h3 className="text-sm md:text-2xl font-normal">Feel Free To reach out!</h3>
        </div>
        <ul className="text-sm md:text-xl space-y-4">
            <li className="flex items-center gap-2">
                <MdOutlineEmail size={20}/>
                <span className="hover:underline">harshada.k.bhavsar@gmail.com</span> 
            </li>
            <li className="flex items-center gap-2">
                 <CiLinkedin /> 
                 <a href="https://www.linkedin.com/in/harshada-bhavsar-5a8381247/" target="_blank"
                 rel="noopener noreferrer"
                className="hover:underline"
                 > https://www.linkedin.com/in/harshada-bhavsar-5a8381247/</a>
            </li>
            <li className="flex items-center gap-2"> 
                <FaGithub /> 
                <a
                href="https://github.com/harshada-bhavsar" target="_blank"
                rel="noopener noreferrer"
               className="hover:underline"
                >https://github.com/harshada-bhavsar</a>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Footer
