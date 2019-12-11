const API_FOOTBALL_KEY = "f7456a84d0c2ad639b04330cd2c83f5b"
// const API_FOOTBALL_ENDPOINT = "https://api-football-v1.p.rapidapi.com/v2/"
const API_FOOTBALL_ENDPOINT = "https://server1.api-football.com/"
const LEAGUE_IDS = {PremierLeague: 2}


const FOOTBALL_DATA_ENDPOINT = "https://api.football-data.org/v2/"
const FOOTBALL_DATA_KEY = "9f2b5a07eb824324a589907375f424c9"

const getResultsByTeamId = teamId => {
    return fetch(`${FOOTBALL_DATA_ENDPOINT}teams/${teamId}/matches?status=FINISHED&limit=10`, {
        headers: {
            "X-Auth-Token": FOOTBALL_DATA_KEY
        }
    })
    .then(resp => resp.json())
    .then(console.log)
}

// const getFixturesByTeamId = teamId => {
//     // return fetch(`${API_FOOTBALL_ENDPOINT}fixtures/team/${teamId}/${LEAGUE_IDS.PremierLeague}`, {
//     fetch("https://server1.api-football.com/fixtures/team/47/2", {
//         // mode: "no-cors"
//         // header{
//         //     // "x-rapidapi-key": API_FOOTBALL_KEY
//         //     "header": [
//         //         `X-RapidAPI-Key: ${API_FOOTBALL_KEY}`
//         //     ]
//         // }
//         "Sec-Fetch-Mode": "no-cors"
//     })
//     .then(resp => resp.json())
//     .then(console.log)
// }

const clubs = [
    {id: 57, name: "Arsenal FC", shortName: "Arsenal", tla: "ARS"},
    {id: 58, name: "Aston Villa FC", shortName: "Aston Villa", tla: "AST"},
    {id: 61, name: "Chelsea FC", shortName: "Chelsea", tla: "CHE"},
    {id: 62, name: "Everton FC", shortName: "Everton", tla: "EVE"},
    {id: 64, name: "Liverpool FC", shortName: "Liverpool", tla: "LIV"},
    {id: 65, name: "Manchester City FC", shortName: "Man City", tla: "MCI"},
    {id: 66, name: "Manchester United FC", shortName: "Man United", tla: "MUN"},
    {id: 67, name: "Newcastle United FC", shortName: "Newcastle", tla: "NEW"},
    {id: 68, name: "Norwich City FC", shortName: "Norwich", tla: "NOR"},
    {id: 73, name: "Tottenham Hotspur FC", shortName: "Tottenham", tla: "TOT"},
    {id: 76, name: "Wolverhampton Wanderers FC", shortName: "Wolverhampton", tla: "WOL"},
    {id: 328, name: "Burnley FC", shortName: "Burnley", tla: "BUR"},
    {id: 338, name: "Leicester City FC", shortName: "Leicester City", tla: "LEI"},
    {id: 340, name: "Southampton FC", shortName: "Southampton", tla: "SOU"},
    {id: 346, name: "Watford FC", shortName: "Watford", tla: "WAT"},
    {id: 354, name: "Crystal Palace FC", shortName: "Crystal Palace", tla: "CRY"},
    {id: 356, name: "Sheffield United FC", shortName: "Sheffield Utd", tla: "SHE"},
    {id: 397, name: "Brighton & Hove Albion FC", shortName: "Brighton Hove", tla: "BHA"},
    {id: 563, name: "West Ham United FC", shortName: "West Ham", tla: "WHU"},
    {id: 1044, name: "AFC Bournemouth", shortName: "Bournemouth", tla: "BOU"}
]


export default { getResultsByTeamId, clubs }