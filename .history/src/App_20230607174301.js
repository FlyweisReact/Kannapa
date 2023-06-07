/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FirstScreen from "./Components/firstScreen";
import SecondScreen from "./Components/secondScreen";
import FourthScreen from "./Components/fourthScreen";
import HomeScreen from "./Pages/HomeScreen";
import Sport from "./Pages/Sport";
import FantasyPreview from "./Pages/FantasyPreview";
import LiveScore from "./Pages/LiveScore";

// Css
import "./CSS/Navbar.css";
import "./CSS/Component.css";
import "./CSS/Footer.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/FantasyPreview" element={<FantasyPreview />} />
        <Route path="/LiveScore" element={<LiveScore />} />

        <Route path="/News" element={<FirstScreen />} />
        <Route path="/second-screen" element={<SecondScreen />} />
        <Route path="/fourth-screen" element={<FourthScreen />} />
      </Routes>
    </div>
  );
}

export default App;
