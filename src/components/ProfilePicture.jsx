import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const AnimatedProfileImage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [shouldChangeImage, setShouldChangeImage] = useState(false);
    const [nameHovered, setNameHovered] = useState(false);
    const [nameText, setNameText] = useState('Full-Stack Developer'); // default text
    const [hoverText] = useState('Full-Time Gymbro 💪'); // hover text


    const images = [
            "/images/profile-pictures/grad-photo.jpg",
        "/images/profile-pictures/seattle-photo.jpeg",
    ];

    useGSAP(() => {
        gsap.fromTo(
            ".hero-layout h2, .hero-layout p",
        { 
            y: 50, 
            opacity: 0 
        },
        { 
            y: 0, 
            opacity: 1, 
            stagger: 0.4, 
            duration: 1.2, 
            ease: "power2.inOut" 
        });
    });

    useEffect(() => {
        if (nameHovered) {
            setNameText(hoverText); // update text on hover
        } else {
            setNameText('Full-Stack Developer'); // reset text on hover out
        }
    }, [nameHovered]);

    useEffect(() => {
        let timeout;
    
        if (isHovered && !shouldChangeImage) {
            timeout = setTimeout(() => {
                setShouldChangeImage(true);
            setCurrentImage((prev) => (prev + 1) % images.length);
            }, 250); // Animation Time Here
        } else if (!isHovered) {
            setShouldChangeImage(false);
        }

        return () => clearTimeout(timeout);
    }, [isHovered, shouldChangeImage, images.length]);

  return (
    <div className="flex items-center">
        <div className="flex flex=col justify-center items-center gap-8 text-center">
            <div 
                className="relative xl:w-36 xl:h-36 w-24 h-24 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={images[currentImage]}
                    alt="Profile"
                    className={`
                    w-full h-full object-cover rounded-full border-4 border-white shadow-lg
                    transition-all duration-500 ease-out
                        ${isHovered 
                        ? 'transform rotate-12 scale-110' 
                        : 'transform rotate-0 scale-100'
                    }`}
                />
          
                <div 
                    className={`
                    absolute inset-0 rounded-full transition-all duration-500 ease-out
                    ${isHovered 
                        ? 'shadow-2xl shadow-blue-400/50' 
                        : 'shadow-none'
                    }`}
                />
            </div>
        
            <div className="text-white">
                <h2 className="md:text-[56px] text-[30px] font-bold mb-2">Ryan Hang</h2>
                <div
                    onMouseEnter={() => setNameHovered(true)}
                    onMouseLeave={() => setNameHovered(false)}
                    className="md:absolute"
                >
                    <p className="text-white-50 md:text-2xl text-sm font-semibold" style={{ minHeight: '1em' }}>
                        {nameText}
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AnimatedProfileImage;