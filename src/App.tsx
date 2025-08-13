import { useState } from 'react';
import { Github, Linkedin, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "WollokGame",
    description: "This is a game developed using the Wollok programming language, which follows the object-oriented paradigm. The gameplay is inspired by Plants vs. Zombies: the player controls a game piece that moves vertically and shoots at approaching enemies. The project was developed by a team of five people as part of the Programming Paradigms course. The game features a variety of enemies, each with unique characteristics and behaviors, a systems of waves, and a scoring system. The game is designed to be fun and challenging, with increasing difficulty as the player progresses through the waves.",
    image: "./WollokGame.png",
    githubUrl: "https://github.com/LautaroPingitore/Juego_Wollok_UTN"
  },
  {
    id: 2,
    title: "BirBnb",
    description: "This project consists of a fully functional web application similar to Airbnb, designed and developed entirely by our team as part of the Software Development course. The platform uses React for the frontend, Express.js for the backend, and MongoDB for data persistence. The application allows users to browse listings, view detailed accommodation information, and make reservations, while hosts can manage their properties and availability. It also includes authentication, responsive design, and an intuitive user interface for a seamless experience",
    image: "./Birbnb.png",
    githubUrl: "https://github.com/LautaroPingitore/Tp-Desarrollo-Pagina-Web"
  },
  {
    id: 3,
    title: "UTN Academic Extension",
    description: "This is a web extension developed using JavaScript, HTML, and CSS. The extension allows students to track their progress in the Systems Engineering career at the UTN. It was developed as part of a personal proyect, and it is not yet available on the Chrome Web Store. The extension is designed to be user-friendly and easy to use, allowing students to keep track of their subjects and grades in a simple and efficient way, marking each subjects as approved, regularized, studying or without",
    image: "./MateriasUtn.png",
    githubUrl: "https://github.com/LautaroPingitore/UTN-Academic-Extension"
  },
  {
    id: 4,
    title: "Basic Linux Operating System",
    description: "This operating system was created as part of the Operating Systems course by a team of five people. It consists of four main modules (Kernel, Memory, CPU, and FileSystem) that interact with each other through message and packet exchange. The system supports process and thread creation, memory management, file handling, and the execution of various instructions. The main objective of the project was to understand the fundamental workings of an operating system, how its components interact, and how to address common challenges such as deadlocks, race conditions, and livelocks.",
    image: "./ArquitecturaSO.png",
    githubUrl: "https://github.com/LautaroPingitore/Tp-Operativos-2C2024"
  }
];

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage('');
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-[#100D24] text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full px-4 sm:px-8 lg:px-12 gap-8 mx-auto">
          <div className="flex-1 lg:pr-12 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight uppercase tracking-wider mb-5 animate-fade-slide-in">
              Welcome
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mt-5 max-w-2xl mx-auto lg:mx-0 animate-fade-slide-in">
              Hi! My name is Lautaro Pingitore, I'm 19 years old and currently studying Systems Engineering at the{' '}
              <abbr title="National Technological University" className="no-underline cursor-help">UTN</abbr>.
              I'm actively seeking my first work experience where I can grow both personally and professionally, while developing skills that will help me in the future.
              <br /><br />
              I consider myself a hardworking and responsible person, passionate about learning new tools, programming languages, and anything related to modern technologies.
              <br /><br />
              During my time at university, I've developed several projects that I'm excited to share with you below.
            </p>
          </div>
          <div className="flex-1 text-center animate-fade-slide-in mt-8 lg:mt-0">
            <img 
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg" 
              alt="Laptop with code"
              className="max-w-[90%] sm:max-w-[80%] lg:max-w-[90%] h-auto rounded-lg mx-auto"
            />
          </div>
        </div>
        
        {/* Curved Separator */}
        <div className="absolute bottom-0 left-0 w-full h-8 sm:h-12 bg-white rounded-t-[50%_100%]"></div>
      </section>

      {/* Projects Section */}
      <section className="bg-white text-black pt-4 sm:pt-8 pb-4 sm:pb-8 -mt-4 sm:-mt-8">
        <div className="text-center mb-8 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">My Projects</h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-light">Some of my projects that I worked on</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10 pb-12 sm:pb-20 justify-items-center">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col w-full max-w-[380px] justify-between">
              <div className="p-4 sm:p-5">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal(project.image)}
                />
                <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3 text-[#111132] text-left">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
                  {project.description}
                </p>
              </div>
              <div className="p-3 sm:p-4 border-t border-gray-100 flex items-center gap-3 mt-auto">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curved Separator (Inverted) */}
      <div className="w-full h-20 sm:h-32 bg-white rounded-b-[100%_50%] -mt-12 sm:-mt-20"></div>

      {/* Footer */}
      <footer className="bg-[#0a0017] py-6 sm:py-10 px-4 sm:px-[10%] text-white">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mx-0 sm:mx-[5%]">
          <div className="text-left">
            <p className="text-sm sm:text-base">&copy; 2025 Lautaro Pingitore</p>
          </div>
          <div className="flex gap-4 sm:gap-5">
            <a 
              href="https://github.com/LautaroPingitore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/lautaro-pingitore-49aa60310/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-8 sm:right-12 text-white text-2xl sm:text-4xl font-bold hover:opacity-75 transition-opacity z-[60]"
            aria-label="Close modal"
          >
            <X size={24} className="sm:w-10 sm:h-10" />
          </button>
          <img 
            src={modalImage}
            alt="Project screenshot"
            className="max-w-[90%] sm:max-w-[80%] max-h-[70%] sm:max-h-[80%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default App;