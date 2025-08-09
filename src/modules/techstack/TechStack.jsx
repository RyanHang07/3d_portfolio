import TitleHeader from '../../components/TitleHeader';
import { useNavigate } from 'react-router-dom';
import techStackList from '../../constants/techStackList';

const TechStack = () => {
  const navigate = useNavigate();

  return (
    <section id="techstack" className="flex-center content-container section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div className="relative flex items-center justify-center mb-6" style={{ minHeight: 50 }}>
          <button
            className="cta-button group py-2 px-4 rounded-lg bg-white-50 text-black-200 text-base 
                      hover:text-white-50 hover:bg-black-200 transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2"
            onClick={() => navigate(-1)}
            style={{ minWidth: 70 }}
          >
            ← Back
          </button>
          <div className="w-full flex justify-center">
            <TitleHeader
              title="Tech Stack"
              sub="🛠️ Technologies I Work With ⚡"
            />
          </div>
        </div>
        <div className="mt-8 grid gap-6 grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 justify-items-center">
          {techStackList.map((tech, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col items-center justify-center p-2 rounded-lg 
                        bg-white-50 hover:bg-black-200 transition-all duration-300 cursor-pointer
                        hover:scale-105 hover:shadow-lg w-16 h-16 sm:w-20 sm:h-20"
            >
              <img 
                src={tech.src}
                alt={tech.name}
                className="w-8 h-8 sm:w-10 sm:h-10 group-hover:filter 
                          group-hover:brightness-0transition-all duration-300"
              />
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black-200 text-white-50 
                            px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 pointer-events-none z-10">
                {tech.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent 
                              border-t-black-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;