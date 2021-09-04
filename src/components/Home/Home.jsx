import { Fragment, useEffect, useState } from "react";

//import {UserList} from './userlist/UserList'
//import React, {useState} from 'react';
import { Search } from "../Search/Search";
import { HeroCards } from "../HeroCards/HeroCards";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { HeroList } from "../HeroList/HeroList";
import { getCharData, getSearchData } from "../../server/getData";

const Home = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  

  async function changeSearchInput() {
    let dataResult = [];
    if (text) {
      dataResult = await getSearchData(text);
    } else {
      dataResult = await getCharData();
    }

    setData(dataResult.data.results);
  }

  async function initData() {
    let dataResult = await getCharData();

    //if(dataResult!=null && dataResult.body!=null && dataResult.body.length>0) {
    setData(dataResult.data.results);
    //}
  }

  async function initSearch() {
    let dataResult = await getSearchData(text);

    //if(dataResult!=null && dataResult.body!=null && dataResult.body.length>0) {
    setData(dataResult.data.results);
    //}
  }

  console.log(data);
  useEffect(() => {
    initData();
  }, []);

  return (
    <Fragment>
      <Header />
      <Search search={setText} changeSearchInput={changeSearchInput} />
      <div className="container row">
        <HeroCards data={data} />
        <HeroList />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
