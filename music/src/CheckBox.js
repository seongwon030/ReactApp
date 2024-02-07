// CheckBox.js
import React, { useEffect, useState } from "react";
import CheckBoxCnt from "./CheckBox.style";
import './App.css';

const CheckBox = ({ id }) => {
    const [checkedValues, setCheckedValues] = useState([]);

    const checkOnlyOne = (e, num) => {
        setCheckedValues([num]);
    }

    useEffect(() => {
        console.log(checkedValues);
    }, [checkedValues]);

    const generateUniqueId = (name) => `${id}_${name}`;

    return (
        <CheckBoxCnt id={`checkBoxCnt_${id}`}>
            {[1, 2, 3, 4, 5].map((num) => (
                <React.Fragment key={num}>
                    <input
                        type="checkbox"
                        id={generateUniqueId(`b${num}`)}
                        name="checkWrap"
                        value={num}
                        checked={checkedValues.includes(num)}
                        onChange={(e) => checkOnlyOne(e, num)}
                    />
                    <label htmlFor={generateUniqueId(`b${num}`)}>{num}</label>
                </React.Fragment>
            ))}
        </CheckBoxCnt>
    );
}

export default CheckBox;
