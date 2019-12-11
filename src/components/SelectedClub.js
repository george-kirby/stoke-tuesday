import React, { useState, useEffect } from 'react';
import FootballDataAPI from '../adapters/FootballDataAPI'
import '../stylesheets/SelectedClub.css'

const SelectedClub = ( { club, setSelectedClubId } ) => {

    const [last10Matches, setLast10Matches] = useState([]);

    useEffect(() => {
        FootballDataAPI.getResultsByTeamAndCompetition(club.id, FootballDataAPI.LEAGUE_IDS.PremierLeague)
        .then(resp => setLast10Matches(resp.matches.slice(-10)))
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
                return <div key={match.id} className="result">
                    {match.homeTeam.name} {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam} {match.awayTeam.name}
                </div>
            })
            :
            "Fetching recent results"
        }
        </div>
    );
}

export default SelectedClub;
