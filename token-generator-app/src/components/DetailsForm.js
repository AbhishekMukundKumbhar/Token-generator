import React, { useState, useContext } from "react";
import { tokenContext } from "../App";
import './DetailsForm.css';

const DetailsForm = () => {
    const [numOfBlueToken, setNumOfBlueToken] = useState('');
    const [blueTokenPrefix, setBlueTokenPrefix] = useState('');
    const [blueTokenPerRow, setBlueTokenPerRow] = useState('');
    const [numOfRedToken, setNumOfRedToken] = useState('');
    const [redTokenPrefix, setRedTokenPrefix] = useState('');
    const [redTokenPerRow, setRedTokenPerRow] = useState('');
    const [data, setData] = useState();
    const { tokens, dispatch } = useContext(tokenContext);
    const mappingData = () => {
        const redToken = {
            type: 'red',
            numOfRedToken,
            redTokenPerRow,
            redTokenPrefix
        }
        const blueToken = {
            type: 'blue',
            numOfBlueToken,
            blueTokenPerRow,
            blueTokenPrefix
        }
        return [blueToken, redToken];
    }
    const setAllFieldsClear = ()=>{
        setNumOfBlueToken('')
        setBlueTokenPrefix('')
        setBlueTokenPerRow('')
        setNumOfRedToken('')
        setRedTokenPrefix('')
        setRedTokenPerRow('')
    }

    const submittedForm = (e) => {
        e.preventDefault();
        if (numOfBlueToken && numOfRedToken && redTokenPrefix && blueTokenPrefix) {
            const mappedData = mappingData();
            setData(mappedData);
            dispatch({ type: "GENERATE", payload: mappedData })
            setAllFieldsClear();
        }
        else(
            alert('please provide all the fields')
        )

    }
    return (
        <div className="form-container">
            <h1>Token Generator Application</h1>
            <form onSubmit={(e) => submittedForm(e)}>
                <table>
                    <tbody>
                        <tr>
                            <td>Number of blue tokens</td>
                            <td>:</td>
                            <td><input type={'number'} value={numOfBlueToken} onChange={(e) => setNumOfBlueToken(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Blue token prefix</td>
                            <td>:</td>
                            <td><input type={'text'} value={blueTokenPrefix} onChange={(e) => setBlueTokenPrefix(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Blue token per row</td>
                            <td>:</td>
                            <td><input type={'number'} value={blueTokenPerRow} onChange={(e) => setBlueTokenPerRow(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Number of red tokens</td>
                            <td>:</td>
                            <td><input type={'number'} value={numOfRedToken} onChange={(e) => setNumOfRedToken(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Red token prefix</td>
                            <td>:</td>
                            <td><input type={'text'} value={redTokenPrefix} onChange={(e) => setRedTokenPrefix(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Red token per row</td>
                            <td>:</td>
                            <td><input type={'number'} value={redTokenPerRow} onChange={(e) => setRedTokenPerRow(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><button type="submit" >Generate</button> <button type="button" onClick={() => dispatch({ type: "CLEAR" })}>Clear</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default DetailsForm;