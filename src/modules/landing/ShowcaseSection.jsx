import React, { useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TitleHeader from '../../components/TitleHeader';
import LandingProjectCard from '../../components/Cards/LandingProjectCard';

import { landingProjectsData } from '../../constants/projects';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const landingProjects = landingProjectsData;

    return (
        <>  
            <div id="work"/>
            <div className="w-full pt-12">
                <TitleHeader
                    title="Projects"
                    sub="⭐️ Here Are A Few Of My Favorites 💻"
                    
                />
            </div>
            <section ref={sectionRef} className="app-showcase">
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto px-5">
                        {landingProjects.map((project, index) => (
                            <LandingProjectCard 
                                key={project.id} 
                                project={project} 
                                index={index}
                            />
                        ))}
                    </div>
                    <div className="flex w-full justify-center md:mt-20 mt-10">
                        <Link to="/projects">
                            <button className="cta-button group px-30 py-3 rounded-lg bg-white-50 text-black-200 text-lg 
                                            hover:text-white-50 hover:bg-black-200 transition-all duration-300">
                                See All Projects
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShowcaseSection