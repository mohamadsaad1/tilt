import React from "react";
import { useState } from "react";


const SearchCard=(props) =>{
  const [hover, setHover] = useState(false)
  return(
<div 
    className="hover"
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    >
  
  { hover && <p>{props.game.name}</p>}
  <img src={props.game.background_image} alt='game' />
  </div>

    
  )
}
export default SearchCard