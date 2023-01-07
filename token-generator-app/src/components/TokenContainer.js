import React, { useContext } from "react";
import { tokenContext } from "../App";
import './TokenContainer.css'
import Tokens from "./Tokens/Tokens";

const TokenContainer = () => {
    const {tokens} =useContext(tokenContext);
    console.log(tokens);
    const num= 5;
    return (
        <div className="token-container">
            {tokens.length!==0 ? <div>
                <Tokens data={tokens}/>
            </div>:''}
        </div>
    )
}

export default TokenContainer;