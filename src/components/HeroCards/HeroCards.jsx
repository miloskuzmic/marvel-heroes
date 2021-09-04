import React from 'react';
import {HeroCard} from "../HeroCard/HeroCard"



export const HeroCards = ({data}) => {
    
    return (
        <div className='container row col-8'>  
        {
            data.filter((value,index)=> index < 20 ).map((element)=> <HeroCard name={element.name} image={element.thumbnail.path} key={element.id}/>)
        }
        </div>
    )
}