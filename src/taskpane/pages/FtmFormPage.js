import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import addLineToTable from "../utils/addLineToTable";
import PrintButton from "../components/PrintButton";

/* global console*/

function FtmFormPage() {
  const [ftmOrder, setFtmOrder] = useState("");
  const [ftmNumber, setFtmNumber] = useState("");
  const [ftmIndex, setFtmIndex] = useState("");
  const [ftmId, setFtmId] = useState("");
  const [ftmStatus, setFtmStatus] = useState("");
  const [ftmUrgency, setFtmUrgency] = useState("");
  const [ftmTitle, setFtmTitle] = useState("");
  const [ftmRequestDate, setFtmRequestDate] = useState("");
  const [ftmDescription, setFtmDescription] = useState("");
  const [ftmOrigin, setFtmOrigin] = useState("");
  const [ftmIssueDate, setFtmIssueDate] = useState("");
  const [ftmDelayImpact, setFtmDelayImpact] = useState(false);
  const [ftmDelayImpactDetails, setFtmDelayImpactDetails] = useState("");
  const [ftmSummaryImpact, setFtmSummaryImpact] = useState(false);
  const [ftmFollowUpObservations, setFtmFollowUpObservations] = useState("");
  const [ftmEstimatedCost, setFtmEstimatedCost] = useState(0);

  const printComponentRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here
    const formData = {
      "N° d'ordre FTM": ftmOrder,
      "N° FTM": ftmNumber,
      "Indice FTM": ftmIndex,
      "ID FTM": ftmId,
      "Etat FTM": ftmStatus,
      "Degré d'urgence FTM": ftmUrgency,
      "Intitulé FTM": ftmTitle,
      "Date demande MOA": ftmRequestDate,
      "Descriptif succinct FTM": ftmDescription,
      "Origine de la demande": ftmOrigin,
      "Date émision FTM": ftmIssueDate,
      "Impact délai": ftmDelayImpact,
      "Détail impact délai (analyse Moe)": ftmDelayImpactDetails,
      "Impact synthèse": ftmSummaryImpact,
      "Observations sur suivi FTM (action à mener)": ftmFollowUpObservations,
      "Montant estimatif Moe": ftmEstimatedCost,
    };

    console.log("input form data: ", formData);
    await addLineToTable("FTMdata", formData);

    // Reset the state variables to their initial values
    setFtmOrder("");
    setFtmNumber("");
    setFtmIndex("");
    setFtmId("");
    setFtmStatus("");
    setFtmUrgency("");
    setFtmTitle("");
    setFtmRequestDate("");
    setFtmDescription("");
    setFtmOrigin("");
    setFtmIssueDate("");
    setFtmDelayImpact(false);
    setFtmDelayImpactDetails("");
    setFtmSummaryImpact(false);
    setFtmFollowUpObservations("");
    setFtmEstimatedCost(0);
  };

  return (
    <>
      <h1>Ajouter une nouvelle FTM</h1>

      <Form style={{ padding: "20px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" ref={printComponentRef}>
          <Form.Label>N° d'ordre FTM:</Form.Label>
          <Form.Control
            type="text"
            placeholder="N° d'ordre FTM"
            value={ftmOrder}
            onChange={(e) => setFtmOrder(e.target.value)}
          />

          <Form.Label>N° FTM:</Form.Label>
          <Form.Control
            type="text"
            placeholder="N° FTM"
            value={ftmNumber}
            onChange={(e) => setFtmNumber(e.target.value)}
          />

          <Form.Label>Indice FTM:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Indice FTM"
            value={ftmIndex}
            onChange={(e) => setFtmIndex(e.target.value)}
          />

          <Form.Label>ID FTM:</Form.Label>
          <Form.Control type="text" placeholder="ID FTM" value={ftmId} onChange={(e) => setFtmId(e.target.value)} />

          <Form.Label>Etat FTM:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Etat FTM"
            value={ftmStatus}
            onChange={(e) => setFtmStatus(e.target.value)}
          />

          <Form.Label>Degré d'urgence FTM:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Degré d'urgence FTM"
            value={ftmUrgency}
            onChange={(e) => setFtmUrgency(e.target.value)}
          />

          <Form.Label>Intitulé FTM:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Intitulé FTM"
            value={ftmTitle}
            onChange={(e) => setFtmTitle(e.target.value)}
          />

          <Form.Label>Date demande MOA:</Form.Label>
          <Form.Control type="date" value={ftmRequestDate} onChange={(e) => setFtmRequestDate(e.target.value)} />

          <Form.Label>Descriptif succinct FTM:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Descriptif succinct FTM"
            value={ftmDescription}
            onChange={(e) => setFtmDescription(e.target.value)}
          />

          <Form.Label>Origine de la demande:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Origine de la demande"
            value={ftmOrigin}
            onChange={(e) => setFtmOrigin(e.target.value)}
          />

          <Form.Label>Date émision FTM:</Form.Label>
          <Form.Control type="date" value={ftmIssueDate} onChange={(e) => setFtmIssueDate(e.target.value)} />

          <Form.Label>Impact délais:</Form.Label>
          <Form.Check
            type="switch"
            id="impactDelais"
            label="Impact délais"
            checked={ftmDelayImpact}
            onChange={() => setFtmDelayImpact(!ftmDelayImpact)}
          />

          <Form.Label>Détail impact délai (analyse MOE):</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Détail impact délai (analyse MOE)"
            value={ftmDelayImpactDetails}
            onChange={(e) => setFtmDelayImpactDetails(e.target.value)}
          />

          <Form.Label>Impact synthèse:</Form.Label>
          <Form.Check
            type="switch"
            id="impactSynthese"
            label="Impact synthèse"
            checked={ftmSummaryImpact}
            onChange={() => setFtmSummaryImpact(!ftmSummaryImpact)}
          />

          <Form.Label>Observations sur suivi FTM (action à mener):</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Observations sur suivi FTM (action à mener)"
            value={ftmFollowUpObservations}
            onChange={(e) => setFtmFollowUpObservations(e.target.value)}
          />

          <Form.Label>Montant estimatif MOE (€):</Form.Label>
          <Form.Control
            type="number"
            placeholder="Montant estimatif MOE"
            value={ftmEstimatedCost}
            onChange={(e) => setFtmEstimatedCost(parseFloat(e.target.value))}
          />
        </Form.Group>
        <div className={"buttons"}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <PrintButton targetRef={printComponentRef}></PrintButton>
        </div>
      </Form>
    </>
  );
}

export default FtmFormPage;
