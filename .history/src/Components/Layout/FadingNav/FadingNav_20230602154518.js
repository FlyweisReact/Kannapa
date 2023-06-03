import React from "react";

const FadingNav = () => {
    return (
        <>
          <div className="Fading_Nav">
            <div className="Left_Container">
              <div className="Logo_Div">
                <img src="./Images/logo.png" alt="" />
                <p>FANATIKK</p>
              </div>
            </div>
    
            <div className="Right_Container">
                <button>Login</button>
            </div>
          </div>
        </>
      );
}

export default FadingNav