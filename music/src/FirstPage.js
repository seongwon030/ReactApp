import React from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";

import './App.css';

const FirstPage = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('./trap.mp3'));

    const playMusic = () => {
        const audio = audioRef.current;

        if (audio.paused) {
        audio.play(); 
        } else {
        audio.pause();
        }
        
        setIsPlaying(!isPlaying);
        // audio.currenTime = 0 // 클릭하면 다시 처음으로 
    };

    return (
        <div className="firstPage">
            <Link to="/">
                <img src="./back.png" alt="back"></img>
            </Link>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>1번 사운드가 당신의 마음에 드나요?</h3>
            </div>
        </div>
    );
};

export default FirstPage;