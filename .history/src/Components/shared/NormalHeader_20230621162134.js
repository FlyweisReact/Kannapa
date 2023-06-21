import React from 'react'
import Navbar from '../Layout/Navbar'
import MobileNavbar from '../Layout/Responsive/MobileNavbar'

const NormalHeader = () => {
  return (
    <>
 

        <Navbar />


      {/* Mobile Navbar  */}
      <MobileNavbar />
    </>
  )
}

export default NormalHeader