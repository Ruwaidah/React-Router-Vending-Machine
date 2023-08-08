import { useState } from "react";
import Chip from "./Lays";
import "./Chips.css";

const Chips = () => {
  const [count, setCount] = useState(0);
  const [chipsImag, setChipsImage] = useState([]);
  const getRandom = () => Math.random() * 100;
  const eatChips = () => {
    setCount(count + 1);
    setChipsImage([...chipsImag, { x: getRandom(), y: getRandom() }]);
  };
  return (
    <div className="Chips">
      <div>
        {chipsImag.map((chip) => (
          <Chip chip={chip} key={chip.x + chip.y} />
        ))}
      </div>
      <div className="chips-card">
        <p>BAGS EATEN: {count}</p>
        <button className="eat-btn" onClick={eatChips}>
          NOM NOM NOM
        </button>
        <button className="goback-btn" onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  );
};

export default Chips;
