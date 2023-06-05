import React from "react";
import { useReactToPrint } from "react-to-print";
import PropTypes from "prop-types";
import "./PrintButton.css";

/* global window */

const PrintButton = ({ targetRef }) => {
  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
    onBeforeGetContent: () => {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    },
    onAfterPrint: () => {
      targetRef.current = null;
    },
  });

  return (
    <button onClick={handlePrint}>
      🖨️
    </button>
  );
};

PrintButton.propTypes = {
  targetRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default PrintButton;
