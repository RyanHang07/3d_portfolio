import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../../components/Button";
import { words } from "../../constants";
import HeroExperience from "../../components/HeroModels/HeroExperience";
import AnimatedProfileImage from "../../components/ProfilePicture";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, 
        opacity: 0 
      },
      { y: 0, 
        opacity: 1, 
        stagger: 0.4, 
        duration: 1.2, 
        ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="content-container relative overflow-hidden xl:pt-0 pt-5">
      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen">
          <div className="flex flex-col items-center xl:items-start justify-center gap-7">
            <AnimatedProfileImage />
            <div className="hero-text ">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <Button
              text="See My Work"
              className="md:w-100 md:h-16 w-full md:px-0 px-10 h-12"
              id="work"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout xl:-right-30 right-0">
            <HeroExperience />
          </div>
        </figure>
      </div>

    </section>
    
  );
};

export default Hero;