import TitleHeader from '../../components/TitleHeader';
import { useNavigate } from 'react-router-dom';
import projects from '../../constants/projects';
import ProjectCard from '../../components/Cards/ProjectCard';

const Projects = () => {
  const navigate = useNavigate();
  
  return (
    <section id="projects" className="flex-center content-container section-padding">
      
      <div className="w-full h-full md:px-10 px-5">
        <div className="relative flex items-center justify-center mb-6" style={{ minHeight: 50 }}>
          <button
            className="cta-button group py-2 px-4 rounded-lg bg-white-50 text-black-200 md:text-base text-sm 
                      hover:text-white-50 hover:bg-black-200 transition-all duration-300 absolute left-0.5 md:top-1/2 top-29 -translate-y-1/2"
            onClick={() => navigate(-1)}
            style={{ minWidth: 70 }}
          >
            ← Back
          </button>
          <div className="w-full flex justify-center md:-mt-20 md:pt=0 pt-10">
            <TitleHeader
              title="Projects"
              sub="💻 Explore More of My Work! 🚀"
            />
          </div>
        </div>
        <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
          {projects.map((project, idx) => (
            <div key={idx} className="w-full max-w-xs">
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;