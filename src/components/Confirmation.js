import { useLocation, Link } from "react-router-dom";

// Requirement 3: Display a confirmation message after submission
function Confirmation() {
  const location = useLocation();
  
  // We grab the name passed from the Register form state
  const name = location.state?.name || "Student";

  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ 
        background: "white", 
        padding: "40px", 
        borderRadius: "10px", 
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        borderTop: "5px solid var(--rp-green)" 
      }}>
        <h1 style={{ color: "var(--rp-green)" }}>Registration Successful!</h1>
        <p>Thank you, <strong>{name}</strong>.</p>
        <p>Your interest in the course has been recorded. We will contact you soon via email.</p>
        
        <Link to="/" className="list-item" style={{ display: 'inline-block', marginTop: '20px' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;