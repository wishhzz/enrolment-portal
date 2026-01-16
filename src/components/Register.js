import { useState } from "react";
import { diplomas } from "../api"; //

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container text-center">
        <div className="confirmation-card">
          <h1>Thank you, {formData.name}!</h1>
          <p>We have received your interest in the <strong>{formData.course}</strong>.</p>
          <p>A consultant from the School of Infocomm will contact you at {formData.email} soon.</p>
          <button className="cta-button" onClick={() => setSubmitted(false)}>Done</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="form-header">
        <h1>Course Registration</h1>
        <p>Take the first step toward your future in tech.</p>
      </div>

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            required 
            placeholder="Enter your name"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            required 
            placeholder="example@rp.edu.sg"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Course of Interest</label>
          <select 
            required
            onChange={(e) => setFormData({...formData, course: e.target.value})}
          >
            <option value="">Select a Diploma</option>
            {diplomas.map(dip => (
              <option key={dip.id} value={dip.name}>{dip.name}</option> //
            ))}
          </select>
        </div>

        <button type="submit" className="submit-button">Submit Interest</button>
      </form>
    </div>
  );
}