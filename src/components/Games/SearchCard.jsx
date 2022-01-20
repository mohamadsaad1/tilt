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
  <div className="testt">
  <img src={props.game.background_image} alt='game' />
  {hover && <p>{props.game.name}</p>}
  </div>
</div>
    
  )
}
export default SearchCard