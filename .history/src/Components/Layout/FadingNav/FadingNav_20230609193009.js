/** @format */

import React, { useState, useEffect  ,createContext  } from "react";
import { LoginModal } from "../../Modal/LoginModal";
import { SignupModal } from "../../Modal/SignupModal";

const FadingNav = () => {
  const [modalShow, setModalShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem("mode");
    setIsDarkMode(currentMode === "dark");
  }, []);

  const toggleMode = () => {
    const newMode = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("mode", newMode);
  };

  return (
    <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <SignupModal show={openModal} onHide={() => setOpenModal(false)} />

      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>

      <div className="Fading_Nav">
        <div className="Left_Container">
          <div className="Logo_Div">
            <img src="./Images/logo.png" alt="" />
            <p>FANATIKK</p>
          </div>
        </div>

        <div className="Right_Container">
          <button onClick={() => setModalShow(true)}>Login</button>
          <button onClick={() => setOpenModal(true)}>Sign Up</button>
          <button className="Toggle"  onClick={toggleMode}>
            <img src="./Images/25.png" alt=""   onClick={toggleMode}/>
            <img src="./Images/24.png" alt="" onClick={toggleMode} />
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default FadingNav;
