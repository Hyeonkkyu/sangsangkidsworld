import React from 'react';
// import { mainVisual } from "../data/Info.js";
import '../css/home.scss';
import MainVisual from './MainVisual.js';
import FaqNotice from './FaqNotice.js';
import PlaceInfo from './PlaceInfo.js';

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