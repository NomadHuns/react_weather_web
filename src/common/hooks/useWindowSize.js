import { useState, useEffect } from 'react';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거 (메모리 누수 방지)
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};