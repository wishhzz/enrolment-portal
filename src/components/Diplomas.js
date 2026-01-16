import { Link, Outlet } from "react-router-dom";
import { diplomas } from "../api";

export default function Diplomas() {
  return (
    <div className="container">
      <div className="diplomas-header">
        <h1>School of Infocomm Diplomas</h1>
        <p>Select a diploma to explore the modules and curriculum.</p>
      </div>

      <div className="diploma-list">
        {diplomas.map((dip) => (
          <Link key={dip.id} to={dip.id} className="diploma-card">
            <div className="card-content">
              <h3>{dip.name}</h3>
              <span className="view-link">View Modules →</span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="outlet-container">
        <Outlet /> 
      </div>
    </div>
  );
}