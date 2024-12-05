import React, { useState } from 'react'

export default function Textutils(props) {

    const [text, setText] = useState('Enter text here');
    const [capitalizedText, setCapitalizedText] = useState('');
    const [lowercaseText, setLowercaseText] = useState('');
    const [uppercaseText, setUppercaseText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [characterCount, setCharaterCount] = useState(0);
    const [wordReadTime, setWordReadTime] = useState(0);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        // setText(newText);
        let ClearText = ' ';
        setLowercaseText(ClearText);
        setCapitalizedText(ClearText);
        setUppercaseText(newText);
        setWordCount(newText.length);
        setCharaterCount(newText.split(/\s+/).filter((element) => { return element.length !== 0 }).length);
        setWordReadTime(0.008 * newText.split(/\s+/).filter((element) => { return element.length !== 0 }).length);
        props.showAlert('Converted to Uppercase', 'success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let Text = text.toLowerCase();
        // setText(Text);
        let ClearText = ' ';
        setUppercaseText(ClearText);
        setCapitalizedText(ClearText);
        setLowercaseText(Text);
        setWordCount(Text.length);
        setCharaterCount(Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length);
        setWordReadTime(0.008 * Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length);
        props.showAlert('Converted to Lowercase', 'success');
    }

    const handleClearTextClick = () => {
        let ClearText = ''
        setText(ClearText);
        setUppercaseText(ClearText);
        setLowercaseText(ClearText);
        setCapitalizedText(ClearText);
        setWordCount(0);
        setCharaterCount(0);
        setWordReadTime(0);
    }

    const handleCapitalizeTextClick = () => {

        let splitStr = text.toLowerCase().split(' ');

        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        let captialize = splitStr.join(' ');

        let ClearText = ' ';
        setUppercaseText(ClearText);
        setLowercaseText(ClearText);
        setCapitalizedText(captialize);
        setWordCount(captialize.length);
        setCharaterCount(captialize.split(/\s+/).filter((element) => { return element.length !== 0 }).length);
        setWordReadTime(0.008 * captialize.split(/\s+/).filter((element) => { return element.length !== 0 }).length);
        props.showAlert('Converted to Captialize Text', 'success');
        // setText(captialize);
    }
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }} >
                <h2 className='text-center'>Try TextUtils - Word Counter, Character Counter & Remove Extra Spaces</h2>
                <div className="form-floating">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea2" rows="8" style={{ backgroundColor: props.mode === "dark" ? "#9e9e9e" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
                </div>
                <div className="my-2 text-center">
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleCapitalizeTextClick}>Convert to Captialize</button>
                    <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={handleClearTextClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-3 text-center" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your text summary</h2>
                <p>{wordCount} Characters {characterCount} Words</p>
                <h2>Reading Time</h2>
                <p>{wordReadTime} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{capitalizedText}{' '}{lowercaseText}{' '}{uppercaseText}</p>
                <p></p>
            </div>
        </>
    )
}
