import { useParams } from "react-router-dom";
import { diplomas } from "../api"; 

function Module() {
  const { diplomaId, moduleId } = useParams();
  const diploma = diplomas.find(d => d.id === diplomaId);
  const module = diploma?.modules.find(m => m.id === moduleId);

  if (!module) return <h3>Module Not Found</h3>;

  return (
    <div className="module-card">
      <h3>{module.name}</h3>
      <p>{module.desc}</p>
    </div>
  );
}

export default Module;