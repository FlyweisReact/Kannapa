import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FirstScreen from "./Components/firstScreen";
import SecondScreen from "./Components/secondScreen";
import ThirdScreen from "./Components/thirdScreen";
import FourthScreen from "./Components/fourthScreen";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/second-screen" element={<SecondScreen />} />
        <Route path="/third-screen" element={<ThirdScreen />} />
        <Route path="/fourth-screen" element={<FourthScreen />} />
      </Routes>
    </div>
  );
}

export default App;
