import React from 'react';

export const HeroListItem = ({img, name}) => {

    return (<li class="list-group-item"><img src={img + '/standard_small.jpg'} alt={name} /><h1>{name}</h1></li>
    )


}