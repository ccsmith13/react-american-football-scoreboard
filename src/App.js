import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [lionScore, setLionScore] = useState(0);
  const [tigerScore, setTigerScore] = useState(0);
  const [currentQuarter, setCurrentQuarter] = useState(1);
  

  const homeTouchdown = event => {
    setLionScore(lionScore + 7);
  };
  const homeFieldGoal = event => {
    setLionScore(lionScore + 3);
  };
  const awayTouchdown = event => {
    setTigerScore(tigerScore + 7);
  };
  const awayFieldGoal = event => {
    setTigerScore(tigerScore + 3);
  };
  const increaseQuarter = event => {
    setCurrentQuarter(currentQuarter + 1);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow
          cq = {currentQuarter}
        />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
        </div>
        <div className = "quarterButton">
          <button className = "quarterButton__quarter" onClick={increaseQuarter}>Next Quarter</button>
        </div>
      </section>
    </div>

  );

}

export default App;
