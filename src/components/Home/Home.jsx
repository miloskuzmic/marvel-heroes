import {Fragment} from 'react';

//import {UserList} from './userlist/UserList'
//import React, {useState} from 'react';
//import {Search} from './Search'
import { HeroCards} from '../HeroCards/HeroCards';
import Header from "../Header/Header"
import {Footer} from "../Footer/Footer"
import { HeroList } from '../HeroList/HeroList';

const Home = () => {  
    
  return (
    <Fragment>
      <Header />
      <div className='container row'>
      <HeroCards />
      {/* <Search /> */}
      <HeroList/>
      </div>
      <Footer />      
    </Fragment>        
    )
}

export default Home;