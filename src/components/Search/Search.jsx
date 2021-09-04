import React from 'react';
// import {useState} from 'react'

export const Search = ({search, changeSearchInput}) => {
    
    return (
        <div >
            <input type='text' placeholder="Search" onChange={event=>{search(event.target.value)} }/>
            <button type='submit' onClick={changeSearchInput}>Go</button>
        </div>
    )
}
