import { useState, useEffect } from 'react';

export const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`fixed bottom-4 right-4 px-2.5 pt-1 pb-1.5 rounded-full bg-sky-500/[88%] text-white text-[1.65rem] shadow-2xl hover:bg-sky-400 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transform transition-all duration-300 ease-in-out`}
                style={{ pointerEvents: isVisible ? 'auto' : 'none' }} // Prevent clicking when hidden
            >
                ↑
            </button>
        </div>
    );
};
