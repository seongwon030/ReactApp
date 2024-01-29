import React from "react"
import { Link } from "react-router-dom";

import './App.css';

const FirstPage = () => {
    return (
        <div className="firstPage">
            <Link to="/">
                <img src="./back.png" alt="back"></img>
            </Link>
            
        </div>
    );
};

export default FirstPage;