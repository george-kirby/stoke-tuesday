import React, { useState, useEffect } from 'react';
import DarkSkyAPI from '../adapters/DarkSkyAPI'
import StadiumCoOrds from '../adapters/stadiumCoOrds'
import '../stylesheets/Match.css'

const Match = ( {match, homeTeam, focusTeam} ) => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        DarkSkyAPI.getWeatherData(StadiumCoOrds[homeTeam.venue], match.utcDate)
        .then(console.log)
    }, []);

    return (
        <div className="result">
            {match.homeTeam.name} {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam} {match.awayTeam.name} @ {homeTeam.venue}

        </div>
    );
}

export default Match;
