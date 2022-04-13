// import React from 'react'

import React, { useState } from 'react';


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("UperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convereted to UpperCase", "success");
    }

    const handleLoClick = () => {
        // console.log("UperCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convereted to LowerCase", "success");
    }
    //     var newText = document.getElementById("MyBox");

    //     /* Select the text field */
    //     newText.select();
    //     newText.setSelectionRange(0, 99999); /* For mobile devices */

    //      /* Copy the text inside the text field */
    //     navigator.clipboard.writeText(newText.value);

    //     /* Alert the copied text */
    //     alert("Copied the text: " + newText.value);
    //   } 









    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleExtraSpaceClick = () => {
        // console.log("UperCase was Clicked" + text);
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert("ExtraSpace is removed", "success");


    }


    const handleClearClick = () => {
        // console.log("UperCase was Clicked" + text);
        let newText = (" ");
        setText(newText);
        props.showAlert("All Cleared ", "success");

    }
    const handleCopyClick = () => {
        // console.log(" Copyed " );
        var newText = document.getElementById("MyBOX");
        newText.select();
        // setText(newText);
        // newText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("copied txt ", "success");
    }

    const [text, setText] = useState('');
    // setText("Convert your lowerCase to UpperCase ") ;

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="Text" ClassName="form-label">Example textarea</label> */}
                    {/* value={text} */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#b4ff2d17' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="MyBOX" rows="8"  ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2 my-2 " onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-2 my-2 " onClick={handleExtraSpaceClick}>Remove ExtraSpace</button>
            </div>
            <div className="container my-1" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <center><h1>Your Total Summary</h1>
                    <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and  {text.length} Character </p></center>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your Content to Preview"}</p>
            </div>
        </>

    )

}



