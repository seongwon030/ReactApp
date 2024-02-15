import React from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { Progress } from "@chakra-ui/progress";
import { ChakraProvider } from "@chakra-ui/react";

import CheckBox from "../../Components/CheckBox";

import "./FirstPage.css";

const FirstPage4 = () => {

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
                <Progress value={100} size='md' colorScheme='green' />
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>21번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox21"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>22번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox22"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>23번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox23"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>24번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox24"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>25번 사운드가 당신의 마음에 드나요?</h3>
                <CheckBox id="checkbox25"/>
            </div>
            <div className='test'>
                <Link to="/SecondPage">
                    <button>다음으로</button>  
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default FirstPage4;