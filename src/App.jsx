import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Hero.jsx";
import SettlementPage from "./Components/SettlementPage.jsx";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settle" element={<SettlementPage />} />
      </Routes>
    </div>
  );
};

export default App;