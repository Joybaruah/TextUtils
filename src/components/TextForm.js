import React, { useState } from "react";

export default function TextForm(props) {
  //functions
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //functions end
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="5"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black"
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handlelowClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1"
          onClick={handleClearText}
        >
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </>
  );
}
