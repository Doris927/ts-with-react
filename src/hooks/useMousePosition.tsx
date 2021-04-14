import React, { useState, useEffect } from 'react';

// 必须用use开头
const useMousePosition = () => {
    const [positions, setPositions] = useState({x:0, y:0});
    
    useEffect(() => {
        console.log('add effect');
        const updateMouse = (e: MouseEvent) => {
            setPositions({x: e.clientX, y: e.clientY});
        }
        document.addEventListener('click', updateMouse);

        return () => {
            console.log('remove');
            document.removeEventListener('click', updateMouse);
        }
    }, []);
    
    return positions;
}

export default useMousePosition;