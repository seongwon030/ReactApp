import React, { useEffect } from "react";
import "./Result.css";

import { ChakraProvider,VStack,Box,StackDivider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";
import { PopValueState } from "../../Components/PopBox";
import { useRecoilValue } from "recoil";

const Pop = () => {

    const PopValue = useRecoilValue(PopValueState);

    useEffect(()=>{
        console.log(PopValue);
        console.log(Object.keys(PopValue));
    },[PopValue])

    return (
        <ChakraProvider>
        <div className="Top">
            <h2>당신은 '알앤비'을 좋아하실겁니다.</h2>
        </div>
        <div className="Playlist">
            <h3>이 노래를 들어보세요!!</h3>
            <h3>- 추천 플레이리스트 바로가기 -</h3>
        </div>
        (플레이리스트 링크)
        <hr/>
        <div className="RB">

        </div>
        <hr/>
        <div className="caution">
            <h3>수많은 장르 중 하나의 장르를 선별하는 테스트이므로</h3>
            <h3>개발자의 주관적인 판단, 생각이 들어있습니다.</h3>
            <h3>결과는 언제나 시간에 따라 달라질 수 있으며</h3>
            <h3>절대적이지 않음을 말씀드립니다.</h3>
        </div>
        <VStack
            className="Stack"
            divider={<StackDivider borderColor='gray.300' />}
            spacing={5}
            align='stretch'
            >
            <Box>
                <Progress value={45} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    댄스팝 <button>장르설명</button>
                </div>
            </Box>
            <Box >
                <Progress value={45} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    일렉트로닉팝 <button>장르설명</button>
                </div>
            </Box>
            <Box >
                <Progress value={45} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    브릿팝 <button>장르설명</button>
                </div>
            </Box>
            <Box >
                <Progress value={45} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    인디팝 <button>장르설명</button>
                </div>
            </Box>
            <Box >
                <Progress value={45} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    라틴팝 <button>장르설명</button>
                </div>
            </Box>
        </VStack>
        </ChakraProvider>
    );
}

export default Pop;