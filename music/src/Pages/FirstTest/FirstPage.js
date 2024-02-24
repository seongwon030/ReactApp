import React from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { Progress } from "@chakra-ui/progress";
import { ChakraProvider } from '@chakra-ui/react';

import CheckBox from "../../Components/CheckBox";

import "./FirstPage.css"


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
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <Progress value={15} size='md' colorScheme='purple'/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>1번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox1"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>2번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox2"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>3번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox3"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>4번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox4"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>5번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox5"/>
            </div>
            <div className='nextPage'>
                <Link to="/FirstPage1">
                    <button>다음으로</button>  
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default FirstPage;