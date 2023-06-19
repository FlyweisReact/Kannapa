import React from 'react'

const Pagination = () => {

    
  const { themeClass } = useContext(MyContext);

  return (
    <div className={`Pagination_Div ${themeClass}`}>
    <p tabIndex={0} className='Pagination_Div_Dark_P' >
      <i className="fa-solid fa-angle-left"></i>
    </p>
    <p tabIndex={0} className='Pagination_Div_Dark_P' >1</p>
    <p tabIndex={0} className='Pagination_Div_Dark_P' >2</p>
    <p tabIndex={0} className='Pagination_Div_Dark_P' >3</p>
    <p tabIndex={0} className='Pagination_Div_Dark_P'  >4</p>
    <p tabIndex={0} className='Pagination_Div_Dark_P' >5 </p>
    <p tabIndex={0} className='Pagination_Div_Dark_P' >...</p>
    <p tabIndex={0} className='Pagination_Div_Dark_P' >238</p>
    <p tabIndex={0} className='Pagination_Div_Dark_P' >
      <i className="fa-solid fa-angle-right"></i>
    </p>
  </div>
  )
}

export default Pagination