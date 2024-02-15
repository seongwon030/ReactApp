import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";

import CheckBox from "../../Components/CheckBox";

import "./SecondPage.css";

const SecondPage4 = () => {

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <Progress value={100} size='md' colorScheme='green' />
            </div>
            <div className="num2">
                <h3>Q. 디지털한 사운드가 기반이 된 끈적한 사랑과 사회참여적인 가사를 담아낸 흑인들의 가사
그리고 고요하고 그루비한 보컬.. 오우.. 이런 노래엔 스모키한 위스키 한잔이 딱이야.</h3>
                <CheckBox id="second21"/>
            </div>
            <div className="num2">
                <h3>Q. 현대적인 다양한 장르를 결합해 트렌드를 이끄는 사운드 위에 보컬의 소울과 그루브가 느껴져.
이런 세련된 섹시함은 나의 미간을 찡그리게 만들지.</h3>
                <CheckBox id="second22"/>
            </div>
            <div className="num2">
                <h3>Q. 끈적하면서 그루비한 보컬의 소울과 드럼의 리듬 위에 째지한 사운드.. 
독특하면서 센스있는 베이스의 그루브는 나를 춤추게 만들지 I Feel Good~</h3>
                <CheckBox id="second23"/>
            </div>
            <div className="num2">
                <h3>Q. 교회에서 들릴듯한 전통적인 구성들과 흑인민권 운동을 기반으로 흑인의 한과 울림이 담긴 음악.
무대 옆에 있는 코러스(콰이어)단 들이 하모니를 만들때 난 그시대를 입체적으로 떠올리게 해.</h3>
                <CheckBox id="second24"/>
            </div>
            <div className="num2">
                <h3>Q. 자신만의 아이덴티티로 창의성을 펼쳐내 복잡한 자신의 감정을 다양하고 특이한 사운드로 표현하는
소울이 담겨진 음악.. 이건 아트가 아닐까?</h3>
                <CheckBox id="second25"/>
            </div>
            <div className='linkBox'>
                <Link to="">
                    <button>완료</button> 
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default SecondPage4;