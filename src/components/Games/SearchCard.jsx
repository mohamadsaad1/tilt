import React from "react";
import { useState } from "react";


const SearchCard=(props) =>{
  const [hover, setHover] = useState(false)
  return(
<div 
    className='gameCard'
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    >
  <div className="wrapper">
  <img className="game-image" src={props.game.background_image} alt='game' />
  </div>
</div>
    
  )
}
export default SearchCard