import React from "react";
import CheckBoxCnt from "./CheckBox.style";
import "../App.css";
import { atom } from "recoil";
import { useRecoilState } from "recoil";
import { useEffect } from "react";


export const PopValueState = atom({
  key: "Pop",
  default: {},
});

const PopBox = ({ id }) => {
  const [popValues, setCheckedValues] = useRecoilState(PopValueState);

  const checkOnlyOne = (num) => {
    setCheckedValues((prevCheckedValues) => {
      if (id.includes("Pop")) {
      const updatedValues = { ...prevCheckedValues, [id]: num };
      return updatedValues;
    }

  });
  };

  useEffect(() => {
    const handleCheckboxChange = () => {
      console.log(id, popValues[id]);
    };
  
    const checkboxElement = document.getElementById(`checkBoxCnt_${id}`);
  
    if (checkboxElement) {
      checkboxElement.addEventListener('change', handleCheckboxChange);
    }
  
    return () => {
      if (checkboxElement) {
        checkboxElement.removeEventListener('change', handleCheckboxChange);
      }
    };
  }, [popValues, id]);

  useEffect(() => { 
    console.log("All checkedValues:", popValues);
  }, [popValues]);


  const generateUniqueId = (name) => `${id}_${name}`;

  return (
    <CheckBoxCnt id={`checkBoxCnt_${id}`} num={popValues[id]}>
      {[1, 2, 3, 4, 5].map((num) => (
        <React.Fragment key={num}>
          <input
            type="checkbox"
            id={generateUniqueId(`b${num}`)}
            name="checkWrap"
            value={num}
            checked={popValues[id] === num}
            onChange={() => checkOnlyOne(num)}
          />
          <label htmlFor={generateUniqueId(`b${num}`)}>{num}</label>
        </React.Fragment>
      ))}
    </CheckBoxCnt>
  );
};

export default PopBox;
