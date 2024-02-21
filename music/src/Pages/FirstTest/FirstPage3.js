import React from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { Progress } from "@chakra-ui/progress";
import { ChakraProvider } from "@chakra-ui/react";

import CheckBox from "../../Components/CheckBox";

import "./FirstPage.css";

const FirstPage3 = () => {

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
            <Progress value={80} size='md' colorScheme='green' />
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>16번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox16"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>17번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox17"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>18번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox18"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>19번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox19"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>20번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox20"/>
            </div>
            <div className='nextPage'>
                <Link to="/FirstPage4">
                    <button>다음으로</button>  
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default FirstPage3;