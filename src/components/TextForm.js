import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="5"></textarea>
      </div>
      <button type="button" class="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
