import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { diplomas } from "../api";

export default function Diplomas() {
    const [search, setSearch] = useState(""); // State to store search text
    const filteredDiplomas = diplomas.filter((dip) =>
        dip.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
    <div className="container">
      <div className="diplomas-header">
        <h1>School of Infocomm Diplomas</h1>
        <p>Select a diploma to explore the modules and curriculum.</p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search diplomas (e.g., 'Financial')..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="diploma-list">
        {filteredDiplomas.length > 0 ? (
          filteredDiplomas.map((dip) => (
            <Link key={dip.id} to={dip.id} className="diploma-card">
              <div className="card-content">
                <h3>{dip.name}</h3>
                <span className="view-link">View Modules →</span>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-results">No diplomas found matching "{search}"</p>
        )}
      </div>
      
      <div className="outlet-container">
        <Outlet /> 
      </div>
    </div>
  );
}