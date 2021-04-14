import React, { useState, useEffect, useRef } from 'react';
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    const likeRef = useRef(0);
    const didMountRef = useRef(false);
    const domRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log('like');
        document.title = `click ${like} times`;
    }, [like]);

    useEffect(() => {
        if(didMountRef.current) {
            console.log('this is updated');
        } else {
            didMountRef.current = true;
        }
    });

    useEffect(() => {
        if(domRef && domRef.current) {
            domRef.current.focus();
        }
    });

    function handleAlertClick() {
        setTimeout(() => {
            console.log('you clicked on' + likeRef.current);
        }, 3000);
    }

    return (
        <>
        <input type="text" ref={domRef} />
        <button onClick={() => {setLike(like+1); likeRef.current++;}}>
            {like}like
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on? 'ON' : 'OFF'}
        </button>
        <button onClick={handleAlertClick}>alert</button>
        </>
    );
}

export default LikeButton;