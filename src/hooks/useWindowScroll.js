import { useState, useEffect } from 'react';

export const useWindowScroll = () => {
    const isClient = typeof window === 'object';

    function getWindowScroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop,
            left: window.pageXOffset || document.documentElement.scrollLeft
        };
    }
    const [windowScroll, setWindowScroll] = useState(getWindowScroll);

    useEffect(() => {
        if (!isClient) {
            return;
        }
        function handleScroll() {
            setWindowScroll(getWindowScroll());
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return windowScroll;
};
