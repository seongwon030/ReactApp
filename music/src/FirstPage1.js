import React from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";

import CheckBox from "./CheckBox";
import './App.css';

const FirstPage1 = () => {

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
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>6번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox6"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>7번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox7"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>8번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox8"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>9번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox9"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>10번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox10"/>
            </div>
            <div className='test'>
                <Link to="/FirstPage2">
                    <button>다음으로</button>  
                </Link> 
            </div>
        </div>
    );
};

export default FirstPage1;