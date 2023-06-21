import React from 'react'
import { Navbar } from 'react-bootstrap'
import FadingCategory from '../Layout/FadingNav/FadingCategory'
import FadingNav from '../Layout/FadingNav/FadingNav'
import MobileNavbar from '../Layout/Responsive/MobileNavbar'

const Header = () => {
  return (
    <>
         <div className={`${scrolled ? "fade-out" : "fade-in"} Removing_In_Mobile`}>
          <Header />
          <FadingNav />
          <FadingCategory />
        </div>

        <div className={`${scrolled ? "fade-in" : "fade-out"} Removing_In_Mobile`}>
          <Navbar />
        </div>

          {/* Mobile Navbar  */}
        <MobileNavbar />
    </>
  )
}

export default Header