import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';




const Navbar = ()=>{
   const categories = [
  { name: "Indian", api: "Chicken" },
  { name: "American", api: "Beef" },
  { name: "British", api: "Seafood" },
  { name: "Thai", api: "Dessert" },
  { name: "Chinese", api: "Pasta" }
];
  const navigate=useNavigate()
  const [input,setInput] =useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/search/${input}`);
  }
  return(
    <>
    <div className="nav">
      <div className="left">
          <Link to="/" className="link">
    <h2>Food Hub</h2>
 
         </Link>
      </div>
<div class="search">
  <form onSubmit={handleSubmit}>
<input 
onChange={(e)=>setInput(e.target.value)}


type="text" placeholder='search food..'></input>



    </form>
  
</div>
<div className="right">
 
{categories.map((cat) => (
  <Link
    key={cat.name}
    to={`/category/${cat.name}`}
    className="link"
  >
    <div>{cat.name}</div>
  </Link>
))}
  
  
 
</div>

      
    </div>
    </>
  )
}
export default Navbar