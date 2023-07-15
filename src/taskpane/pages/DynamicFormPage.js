import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import addLineToTable from "../utils/addLineToTable";
import PrintButton from "../components/PrintButton";
import getTableColumns from "../utils/getTableColumns";
import getInputType from "../utils/getInputType";
import GetTables from "../components/GetTables";
/* global console */

function FtmFormPage() {
  const [selectedTable, setSelectedTable] = useState("");
  const [formFields, setFormFields] = useState([]);

  const printComponentRef = useRef(null);

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

  const handleTableChange = async (table) => {
    setSelectedTable(table);
    const columns = await getTableColumns(table);
    // bug here, can't retrive columns names in an array instead of a promise
    console.log("columns:", columns);
    setFormFields(columns);
  };

  return (
    <>
      <h1>Ajouter une nouvelle FTM</h1>
      <GetTables onTableChange={handleTableChange}></GetTables>

      {/* <Form style={{ padding: "20px" }} onSubmit={handleSubmit}>
        {selectedTable && (
          <div className="form-fields" ref={printComponentRef}>
            {formFields.map((column) => {
              if (column.validationRule && column.validationRule.type === "list") {
                const options = column.validationRule.formula1.split(",");
                return (
                  <Form.Group key={column.columnName} className="mb-3">
                    <Form.Label>{column.columnName}</Form.Label>
                    <Form.Select name={column.columnName}>
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                );
              } else {
                return (
                  <Form.Group key={column.columnName} className="mb-3">
                    <Form.Label>{column.columnName}</Form.Label>
                    <Form.Control
                      type={getInputType(column.dataType)}
                      name={column.columnName}
                      placeholder={column.columnName}
                    />
                  </Form.Group>
                );
              }
            })}
          </div>
        )}
      </Form> */}

      <Form style={{ padding: "20px" }} onSubmit={handleSubmit}>
        {selectedTable !== "" ? (
          <div className="form-fields" ref={printComponentRef}>
            <h1>A table is selected </h1>
            {formFields.map((column) => {
              return <h2> {column} </h2>;
            })}
          </div>
        ) : (
          <h1 style={{ color: "grey" }}>Selected table will show up here</h1>
        )}
      </Form>
    </>
  );
}

export default FtmFormPage;
