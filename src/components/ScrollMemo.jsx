import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const ScrollMemo = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const arrow = gsap.to(".scroll-arrow", {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
        });

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
                arrow.kill();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {!scrolled && (
                <div className="scroll-arrow absolute w-full flex justify-center bottom-8">
                    <p>Scroll Down ↓</p>
                </div>
            )}
        </div>
    );
};

export default ScrollMemo;
