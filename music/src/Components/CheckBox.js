import React from "react";
import CheckBoxCnt from "./CheckBox.style";
import "../App.css";
import { atom } from "recoil";
import { useRecoilState } from "recoil";


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

//   useEffect(() => {
//     console.log(id, checkedValues[id]);
//   }, [id, checkedValues]);

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
