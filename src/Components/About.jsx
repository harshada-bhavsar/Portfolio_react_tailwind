// import { RiDownloadFill } from "@remixicon/react"
const PDF_FILE_URL = 'http://localhost:5173/Resume_harshada_new.pdf';

const About = () => {

  const downloadFile = (url) =>{
    fetch(url).then(response=>response.blob()).then(blob=>{
      const blobUrl =  window.URL.createObjectURL(new Blob([blob]))
      const fileName = url.split('/').pop();
      const aTag =  document.createElement('a');
      aTag.href  = blobUrl;
      aTag.setAttribute('download', fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    })
   
  }
    return (
      <>
     
  
          <div id="About" className="text-white flex items-center justify-center mb-10">
             <h2 className="text-2xl md:text-4xl font-bold">About</h2>
             </div>
  <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
              
              <div className="md:w-1/2 md:pt-10">
              <p className="text-sm md:text-lg tracking-wide text-justify">Hi, I am Harshada Bhavsar, a Computer Engineering student at Bharat College of Engineering with a Diploma in IT from Government Polytechnic Thane. I enjoy solving technical challenges, designing software applications, and working in team environments. Skilled in frontend technologies like HTML, CSS, JS, ReactJS, TailwindCSS, Python and backend , I’m passionate about creating innovative solutions.</p>
              </div>
  
              <div className="flex justify-center items-center mb-2">
                <button onClick={()=>{downloadFile(PDF_FILE_URL)}} className="mt-5 md:mb-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 md:mx-52 md:mt-28 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Download Resume </button>
              </div>
          </div>
          
      </>
    )
  }
  
  export default About
  