import TitleHeader from '../../components/TitleHeader'
import { techStackIcons } from '../../constants'
import TechIcon from '../../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const LandingTechStack = () => {
  useGSAP(() => {
    gsap.fromTo('.tech-card', 
      {
        y: 50, 
        opacity: 0
      }, 
      {
        y:0, 
        opacity: 1, 
        duration: 1,
        stagger: 0.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center',
        }
      })
  });

  return (
    <>
      <div id="techstack"/>
      <div className="flex-center section-padding pt-12 mt-0 pb-10 content-container">
        <div className="w-full h-full px-5">
          <TitleHeader title="Tech Stack" sub="👨‍💻 I've Got The Experience 💼" />

          <div className="tech-grid">
            {techStackIcons.map((icon) => (
              <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <TechIcon icon={icon} />
                  </div>
                  <div className="padding-x px-2 w-full">
                    <p>{icon.name}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* image code if i need it cant cant find 3d models for all */}
            {/* {techStackImgs.map((img) => (
              <div key={img.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <img src={img.imgPath} alt={img.name} />
                  </div>
                  <div className="padding-x w-full">
                    <p>{img.name}</p>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
          <div className="flex justify-center md:mt-20 mt-10 ">
              <Link to="/techstack">
                  <button className="cta-button group mx-auto md:px-24 px-28 py-3 rounded-lg bg-white-50 text-black-200 text-lg 
                                    hover:text-white-50 hover:bg-black-200 transition-all duration-300">
                    See My Full Toolbelt
                  </button>
              </Link>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default LandingTechStack