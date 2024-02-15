import React from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { Progress } from "@chakra-ui/progress";
import { ChakraProvider } from "@chakra-ui/react";

import CheckBox from "../../Components/CheckBox";

import "./FirstPage.css";

const FirstPage2 = () => {

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
                <Progress value={60} size='md' colorScheme='green' />
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>11번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox11"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>12번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox12"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>13번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox13"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>14번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox14"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>15번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox15"/>
            </div>
            <div className='test'>
                <Link to="/FirstPage3">
                    <button>다음으로</button>  
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default FirstPage2;