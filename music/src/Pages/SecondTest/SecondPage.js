import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";

import CheckBox from "../../Components/CheckBox";

import "./SecondPage.css";

const SecondPage = () => {

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <Progress value={20} size='md' colorScheme='green' />
            </div>
            <div className="num2">
                <h3>Q. 쿵! 짝! 쿵! 짝! 4/4박자로 마치 내 발걸음과 같은 이 비트와 에너지 넘치는 보컬.. 
이런 음악은 역동적이고 강렬한 춤을 추게 만들어!</h3>
                <CheckBox id="second1"/>
            </div>
            <div className="num2">
                <h3>Q. 고음질의 전자적인 사운드와 다양한 신스사이저 
마치 여기는 네온빛이 가득한 사이버펑크 세상에 온것 같아!</h3>
                <CheckBox id="second2"/>
            </div>
            <div className="num2">
                <h3>Q. 런던의 가을 밤 펍에서 새어 나오는 거치면서도 고요한 기타 리프, 사회적 이슈를 다루는 가사, 
감정 속에 잠긴 보컬의 고요한 음색 때문에 나도 모르게 분위기에 취하게 돼.</h3>
                <CheckBox id="second3"/>
            </div>
            <div className="num2">
                <h3>Q. 런던의 가을 밤 펍에서 새어 나오는 거치면서도 고요한 기타 리프, 사회적 이슈를 다루는 가사, 
감정 속에 잠긴 보컬의 고요한 음색 때문에 나도 모르게 분위기에 취하게 돼.</h3>
                <CheckBox id="second4"/>
            </div>
            <div className="num2">
                <h3>Q. 런던의 가을 밤 펍에서 새어 나오는 거치면서도 고요한 기타 리프, 사회적 이슈를 다루는 가사, 
감정 속에 잠긴 보컬의 고요한 음색 때문에 나도 모르게 분위기에 취하게 돼.</h3>
                <CheckBox id="second5"/>
            </div>
            <div className='linkBox'>
                <Link to="/firstPage4">
                    <button>이전으로</button> 
                </Link> 
                <Link to="/SecondPage1">
                    <button>다음으로</button> 
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default SecondPage;