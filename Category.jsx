import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import Navbar from './Navbar';
import TreadingSlider from './TreadingSlider';

const Category=()=>{
  const { name = "Indian" } = useParams();
  const [data, setData] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        
       const categoryMap = {
  Indian: "Chicken",
  American: "Beef",
  British: "Seafood",
  Thai: "Dessert",
  Chinese: "Pasta"
};

const apiValue = categoryMap[name] || "Chicken";

const api = await fetch(
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${apiValue}`
);
        const data = await api.json()
        //console.log("Category:", name);
       // console.log(data);
        setData(data.meals || []);
        
      }
      fetchData()
    }, [name])
  return(
    <>
    <Navbar/>
    <div className="cate" style={{
      width:'90%',
      margin:'auto',
      display:'grid',
      gridTemplateColumns:'repeat(4,1fr)',
      gridGap:'1rem',
      marginTop:'2rem',
    
    }}>
    {
      data.map((d)=>{
        return(
          <Link to={`/${d.idMeal}`}className="link">
          <div style={{
            textAlign:'center'
          }}>
            <div className="img">
              <img src={d.strMealThumb} alt="" className="cate-img"style={{width:'13rem'}}/>
            </div>
            <h3>{d.strMeal}</h3>
          </div>
          </Link>
        )
      })
    }
    </div>
    <TreadingSlider/>
    </>

  )

}
export default Category