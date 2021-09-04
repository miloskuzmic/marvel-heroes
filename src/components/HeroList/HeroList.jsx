import React,{useEffect} from 'react';
import { HeroListItem } from '../HeroListItem/HeroListItem';

export const HeroList = ({addedHeroes}) => {
    console.log('HeroList', addedHeroes)
    let style1 = {width: '18 rem'}
    let array =addedHeroes;
    
   
    return (
        
            <div class="card col-4" style={style1}>
            <h2>My Team</h2>
            <ul class="list-group list-group-flush">
               {
                   array.map(element =>{
                       return (element.map(elem=>{
                           return (<HeroListItem img={elem.thumbnail.path} name={elem.name}/>)
                       }))
                   })
               } 
            </ul>
        </div>
            
       
       
        
    )


}