import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FirstScreen from "./Components/firstScreen";
import SecondScreen from "./Components/secondScreen";
import ThirdScreen from "./Components/thirdScreen";
import FourthScreen from "./Components/fourthScreen";

// Css
import './CSS/Navbar.css'
import './CSS/Component.css'
import './CSS/Footer.css'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
      <Route path='/' element={<HomeS}
        <Route path="/News" element={<FirstScreen />} />
        <Route path="/second-screen" element={<SecondScreen />} />
        <Route path="/third-screen" element={<ThirdScreen />} />
        <Route path="/fourth-screen" element={<FourthScreen />} />
      </Routes>
    </div>
  );
}

export default App;
