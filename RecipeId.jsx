import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TreadingSlider from './TreadingSlider'
import { useParams } from 'react-router-dom'

const RecipeId = () => {

  const {idMeal } = useParams()

  const [data, setData] = useState([])
  const [active, setActive] = useState('ingredient')

  useEffect(() => {
    const fetchData = async () => {
      
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      const data = await api.json()
      setData(data.meals[0])
      console.log(data)
    }
    fetchData()
  }, [idMeal])
  return (
    <>
      <Navbar />
      < div style={{
        width: '90%',
        margin: 'auto',
        textAlign: 'center'
      }}>


      
       <div className="recipe-container">

  <h1>{data.strMeal}</h1>

  <div className="recipe-box">

    <div className="recipe-img">
      <img src={data.strMealThumb} alt="" />
    </div>

    <div className="recipe-content">

      <button
        className="btn"
        onClick={() => setActive('ingredient')}
      >
        Ingredient
      </button>

      <button
        className="btn"
        onClick={() => setActive('instruction')}
      >
        Instruction
      </button>

      {active === 'ingredient' ? (
        <div>
          <h3>{data.strIngredient1} - {data.strMeasure1}</h3>
          <h3>{data.strIngredient2} - {data.strMeasure2}</h3>
          <h3>{data.strIngredient3} - {data.strMeasure3}</h3>
          <h3>{data.strIngredient4} - {data.strMeasure4}</h3>
          <h3>{data.strIngredient5} - {data.strMeasure5}</h3>
        </div>
      ) : (
        <p>{data.strInstructions}</p>
      )}

    </div>

  </div>

</div>






      <TreadingSlider />
       </div>
    </>
    
  )
  
}

export default RecipeId