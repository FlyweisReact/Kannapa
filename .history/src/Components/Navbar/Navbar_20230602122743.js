import React from "react";

const Navbar = ()=>{
    return (
        <>
            <div className="Navbar">

                <div className="Left_Container">
                    <div className="Logo_Div">
                        <img src='./Images/logo.png' alt="" />
                        <p>FANATIKK</p>
                    </div>
                </div>

                <div className="Right_Container">
                 
                            <p>SPORTS</p>
                   
                            <p>FANTASY PREVIEWS</p>
               
                            <p>PREDICT & WIN</p>
                   
                            <p>NEWS</p>
                   
                            <p>LIVE SCORES</p>
                      
                            <p>VIDEOS</p>
                        </div>
                        <div className="nav5itm">
                            <p>ABOUT US</p>
                        </div>
               
                </div>
            </div>
        </>
    )
}

export default Navbar;