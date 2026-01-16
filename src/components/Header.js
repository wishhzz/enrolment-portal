import { Link } from "react-router-dom";
import rpLogo from "../assets/RPlogo.png"; 

export default function Header() {
  return (
    <header>
      <div className="container header-content">
        <Link to="/">
          <img src={rpLogo} alt="Republic Polytechnic Logo" style={{ height: "50px" }} />
        </Link>
        <nav>
          <Link to="/">Home</Link> | <Link to="/diplomas">Diplomas</Link> | <Link to="/register">Register</Link>
        </nav>
      </div>
    </header>
  );
}