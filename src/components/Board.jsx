import { useEffect, useState } from "react";
import Cell from "./Cell";

let player = 0;
const squareArray = [];

const Board = () => {
  const [squares, updateSquares] = useState([]);
  const [selected, setSelected] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [cellClass, setCellClass] = useState("cell");

  const handleCellClick = (e) => {
    console.log(e.target);

    if (player === 0) {
      setCellClass("naught");
      setSelected();
      player = 1;
    } else {
      setCellClass("cross");
      player = 0;
    }
  };

  const renderSquares = () => {
    const squareArray = [];

    for (let i = 0; i < 9; i++) {
      squareArray.push(<Cell key={i} handleClick={handleCellClick} />);
    }

    updateSquares(squareArray);
  };

  return (
    <>
      <div className="board">{squares}</div>
    </>
  );
};

export default Board;
