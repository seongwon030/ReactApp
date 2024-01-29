import React from "react";
import { useState,useRef } from "react";
import { Link } from "react-router-dom";

const Main = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('./ex.mp3'));

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
        <div className="New">
            <div className='sound'>
                <img onClick={playMusic} src="./sound.png" alt='Sound Icon'/>
            </div>
            <div className='text1'>
                <h2>음악 장르의 취향,</h2>
                <h2><span style={{fontStyle: 'italic', textShadow: '0 0 5px #848484'}}>사운드</span>와 함께 알아보기</h2>
            </div>
            <div className='text2'>
                <h3>소리가 첨부된 음악테스트를 통해</h3>
                <h3>자신의 음악장르를 찾아봐요!</h3>
            </div>
            <div className='text3'>
                <h4>음악 장르에는 하위장르를 포함하여 무수히 많은 장르가 존재합니다.</h4>
                <h4>이 테스트에는 많은 장르 중 대중적인 장르들을 선별하여 추천됩니다.</h4>
            </div>
            <hr/>
            <div className='test'>
                <Link to="/firstPage">
                    <button>테스트 시작하기</button>  
                </Link> 
            </div>
            <hr/>
            <div className='text4'>
                <h3>친구와 함께 취향을 알아봐요!</h3>
            </div>
            <div className='share'>
                <a href="https://www.facebook.com">
                <img src="./fb.png" alt="Facebook 1"/>
                </a>
                <a href="https://www.instagram.com">
                <img src="./insta.png" alt="Instagram 1"/>
                </a>
                <a href="https://www.twitter.com">
                <img src="./twit.png" alt="Twitter 1"/>
                </a>
            </div>
        </div>
    );
};

export default Main;