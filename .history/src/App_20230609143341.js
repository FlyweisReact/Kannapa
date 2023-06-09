/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FirstScreen from "./Components/firstScreen";
import SecondScreen from "./Components/secondScreen";
import HomeScreen from "./Pages/HomeScreen";
import Sport from "./Pages/Sport";
import FantasyPreview from "./Pages/FantasyPreview";
import LiveScore from "./Pages/LiveScore";
import VideoScreen from "./Pages/VideoScreen";
import AboutUs from "./Pages/AboutUs";
import Predict from "./Pages/Predict";
import ScoreCard from "./Pages/ScoreCard";
import TrendingNews from "./Pages/TrendingNews";


// Css
import "./CSS/Navbar.css";
import "./CSS/Component.css";
import "./CSS/Footer.css";
import News from "./Pages/News";

// ---------------



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/FantasyPreview" element={<FantasyPreview />} />
        <Route path="/LiveScore" element={<LiveScore />} />
        <Route path="/VideoScreen" element={<VideoScreen />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/scoreCard" element={<ScoreCard />} />
        <Route path="/trendingNews" element={<TrendingNews />} />
        <Route path="/News" element={<News />} />


        <Route path="/second-screen" element={<SecondScreen />} />
      </Routes>
    </div>
  );
}

export default App;