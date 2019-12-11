import React, { useState, useEffect } from 'react';
import FootballDataAPI from './adapters/FootballDataAPI'
import ClubSelect from './components/ClubSelect'
import './App.css';

function App() {

  const [clubs, setClubs] = useState([]);
  const [selectedClubId, setSelectedClubId] = useState(null);

  useEffect(() => {
    // FootballDataAPI.getPLClubs()
    // .then(resp => setClubs(resp.teams))
    setClubs(FootballDataAPI.PLClubs1920)
  }, []);

  return (
    <div>
      <h2 className="main-header">But can they do it on a cold, wet, Tuesday night in Stoke?</h2>
      <ClubSelect {...{clubs, setSelectedClubId}}/>
    </div>
  );
}

export default App;
