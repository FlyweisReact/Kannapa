/** @format */

import React , {useEffect , useContext} from "react";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";
import { MyContext } from "../Components/MyContext";
import CenterBanner from "../Components/shared/CenterBanner";

const VideoScreen = () => {
  const { themeClass } = useContext(MyContext);
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
      <Navbar />
        <CenterBanner />
      <div className={themeClass}></div>
    

      <Footer />
    </>
  );
};

export default VideoScreen;
