import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const TreadingSlider = ()=>{
  const [data, setData] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
        
      const data = await api.json();
      //console.log(data);
      setData(data.meals)
    }
    fetchData();
    
  },[])
 const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 500,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};
  return(
<>
 <div style={{
  height:'25vh',
  width:'99%',
  margin:'auto',
  overflowX:'hidden'
  
 }}>
      <Slider {...settings}
      style={{
        margin:'1rem'
      }}>
       {data && data.map((d) => (
        <Link to={`/${d.idMeal}`} key={d.idMeal}>
        <div className="slider2">
  <img
  src={d.strMealThumb}
  alt=""
  className="slider-img"
/>
  </div>
  </Link>
))}
       
      </Slider>
    </div>
  
</>

  )
}
export default TreadingSlider