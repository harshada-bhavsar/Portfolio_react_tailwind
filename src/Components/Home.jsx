import image from '../assets/Profil_photo_1.jpeg';
import TextChange from './TextChange';
const Home = () => {
  return (
    <>
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
            <div className="md:w-1/2 md:pt-10">
            <h1 className="bg-gradient-to-r from-blue-500 to-purple-700 text-transparent bg-clip-text text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter"> <TextChange /> </h1>
            <p className="text-sm md:text-2xl tracking-tight">Crafting seamless user experiences with code, creativity, and clean design.</p>
            <button className="mt-5 md:mb-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
             onClick={() => document.getElementById("Contact").scrollIntoView({ behavior: "smooth" })}>
                Contact Me
            </button>
            </div>
            <div><img className="rounded-full" src={image} alt="" /></div>
        </div>
    
    </>
  )
}

export default Home

// remaining download button , contact, and demo 
