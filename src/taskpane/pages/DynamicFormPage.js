import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import addLineToTable from "../utils/addLineToTable";
import PrintButton from "../components/PrintButton";

/* global console */

function FtmFormPage() {
  const [selectedTable, setSelectedTable] = useState("");
  const [formFields, setFormFields] = useState([]);

  const printComponentRef = useRef(null);

  const handleTableSelection = (e) => {
    setSelectedTable(e.target.value);
    // Fetch the columns of the selected table and set as form fields
    // You can implement the logic to fetch columns based on the selected table
    // and set the form fields accordingly
    const columns = fetchTableColumns(e.target.value);
    setFormFields(columns);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here
    const formData = {};
    formFields.forEach((field) => {
      formData[field] = e.target.elements[field]?.value;
    });

    console.log("input form data: ", formData);
    await addLineToTable(selectedTable, formData);

    // Reset the form fields
    setFormFields([]);

    // Reset the form inputs
    e.target.reset();
  };

  return (
    <>
      <h1>Ajouter une nouvelle FTM</h1>

      <Form style={{ padding: "20px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Sélectionner une table:</Form.Label>
          <Form.Control as="select" onChange={handleTableSelection}>
            <option value="">-- Select a table --</option>
            {/* Render dropdown options with available tables */}
            <option value="Table1">Table1</option>
            <option value="Table2">Table2</option>
            {/* Add more options based on the available tables */}
          </Form.Control>
        </Form.Group>

        {selectedTable && (
          <div className="form-fields" ref={printComponentRef}>
            {formFields.map((field) => (
              <Form.Group key={field} className="mb-3">
                <Form.Label>{field}</Form.Label>
                <Form.Control type="text" name={field} placeholder={field} />
              </Form.Group>
            ))}
          </div>
        )}

        <div className="buttons">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {selectedTable && <PrintButton targetRef={printComponentRef} />}
        </div>
      </Form>
    </>
  );
}

export default FtmFormPage;
