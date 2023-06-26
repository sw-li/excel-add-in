import React from "react";
import "./HomePage.css";
import TestGetTables from "../components/TestGetTables";

function HomePage() {
  return (
    <>
      <h1>Note:</h1>
      <p>This is the basic task pane add-in structure revisited from yo office</p>
      <TestGetTables></TestGetTables>
    </>
  );
}

export default HomePage;
