import ProjectCard from "./ProjectCard"
import textutlis from '../assets/textutlis.png'
import inotebook from '../assets/inotebook.png'
import news from '../assets/news.png'

const Projects = () => {
  return (
    <>
      <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5">
          
        <ProjectCard 
          title="INotebook"
          main="I’ve built a secure and interactive note-taking application where users can sign up, log in, and manage their own private notes. The app allows users to perform full CRUD operations (Create, Read, Update, Delete) on their notes, ensuring a personalized and efficient experience."
          Demolink="https://www.linkedin.com/posts/harshada-bhavsar-5a8381247_mernstack-webdevelopment-react-activity-7235337045932421120-Cw7i?utm_source=share&utm_medium=member_desktop"
          Sourcelink="https://github.com/harshada-bhavsar/INoteBook"
          image={inotebook}
          />

          <ProjectCard 
          title="TextUtilities Website"
          main="TextUtils is a versatile text utility tool designed to enhance your experience with text manipulation. When integrated with React, TextUtils can provide a variety of features to help users manage and manipulate text more efficiently in their applications."
          Demolink="https://www.linkedin.com/posts/harshada-bhavsar-5a8381247_textutilisapp-react-webdevelopment-activity-7220106548923019264-08eO?utm_source=share&utm_medium=member_desktop"
          Sourcelink="https://github.com/harshada-bhavsar/TextUtilis-react-app"
          image={textutlis}/>

           <ProjectCard 
          title="News WebApp"
          main="A simple news application built with React that fetches and displays the latest news articles. Users can browse news by categories, search for specific topics, and view detailed articles."
          Demolink="https://www.linkedin.com/posts/harshada-bhavsar-5a8381247_react-frontenddevelopment-javascript-activity-7223394127797735424-w2cy?utm_source=share&utm_medium=member_desktop"
          Sourcelink="https://github.com/harshada-bhavsar/News_application"
          image={news}/>



        </div>
      </div>
    </>
  )
}

export default Projects
