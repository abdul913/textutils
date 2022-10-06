import React, { useState } from "react";

export default function Textform(props) {
  var oncahngeHandler = (e) => {
    setText(e.target.value);
    setPrivew(text);
  };

  const [text, setText] = useState("");
  const [privew, setPrivew] = useState(
    "Enter text on above textarea to Priview"
  );

  const UprclickHandler = () => {
    setText(text.toUpperCase());
    // chanding privew asper the button
    if (document.getElementById("myBox").value.length !== 0) {
      setPrivew(text.toUpperCase());
      props.showAlert("Text has beenconverted to UpperCase", "success")
    }
  };
  const LowrclickHandler = () => {
    setText(text.toLowerCase());
    // chanding privew asper the button
    if (document.getElementById("myBox").value.length !== 0) {
      setPrivew(text.toLowerCase());
      props.showAlert("Text has beenconverted to LowerCase", "success")
    }
  };

  const rmoveExatraSpc = () => {
    setText(text.replace(/\s{2,}/g, " ").trim());
    props.showAlert("Extra space has been removed", "success")

  };

  

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{backgroundColor: props.mode==='light'?'gray':'white', color:props.mode==='light'?'white':'gray'}}
            className="form-control"
            value={text}
            onChange={oncahngeHandler}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={UprclickHandler}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={LowrclickHandler}>
          Convert to Lowerrcase
        </button>
        <button className="btn btn-primary mx-2" onClick={rmoveExatraSpc}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview:</h2>
        <p>{privew}</p>
      </div>
    </>
  );
}
