import React, { useState, useEffect } from 'react';
import FootballDataAPI from '../adapters/FootballDataAPI'
import '../stylesheets/SelectedClub.css'
import Match from './Match';

const SelectedClub = ( { club, setSelectedClubId, clubs } ) => {

    const [last10Matches, setLast10Matches] = useState([]);

    useEffect(() => {
        FootballDataAPI.getResultsByTeamAndCompetition(club.id, FootballDataAPI.LEAGUE_IDS.PremierLeague)
        // .then(resp => setLast10Matches(resp.matches.slice(-10)))
        .then(resp => setLast10Matches(resp.matches.slice(-2)))
    }, []);

    return (
        <div>
            <h2>
                {club.shortName} 
                <img className="club-crest" src={club.crestUrl} alt={`${club.name} crest`}/>
            </h2>
            <button onClick={() => setSelectedClubId(null)}>Back to all clubs</button>
            {last10Matches.length > 0 ?
            last10Matches.map(match => {
                return <Match key={match.id} focusTeam={club} homeTeam={clubs.find(c => c.id === match.homeTeam.id)} {...{match}}/>
            })  
            :
            "Fetching recent results..."
        }
        </div>
    );
}

export default SelectedClub;
