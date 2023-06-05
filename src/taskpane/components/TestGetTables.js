import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./TableSelection.css";

/* global Excel */

function TestGetTables() {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");

  useEffect(() => {
    Excel.run(async (context) => {
      const tables = context.workbook.tables;
      tables.load("items/name");
      await context.sync();
      const tableNames = tables.items.map((table) => table.name);
      setTables(tableNames);
    });
  });

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  };

  return (
    <>
      <div>
        <h3>Table Selection</h3>
        <Form.Group>
          <Form.Label>Select a table:</Form.Label>
          <Form.Control as="select" value={selectedTable} onChange={handleTableChange}>
            <option value="">Select a table</option>
            {tables.map((table, index) => (
              <option key={index} value={table}>
                {table}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </div>
    </>
  );
}

export default TestGetTables;
