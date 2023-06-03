import React , { useState , useEffect} from 'react'
import FadingCategory from '../Components/Layout/FadingNav/FadingCategory'
import FadingNav from '../Components/Layout/FadingNav/FadingNav'
import Header1 from '../Components/Layout/FadingNav/Header1'

const HomeScreen = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
    <div className=''>
    <Header1 />
    <FadingNav />
    <FadingCategory />
    </div>
    </>
  )
}

export default HomeScreen