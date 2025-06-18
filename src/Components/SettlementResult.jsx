// src/Components/SettlementResult.jsx
import React from "react";

function SettlementResult({ result }) {
  return (
    <pre style={{ marginTop: "20px", fontWeight: "bold", whiteSpace: "pre-wrap" }}>
      {result}
    </pre>
  );
}

export default SettlementResult;