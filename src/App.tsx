import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PositionChart from './Charts/Position-Chart/PositionChart';
import AttackMode from './Charts/Attack-Mode/AttackMode';
import LapChart from './Charts/Lap-Chart/LapChart';
import FanBoost from './Charts/Fan-Boost/FanBoost';
import Overtakes from './Charts/Overtakes/Overtakes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__content">
          <PositionChart/>
          <AttackMode/>
          <LapChart/>
          <FanBoost/>
          <Overtakes/>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
