import rpBanner from "../assets/RPbanner.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="banner-wrapper">
          <img src={rpBanner} alt="RP Banner" className="banner-image" />
        </div>
        <div className="hero-text">
          <h1>Welcome to the School of Infocomm</h1>
          <p>
            Ignite your passion for technology. Explore our industry-leading 
            diplomas and kickstart your career at Republic Polytechnic.
          </p>
          <button className="cta-button" onClick={() => navigate("/diplomas")}>
            Browse Diplomas
          </button>
        </div>
      </section>
    </div>
  );
}