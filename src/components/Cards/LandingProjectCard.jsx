import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LandingProjectCard = ({ project, index }) => {
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2 * (index + 1),
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom-=100',
        },
      }
    );

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(cardRef.current, {
        y: -10,
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
  }, [index]);

  return (
    <div 
      ref={cardRef} 
      className="bg-black-100 border border-black-50 rounded-xl p-6 flex flex-col shadow-md w-full cursor-pointer transition-all duration-300"
    >
      <div 
        className="w-full h-48 md:h-64 flex items-center justify-center overflow-hidden rounded-lg mb-4"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="text-content flex flex-col">
        <div className="flex flex-1 flex-row mb-3">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            {project.title}
          </h2>
          {/* Github and Link Icons */}
          <div className="flex items-center ml-auto">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300" style={{ color: "#d9ecff" }}>
            <img 
              src="https://devicon-website.vercel.app/api/github/original.svg?color=%23d9ecff" 
              alt="Github"
              className="w-6 h-6 mt-1"
            /> 
          </a>

          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {/* Link Icon here edited with class */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="#d9ecff" class="size-6 mt-1.25 ml-2 hover:scale-110 transition-all duration-300">
                <path fill-rule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clip-rule="evenodd" />
              </svg>
            </a>
          )}

            {project.award && (
              <div className="award-tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#F7DC6F" className="size-7 pt-1 ml-2 hover:scale-110 transition-all duration-300">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <div className="award-text">
                  <p className="text-white-50 text-sm leading-relaxed">
                    {project.award}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col justify-between">
          <p className="text-white-50 text-sm md:text-base leading-relaxed pb-3">
            {project.description}
          </p> 
          <div className="flex flex-wrap gap-2 py-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-black-200 text-white-50 text-xs px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>

                   
        </div>
      </div>
    </div>
  );
};

export default LandingProjectCard;