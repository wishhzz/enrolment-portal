import { useParams, Link, Outlet } from "react-router-dom";
import { diplomas } from "../api"; 

function Diploma() {
  const { diplomaId } = useParams();
  const diploma = diplomas.find(d => d.id === diplomaId);

  if (!diploma) return <h3 className="error-message">Diploma Not Found</h3>;

  return (
    <div className="diploma-detail-container">
      {/* Dynamic Header based on the selected Diploma */}
      <h2 className="section-title">{diploma.name} Modules</h2>
      
      <div className="module-list">
        {diploma.modules.map(mod => (
          <Link key={mod.id} to={mod.id} className="module-item-link">
            <div className="module-dot"></div>
            {mod.name}
          </Link>
        ))}
      </div>

      {/* This ensures the specific module description is at the very bottom */}
      <div className="module-description-outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Diploma;