import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { getTableNames } from "../utils/getTableNames";
import "./TableSelection.css";

/* global console*/

function TableSelection() {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const fetchTables = async () => {
    try {
      console.log("fetching tables");
      const tableList = await getTableNames(); // Function to fetch tables from Excel
      setTables(tableList);
    } catch (error) {
      console.error("Error fetching tables:", error);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  };

  const handleConfirmSelection = () => {
    // Do something with the selected table
    console.log("Selected table:", selectedTable);
  };

  return (
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
      <Button variant="primary" onClick={handleConfirmSelection} disabled={!selectedTable}>
        Confirm Selection
      </Button>
    </div>
  );
}

export default TableSelection;
