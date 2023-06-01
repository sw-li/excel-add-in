import React from "react";
import { useState } from "react";
//import addFTM from "../utils/addFTM";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

/* global console*/

function FormPage() {
  const [object, setObject] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    //await addFTM();
    setObject("");
  };

  const handleTextInput = (e) => {
    setObject(e.target.value);
    console.log("input changed");
  };

  return (
    <div>
      <h1>Form Page</h1>
      <p>This is the Form page</p>
      {/*       <form onSubmit={handleSubmit}>
        <label>
          Value <input type="text" value={object} onChange={handleTextInput} />
        </label>
        <button type="submit">Submit</button>
      </form> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Object input</Form.Label> <br />
          <Form.Control placeholder="Object input" value={object} onChange={handleTextInput} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormPage;
