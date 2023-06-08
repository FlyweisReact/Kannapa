import React from 'react'
import Navbar from '../Components/Layout/Navbar'

const AboutUs = () => {
  return (
    <>
        <Navbar />

        <div className='AboutUs_Banner'>
            <p>About Us</p>
        </div>

        <div className='AboutUs_Content'>
            <p className='head'>The Journey From Sports Field to Fingertips</p>
            <p className='desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
            </ul>
        </div>
    </>
  )
}

export default AboutUs