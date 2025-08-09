import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { navLinks } from '../constants/index.js'

const NavBar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const logoImageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // eslint-disable-next-line no-unused-vars
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const logoImage = logoImageRef.current;
        
        if (logoImage) {
            const handleMouseEnter = () => {
                gsap.to(logoImage, {
                    rotation: 360,
                    duration: 0.6,
                    ease: "power2.out"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(logoImage, {
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            };

            logoImage.addEventListener('mouseenter', handleMouseEnter);
            logoImage.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                logoImage.removeEventListener('mouseenter', handleMouseEnter);
                logoImage.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);
    
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo flex flex-row items-center justify-center gap-3" href="#hero">
                    <img 
                        ref={logoImageRef}
                        src="/images/branding.svg" 
                        alt="branding" 
                        className="h-10 cursor-pointer" 
                        style={{ transformOrigin: 'center' }}
                    />
                    Ryan Hang
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map((link, name) => (
                            <li key={name} className="group">
                                <a href={link.link}>
                                    <span>{link.name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>
                            Contact Me
                        </span>
                    </div>
                </a>
            </div>

        </header>
    )
}

export default NavBar