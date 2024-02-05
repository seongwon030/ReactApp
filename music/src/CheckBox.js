import React, { useEffect, useState } from "react";
import CheckBoxCnt from "./CheckBox.style";
import './App.css';


const CheckBox = ({id}) => {

    const [value,setValue] = useState('');

    function checkOnlyOne(e) {
        console.log(e.target.id);
        document.getElementsByName('checkWrap').forEach((el) => {

            el.checked = false;
        });
        e.target.checked = true;
        setValue(e.target.value);
    }

    useEffect(()=>{
        console.log(value);
    },[value]);

    const generateUniqueId = (name) => `${id}_${name}`;


    return (
        <CheckBoxCnt>
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <React.Fragment key={num}>
                    <input
                        type="checkbox"
                        id={generateUniqueId(`b${num}`)}
                        name="checkWrap"
                        value={num}
                        onChange={(e) => checkOnlyOne(e)}
                    />
                    <label htmlFor={generateUniqueId(`b${num}`)}>디자인</label>
                </React.Fragment>
            ))}
        </CheckBoxCnt>
    );
}

export default CheckBox;