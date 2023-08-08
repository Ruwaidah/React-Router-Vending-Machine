import "./App.css";
import VendingMachine from "./components/VendingMachine ";
import { Routes, Route } from "react-router-dom";
import Soda from "./components/Snacks/Soda/Soda";
import Chips from "./components/Snacks/Chips/Chips";
import FreshSardines from "./components/Snacks/FreshSardines/FreshSardines";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/freshsardines" element={<FreshSardines />} />
      </Routes>
    </div>
  );
}

export default App;
