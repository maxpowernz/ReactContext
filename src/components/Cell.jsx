import { useState } from "react";

const Cell = ({ handleClick }) => {
  const [cell, updateCell] = useState(false);

  return (
    <>
      <div className="cell" onClick={handleClick}>
        <div></div>
      </div>
    </>
  );
};

export default Cell;
