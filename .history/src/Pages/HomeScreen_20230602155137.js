import React from 'react'
import FadingCategory from '../Components/Layout/FadingNav/FadingCategory'
import FadingNav from '../Components/Layout/FadingNav/FadingNav'
import Header1 from '../Components/Layout/FadingNav/Header1'

const HomeScreen = () => {
  return (
    <>
    <div className='Fading_Div'>
    <Header1 />
    <FadingNav />
    <FadingCategory />
    </div>
    </>
  )
}

export default HomeScreen