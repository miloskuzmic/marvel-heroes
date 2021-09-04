import React from 'react';
import { HeroListItem } from '../HeroListItem/HeroListItem';

export const HeroList = () => {
    let style1 = {width: '18 rem'}
    let array = [1,2,3,4,5,6,7]
    return (
        <div class="card col-4" style={style1}>
            <ul class="list-group list-group-flush">
               {
                   array.map(() => <HeroListItem/>)
               } 
            </ul>
        </div>
        
    )


}