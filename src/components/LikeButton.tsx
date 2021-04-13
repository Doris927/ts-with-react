import React, { useState, useEffect } from 'react';
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    useEffect(() => {
        document.title = `click ${like} times`;
    });
    return (
        <>
        <button onClick={() => {setLike(like+1)}}>
            {like}like
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on? 'ON' : 'OFF'}
        </button>
        </>
    );
}

export default LikeButton;