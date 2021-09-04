import React from 'react';
import { Link } from 'react-router-dom';


export const HeroCard = ({name, image,fillMyTeam,id}) => {  
 let style1 = {width: '18 rem'}
  return (  
  
    <div className="card col-3 " style={style1}> 
      <img src={image + '/portrait_xlarge.jpg'} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-primary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/Hero" >Info</Link>
          <button onClick={()=>fillMyTeam(id)} >Add</button>
        </div>
    </div> )
}