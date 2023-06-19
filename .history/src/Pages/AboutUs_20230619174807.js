import React , {useEffect ,useContext} from 'react'
import Footer from '../Components/Layout/Footer'
import Navbar from '../Components/Layout/Navbar'
import { MyContext } from '../Components/MyContext';

const AboutUs = () => {
    const { themeClass } = useContext(MyContext);
    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
    

  return (
    <>
        <Navbar />

        <div className='AboutUs_Banner'>
            <p>About Us</p>
        </div>

      

        <Footer />
    </>
  )
}

export default AboutUs