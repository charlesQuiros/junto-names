import React, { useState } from "react";
import firebase from "../../firebase";
import "./InputForm.scss";

const InputForm = (props) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("names")
      .add({ title })
      .then(() => {
        setTitle("");
      });
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="inputForm">
        <div>
          <p>Please enter a name</p>
          <input
            className="inputForm-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            required
          />
          <button className="inputForm-button">Send to the Ether</button>
          <p>{props.name}</p>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
