import React from "react";
import { useState } from "react";

/* global console*/

function FormPage() {
  const [object, setObject] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new value:", object);
    setObject("");
  };

  const handleInputText = (e) => {
    setObject(e.target.value);
    console.log("input changed");
  };

  return (
    <div>
      <h1>Form Page</h1>
      <p>This is the Form page</p>
      <form onSubmit={handleSubmit}>
        <label>
          Value <input type="text" value={object} onChange={handleInputText} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
