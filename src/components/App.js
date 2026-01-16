import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Module from "./Module";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />}>
            <Route path=":moduleId" element={<Module />} />
          </Route>
          <Route index element={<h3>Select a diploma to view modules</h3>} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;