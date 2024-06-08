import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showalert("Text has been converted to UpperCase","success");
    };
    const handleLoClick = () => {
      const newText = text.toLowerCase();
      setText(newText);
      props.showalert("Text has been converted to LowerCase","success");
  };
    const handleOnChange = (event) => {
        const newval = event.target.value;
        setText(newval);
    };
    const handleClearClick = () => {
      const newText = "";
      setText(newText);
      props.showalert("Text has been Cleared","success");
  };
  const handleCopy = () => {
    var text=document.getElementById('mybox');
    navigator.clipboard.writeText(text.value);
    props.showalert("Text has been Copied","success");
};

    return (
      <>
        <div className="contanier" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="mybox"
                    rows="8"
                    style={{backgroundColor: props.mode === 'dark'?'#13466e':'white',color: props.mode === 'dark'?'white':'black'}}
                ></textarea>
            </div>
            <button disabled ={text.length === 0}className="btn btn-primary" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
          
            <button disabled ={text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button disabled ={text.length === 0} className="btn btn-primary " onClick={handleClearClick}>
                Clear Text
            </button>
            <button disabled ={text.length === 0} className="btn btn-primary mx-2 " onClick={handleCopy}>
                Copy Text
            </button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
          <h1>your text summary</h1>
          <p>{text.split(" ").filter((element)=>{ return element.length!== 0}).length} words and {text.length} charecters</p>
          <p>{0.008*text.split(" ").filter((element)=>{ return element.length!== 0}).length} Minutes read</p>
          <h3>Preview</h3>
          <p>{text}</p>
          </div>
        </>
    );
}
