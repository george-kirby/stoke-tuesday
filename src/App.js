import React, { useEffect } from 'react';
import APIFootball from './adapters/FootballDataAPI'
import './App.css';

function App() {

  useEffect(() => {
    APIFootball.getResultsByTeamId(73)
  }, []);

  return (
    <div>
      <h2 className="main-header">But can they do it on a cold, wet, Tuesday night in Stoke?</h2>
    </div>
  );
}

export default App;
