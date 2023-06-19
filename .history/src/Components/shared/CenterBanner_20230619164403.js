import React , {useContext} from 'react'
import { MyContext } from '../MyContext';

const CenterBanner = () => {
  const { themeClass } = useContext(MyContext);
  return (
    <div>CenterBanner</div>
  )
}

export default CenterBanner