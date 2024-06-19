import React, {useState} from 'react'

export default function TextForm(props) {
    const handelUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handelLoClick = () => {
       // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }
    const handelOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value)
        
    }
    const handelOnClear = () => {
        let newText = ""
        setText(newText);
        props.showAlert("Clear Text Succesfully","success");

    }
    const handelCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copy to clipboard","success");
        }
    const handelExtraSpaces = () => {   
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space is removed","success");
    }

    const [text, setText] = useState('Enter Text here');

    return(
    <>
    <div className="container" style={ { color : props.mode==='dark'? 'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'? 'grey':'white' ,color: props.mode=== 'dark'? 'white':'#042743'}} onChange={handelOnChange} id="my-box" rows="3"></textarea>
      </div> 
      <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handelLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handelOnClear}>Clear</button>
      <button className="btn btn-primary mx-1" onClick={handelCopy}>Copy</button>
      <button className="btn btn-primary mx-1" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={ { color : props.mode==='dark'? 'white':'#042743'}}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} words and  {text.length}    character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>

    )
}