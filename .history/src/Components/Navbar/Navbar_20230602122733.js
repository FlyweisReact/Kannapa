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
                        </div>
                        <div className="nav5itm">
                            <p>FANTASY PREVIEWS</p>
                        </div>
                        <div className="nav5itm">
                            <p>PREDICT & WIN</p>
                        </div>
                        <div className="nav5itm">
                            <p>NEWS</p>
                        </div>
                        <div className="nav5itm">
                            <p>LIVE SCORES</p>
                        </div>
                        <div className="nav5itm">
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