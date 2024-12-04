import PropTypes from 'prop-types';
// import background from '../assets/textutlis.png';

const ProjectCard = ({ title , main, Demolink , Sourcelink, image}) => {
  return (
    <>
      <div className="p-3 md:p-6 flex flex-col w-[400px] bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
        <img className="p-4" src={image} alt="" />
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2 flex-grow">{main}</p>
        <div className="mt-1 p-2 md:p-4 flex justify-evenly gap-2">
          <a 
           href={Demolink}
           target="_blank" 
           rel="noopener noreferrer"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Demo
          </a>
          <a 
           href={Sourcelink} 
           target="_blank" 
           rel="noopener noreferrer"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </a>
        </div>
      </div>
    </>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired, // Ensure title is a required string
  main: PropTypes.string.isRequired,  // Ensure main is a required string
  Demolink: PropTypes.string.isRequired, 
  Sourcelink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
export default ProjectCard
