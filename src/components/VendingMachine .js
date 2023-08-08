import "./VendingMachine.css";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <nav className="nav card">
        <Link to="/soda">SODA</Link>
        <Link to="./chips">CHIPS</Link>
        <Link to="./freshsardines">FRESH SARDINES</Link>
      </nav>
      <div className="para card">
        {" "}
        <p>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</p>
      </div>
    </div>
  );
};

export default VendingMachine;
