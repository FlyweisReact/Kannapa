/** @format */
import { useEffect , useContext , useCallback} from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
import News from "./Pages/News";
import { MyContext } from './Components/MyContext';


// Css
import "./CSS/Navbar.css";
import "./CSS/Component.css";
import "./CSS/Footer.css";
import './CSS/Responsive.css'
import './CSS/Tab.css'
import './CSS/Mobile.css'
// ---------------



function App() {
  const { setTheme , theme  } = useContext(MyContext);
  const Mode = localStorage.getItem('theme')
  console.log(Mode  , "dsad")

  const  ThemeMaker = useCallback(() => {
    if(Mode === null) { 
      localStorage.setItem("theme" , 'light')
      setTheme(localStorage.getItem("theme"))
    }else{
      console.log("Mode" , Mode)
      console.log(localStorage.getItem("theme"))
    }
  },[setTheme , Mode])

  useEffect(() => {
    ThemeMaker()
  },[ThemeMaker])

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
        <Route path="/News-Big" element={<SecondScreen />} />
      </Routes>
    </div>
  );
}

export default App;
