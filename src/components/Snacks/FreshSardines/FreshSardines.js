import "./FreshSardines.css";
const FreshSardines = () => {
  return (
    <div className="FreshSardines">
      <div>
        <h3>YOU DON'T EAT THE SARDINES. THE SARDINES EAT YOU! </h3>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  );
};

export default FreshSardines;
