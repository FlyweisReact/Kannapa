import React , {useContext} from 'react'
import { MyContext } from '../MyContext';

const CenterBanner = () => {
  const { themeClass } = useContext(MyContext);
  return (
    <div className={`Index_Center_Banner ${themeClass}`}>
        <img src="./Images/1.png" alt="" />
      </div>
  )
}

export default CenterBanner