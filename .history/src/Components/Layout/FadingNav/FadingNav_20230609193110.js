/** @format */

import React, { useState, useEffect  ,createContext  } from "react";
import { LoginModal } from "../../Modal/LoginModal";
import { SignupModal } from "../../Modal/SignupModal";

export const ModeContext = createContext();

const FadingNav = () => {
  const [modalShow, setModalShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <SignupModal show={openModal} onHide={() => setOpenModal(false)} />

      <ModeContext.Provider value={{ isDarkMode, toggleMode }}>
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
      </ModeContext.Provider>
    </>
  );
};

export default FadingNav;
