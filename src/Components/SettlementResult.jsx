import React from "react";

const SettlementResult = ({ result }) => {
  if (!result) return <p className="text-gray-500">No settlement calculated yet.</p>;

  return (
    <div className="text-left max-w-md mx-auto whitespace-pre-wrap font-medium text-gray-800">
      {result}
    </div>
  );
};

export default SettlementResult;
