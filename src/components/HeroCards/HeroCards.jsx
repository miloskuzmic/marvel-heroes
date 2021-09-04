import React from 'react';
import {HeroCard} from "../HeroCard/HeroCard"



export const HeroCards = () => {
    let array = [1,2,3,4,5,6,7]
    return (
        <div className='container row col-8'>  
        {
            array.map(()=> <HeroCard/>)
        }
        </div>
    )
}