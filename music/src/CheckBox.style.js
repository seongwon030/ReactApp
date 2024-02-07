// checkBox.styles.js
import styled from 'styled-components';

const CheckBoxCnt = styled.div`
    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox] + label {
        flex:1;
        display: inline-block;
        margin: 4px;
        font: 1.0rem 'Noto Sans KR';
        text-align: center;
        background: #f5f6f7;
        border: 1px solid white;
        padding: 6px 9px;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 30px;
    }

    input[type=checkbox]:checked + label {
        background-image: none;
        background: red;
        border: 1px solid white;
        padding: 6px 10px;
        box-sizing: border-box;
        cursor: pointer;
        z-index: 1;
    }
`

export default CheckBoxCnt;
