import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import SettlementPage from "./Components/SettlementPage.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settle" element={<SettlementPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;