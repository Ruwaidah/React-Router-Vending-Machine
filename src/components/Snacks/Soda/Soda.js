import soda from "../../../soda.gif";
import "./Soda.css";
const Soda = () => {
  return (
    <div className="Soda">
      <img src={soda} />
      <div className="para">
        <p>OMG SUGARRRRR</p>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>{" "}
      <img src={soda} />
    </div>
  );
};

export default Soda;
