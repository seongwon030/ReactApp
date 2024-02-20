import React from "react";
import CheckBoxCnt from "./CheckBox.style";
import "../App.css";
import { atom } from "recoil";
import { useRecoilState } from "recoil";
import { useEffect } from "react";


export const checkValueState = atom({
  key: "checkValueState",
  default: {},
});

const CheckBox = ({ id }) => {
  const [checkedValues, setCheckedValues] = useRecoilState(checkValueState);

  const checkOnlyOne = (num) => {
    setCheckedValues((prevCheckedValues) => {
      const updatedValues = { ...prevCheckedValues, [id]: num };
      return updatedValues;
    });
  };

  useEffect(()=>{
    const handleCheckboxChange = () =>{ // 체크박스 상태 변경 시 콘솔에 출력 
      console.log(id,checkedValues[id]);
    };

    document.getElementById(`checkBoxCnt_${id}`).addEventListener(
      'change',handleCheckboxChange);

    return() => {
      document.getElementById(`checkBoxCnt_${id}`).removeEventListener(
        'change',handleCheckboxChange);
  
    }
  },[checkedValues,id]);

  const generateUniqueId = (name) => `${id}_${name}`;

  return (
    <CheckBoxCnt id={`checkBoxCnt_${id}`} num={checkedValues[id]}>
      {[1, 2, 3, 4, 5].map((num) => (
        <React.Fragment key={num}>
          <input
            type="checkbox"
            id={generateUniqueId(`b${num}`)}
            name="checkWrap"
            value={num}
            checked={checkedValues[id] === num}
            onChange={() => checkOnlyOne(num)}
          />
          <label htmlFor={generateUniqueId(`b${num}`)}>{num}</label>
        </React.Fragment>
      ))}
    </CheckBoxCnt>
  );
};

export default CheckBox;
