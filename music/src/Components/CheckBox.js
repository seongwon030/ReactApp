import React, { useEffect, useState } from "react";
import CheckBoxCnt from "./CheckBox.style";
import '../App.css';

const CheckBox = ({ id }) => {
    // 체크 상태 관리 
    const [checkedValue, setCheckedValue] = useState(null);
    
    // 중복 선택 안되게
    const checkOnlyOne = (num) => {  
        setCheckedValue((prevCheckedValue) => {
            // 이미 선택된 값이면 현재값 반환
            if (prevCheckedValue === num) {
                return num;
            }
            // 선택된 값이 없거나 다른 값이면 현재 값으로 설정
            return num;
        });
    };
    
    useEffect(() => { // 체크할 때 체크박스 id와 num 콘솔에 출력
        console.log(id, checkedValue);  
    }, [id,checkedValue]);

    const generateUniqueId = (name) => `${id}_${name}`;


    return (
        
        <CheckBoxCnt id={`checkBoxCnt_${id}`} num={checkedValue} >
            {[1,2,3,4,5].map((num) => (
                <React.Fragment key={num}>
                    <input
                        type="checkbox"
                        id={generateUniqueId(`b${num}`)}
                        name="checkWrap"
                        value={num}
                        checked={checkedValue === num}
                        onChange={() => checkOnlyOne(num)}
                    />
                    <label 
                    htmlFor={generateUniqueId(`b${num}`)}
                    >{num}</label>
                </React.Fragment>
            ))}
        </CheckBoxCnt>
    );
}

export default CheckBox;
