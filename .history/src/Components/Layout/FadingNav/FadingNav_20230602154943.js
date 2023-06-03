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
                <button>Sign Up</button>
                <button className="Toggle">
                    <img src="./Images/25.png" alt='' />
                    <img src="./Images/24.png" alt='' />
                </button>
            </div>
          </div>
        </>
      );
}

export default FadingNav