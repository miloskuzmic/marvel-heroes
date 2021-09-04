import {Fragment, useEffect, useState} from 'react';

//import {UserList} from './userlist/UserList'
//import React, {useState} from 'react';
//import {Search} from './Search'
import { HeroCards} from '../HeroCards/HeroCards';
import Header from "../Header/Header"
import {Footer} from "../Footer/Footer"
import { HeroList } from '../HeroList/HeroList';
import { getCharData } from '../../server/getData';


const Home = () => {  
  const[data, setData]=useState([]);
  
  async function initData() {
    let dataResult = await getCharData();
    
    //if(dataResult!=null && dataResult.body!=null && dataResult.body.length>0) {
      setData(dataResult.data.results)
    //}
  }
console.log(data)
  useEffect( () => {
    initData()
  }, [])
  
  return (
    <Fragment>
      <Header />
      <div className='container row'>
      <HeroCards data={data}/>
      {/* <Search /> */}
      <HeroList/>
      </div>
      <Footer />      
    </Fragment>        
    )
}

export default Home;