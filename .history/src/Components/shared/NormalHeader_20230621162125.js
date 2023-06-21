import React from 'react'

const NormalHeader = () => {
  return (
    <>
 

      <div
        className={`${scrolled ? "fade-in" : "fade-out"} Removing_In_Mobile`}
      >
        <Navbar />


      {/* Mobile Navbar  */}
      <MobileNavbar />
    </>
  )
}

export default NormalHeader