import React from 'react'

const Header = () => {
  return (
    <>
         <div className={`${scrolled ? "fade-out" : "fade-in"} Removing_In_Mobile`}>
          <Header1 />
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