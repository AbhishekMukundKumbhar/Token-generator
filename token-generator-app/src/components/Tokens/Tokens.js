import React from "react";
import Bluetoken from "./Bluetoken";
import Redtoken from "./Redtoken";
// import './TokenContainer.css'

const Tokens = (props) => {
    return (
        <div>
            {props.data.map(token => {
                return (
                    token.type === 'red' ?
                        <div id="outer" style={{
                            gridTemplateColumns: `repeat(${parseInt(token.redTokenPerRow)}, 90px)`
                        }}>
                            <Redtoken num = {token.numOfRedToken} prefix = {token.redTokenPrefix}/>
                        </div>
                        : <div id="outer" style={{
                            gridTemplateColumns: `repeat(${parseInt(token.blueTokenPerRow)}, 90px)`
                        }}>
                            <Bluetoken num = {token.numOfBlueToken} prefix = {token.blueTokenPrefix}/>
                        </div>
                )
            })}
        </div>
    )
}

export default Tokens;