import React from "react";
import { useState } from "react";
//import addFTM from "../utils/addFTM";
import addLineToTable from "../utils/addLineToTable";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormPage.css";
/* global console*/

function FormPage() {
  const [ftmId, setFtmId] = useState("");
  const [ftmIndex, setFtmIndex] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //await addFTM({ id: ftmId, index: ftmIndex });
    await addLineToTable("FTMdata", { id: ftmId, index: ftmIndex });
    setFtmId("");
    setFtmIndex("");
  };

  const handleId = (e) => {
    setFtmId(e.target.value);
    console.log("input changed");
  };
  const handleIndex = (e) => {
    setFtmIndex(e.target.value);
    console.log("input changed");
  };

  return (
    <>
      <h1>Ajouter une nouvelle FTM</h1>

      <Form style={{ padding: "20px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>ID: </Form.Label>
          <Form.Control placeholder="ID FTM" value={ftmId} onChange={handleId} />
          <Form.Label>INDICE: </Form.Label>
          <Form.Control placeholder="INDICE" value={ftmIndex} onChange={handleIndex} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormPage;
