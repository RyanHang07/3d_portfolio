import React from 'react';
import { gsap } from 'gsap';

const ProjectCard = ({ project }) => {
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(cardRef.current, {
        y: -8,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cardRef.current, {
        y: 0,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const element = cardRef.current;
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="bg-black-100 border border-black-50 rounded-lg p-3 flex flex-col shadow-md w-full cursor-pointer transition-all duration-300 h-full"
    >
      <div 
        className="w-full flex items-center justify-center overflow-hidden rounded-md mb-3"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-50 h-50"
        />
      </div>
      
      <div className="text-content flex flex-col flex-1">
        <div className="flex flex-row mb-2">
          <h2 className="text-base sm:text-lg font-bold text-white flex-1 pr-2 line-clamp-2">
            {project.title}
          </h2>
          {/* Github and Link Icons */}
          <div className="flex items-start flex-shrink-0 pt-0.5">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300" style={{ color: "#d9ecff" }}>
              <img 
                src="https://devicon-website.vercel.app/api/github/original.svg?color=%23d9ecff" 
                alt="Github"
                className="w-5 h-5"
              /> 
            </a>

            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#d9ecff" className="w-6 h-6 ml-1.5 hover:scale-110 transition-all duration-300">
                  <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                </svg>
              </a>
            )}

            {project.award && (
              <div className="award-tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#F7DC6F" className="w-6 h-6 ml-1.5 -mt-0.5 hover:scale-110 transition-all duration-300">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <div className="award-text">
                  <p className="text-white-50 text-xs leading-relaxed">
                    {project.award}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col justify-between flex-1">
          <p className="text-white-50 text-xs sm:text-sm leading-relaxed pb-2 flex-1">
            {project.description}
          </p> 
          <div className="flex flex-wrap gap-1.5 py-1">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-black-200 text-white-50 text-xs px-1.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;