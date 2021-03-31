import React, { useEffect, useRef, useState } from 'react';
import { Sprite } from '../sprite-gen/Sprite';

const SPRITE_SIZE = 10;
const EXPORT_SIZE = 96;
const ITERATIONS = 5;

export const UserAvatar = ({ url, ...attrs }) => {
    const [finalUrl, setFinalUrl] = useState(url);
    const canvasRef = useRef();

    useEffect(() => {
        if((!url || url == '') && canvasRef.current){
            const sprite = new Sprite(SPRITE_SIZE, EXPORT_SIZE, ITERATIONS);
            const b64 = sprite.getDataURL(canvasRef.current);
            setFinalUrl(b64);
        }
    }, [url]);

    return (
        <>
        <canvas ref={canvasRef} height={EXPORT_SIZE} width={EXPORT_SIZE} style={{display: 'none', width: EXPORT_SIZE+'px', height: EXPORT_SIZE+'px'}}/>
        <img src={finalUrl} {...attrs} alt="" />
        </>
    )
}