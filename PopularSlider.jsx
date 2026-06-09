import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const PopularSlider = ()=>{
  const [data, setData] = useState([])
  useEffect(() => {
  const fetchData = async () => {
    
      const api = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
        );


      const data = await api.json();
setData(data.meals)
    }
    fetchData();
    
  },[])
      
  const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};
  return(
<>
 <div style={{
  height:'56vh',
  width:'90%',
  margin:'auto',
  
 }}>
      <Slider {...settings}
      style={{
        margin:'1rem'
      }}>
       {data && data.map((d) => (
        
       <Link to={`/${d.idMeal}`} key={d.idMeal}>
        <div className="slider">
  <img
  src={d.strMealThumb}
  alt={d.strMeal}
  className="popular-img"
/>
  </div>
  </Link>
  )
)}
       
      </Slider>
    </div>
  
</>

  )
}
export default PopularSlider