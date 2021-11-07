import React, { useState } from "react";

export default function TextForm(props) {
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
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          class="btn btn-primary mx-1"
          onClick={handlelowClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          class="btn btn-danger mx-1"
          onClick={handleClearText}
        >
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
