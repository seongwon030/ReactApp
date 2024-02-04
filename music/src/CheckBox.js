import React, { useEffect, useState } from "react";
import CheckBoxCnt from "./CheckBox.style";
import './App.css';

const CheckBox = () => {

    const [value,setValue] = useState('');

    function checkOnlyOne(e) {
        console.log('id', e.target.id);
        document.getElementsByName('checkWrap').forEach((el) => {

            el.checked = false;
        });
        e.target.checked = true;
        setValue(e.target.value);
    }

    useEffect(()=>{
        console.log(value);
    },[value]);

    return (
        <CheckBoxCnt>
            <input 
            type="checkbox" 
            id="btn1" 
            name="checkWrap" 
            value="1"
            onChange={(e)=>checkOnlyOne(e)} />
            <label htmlFor="btn1" className="label">디자인</label>

            <input 
            type="checkbox" 
            id="btn2" 
            name="checkWrap" 
            value="2"
            onChange={(e)=>checkOnlyOne(e)} />
            <label htmlFor="btn2">디자인</label>

            <input 
            type="checkbox" 
            id="btn3" 
            name="checkWrap" 
            value="3"
            onChange={(e)=>checkOnlyOne(e)}/>
            <label htmlFor="btn3">디자인</label>

            <input 
            type="checkbox" 
            id="btn4" 
            name="checkWrap" 
            value="4"
            onChange={(e)=>checkOnlyOne(e)}/>
            <label htmlFor="btn4">디자인</label>

            <input 
            type="checkbox" 
            id="btn5" 
            name="checkWrap" 
            value="5"
            onChange={(e)=>checkOnlyOne(e)}/>
            <label htmlFor="btn5">디자인</label>

            <input 
            type="checkbox" 
            id="btn6" 
            name="checkWrap" 
            value="6"
            onChange={(e)=>checkOnlyOne(e)}/>
            <label htmlFor="btn6">디자인</label>

            <input 
            type="checkbox" 
            id="btn7" 
            name="checkWrap" 
            value="7"
            onChange={(e)=>checkOnlyOne(e)}/>
            <label htmlFor="btn7">디자인</label>
        </CheckBoxCnt>
    );
}

export default CheckBox;