import React from 'react';
// import { mainVisual } from "../data/Info.js";
import '../css/home.scss';
import MainVisual from '../components/MainVisual.js';
import FaqNotice from '../components/FaqNotice.js';
import PlaceInfo from '../components/PlaceInfo.js';

const Home = () => {

  return (
    <main id='main'>
        <MainVisual />
        <FaqNotice />
        <PlaceInfo />
    </main>
  )
}

export default Home