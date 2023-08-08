import "./Lays.css";
import lays from "../../../lays0.png";

const Chip = (props) => {
  return (
    <img
      className="Lays"
      src={lays}
      style={{ top: `${props.chip.y}vh`, left: `${props.chip.x}vw` }}
    />
  );
};

export default Chip;
