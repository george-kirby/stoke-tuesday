import Keys from './Keys'

const LEAGUE_IDS = {PremierLeague: 2021}

const FOOTBALL_DATA_ENDPOINT = "https://api.football-data.org/v2/"
const FOOTBALL_DATA_KEY = Keys.REACT_APP_KEY_FOOTBALL_DATA

const getResultsByTeamAndCompetition = (teamId, competitionId) => {
    return fetch(`${FOOTBALL_DATA_ENDPOINT}teams/${teamId}/matches?status=FINISHED&competitions=${competitionId}`, {
        headers: {
            "X-Auth-Token": FOOTBALL_DATA_KEY
        }
    })
    .then(resp => resp.json())
}

const getClubsByLeagueId = leagueId => {
    return fetch(`${FOOTBALL_DATA_ENDPOINT}competitions/${leagueId}/teams`, {
        headers: {
            "X-Auth-Token": FOOTBALL_DATA_KEY
        }
    })
    .then(resp => resp.json())
}

const PLClubs1920 = [
        {
          "id": 57,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Arsenal FC",
          "shortName": "Arsenal",
          "tla": "ARS",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
          "address": "75 Drayton Park London N5 1BU",
          "phone": "+44 (020) 76195003",
          "website": "http://www.arsenal.com",
          "email": "info@arsenal.co.uk",
          "founded": 1886,
          "clubColors": "Red / White",
          "venue": "Emirates Stadium",
          "lastUpdated": "2019-12-05T02:29:47Z"
        },
        {
          "id": 58,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Aston Villa FC",
          "shortName": "Aston Villa",
          "tla": "AST",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
          "address": "Villa Park Birmingham B6 6HE",
          "phone": "+44 (0121) 3272299",
          "website": "http://www.avfc.co.uk",
          "email": null,
          "founded": 1872,
          "clubColors": "Claret / Sky Blue",
          "venue": "Villa Park",
          "lastUpdated": "2019-12-05T02:27:27Z"
        },
        {
          "id": 61,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Chelsea FC",
          "shortName": "Chelsea",
          "tla": "CHE",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg",
          "address": "Fulham Road London SW6 1HS",
          "phone": "+44 (0871) 9841955",
          "website": "http://www.chelseafc.com",
          "email": null,
          "founded": 1905,
          "clubColors": "Royal Blue / White",
          "venue": "Stamford Bridge",
          "lastUpdated": "2019-12-05T02:27:32Z"
        },
        {
          "id": 62,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Everton FC",
          "shortName": "Everton",
          "tla": "EVE",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg",
          "address": "Goodison Park Liverpool L4 4EL",
          "phone": "+44 (0871) 6631878",
          "website": "http://www.evertonfc.com",
          "email": "everton@evertonfc.com",
          "founded": 1878,
          "clubColors": "Blue / White",
          "venue": "Goodison Park",
          "lastUpdated": "2019-12-05T02:27:34Z"
        },
        {
          "id": 64,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Liverpool FC",
          "shortName": "Liverpool",
          "tla": "LIV",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg",
          "address": "Anfield Road Liverpool L4 OTH",
          "phone": "+44 (0844) 4993000",
          "website": "http://www.liverpoolfc.tv",
          "email": "customercontact@liverpoolfc.tv",
          "founded": 1892,
          "clubColors": "Red / White",
          "venue": "Anfield",
          "lastUpdated": "2019-12-05T02:27:36Z"
        },
        {
          "id": 65,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Manchester City FC",
          "shortName": "Man City",
          "tla": "MCI",
          "crestUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
          "address": "SportCity Manchester M11 3FF",
          "phone": "+44 (0870) 0621894",
          "website": "https://www.mancity.com",
          "email": "mancity@mancity.com",
          "founded": 1880,
          "clubColors": "Sky Blue / White",
          "venue": "Etihad Stadium",
          "lastUpdated": "2019-12-05T02:27:38Z"
        },
        {
          "id": 66,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Manchester United FC",
          "shortName": "Man United",
          "tla": "MUN",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg",
          "address": "Sir Matt Busby Way Manchester M16 0RA",
          "phone": "+44 (0161) 8688000",
          "website": "http://www.manutd.com",
          "email": "enquiries@manutd.co.uk",
          "founded": 1878,
          "clubColors": "Red / White",
          "venue": "Old Trafford",
          "lastUpdated": "2019-12-05T02:29:49Z"
        },
        {
          "id": 67,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Newcastle United FC",
          "shortName": "Newcastle",
          "tla": "NEW",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/5/56/Newcastle_United_Logo.svg",
          "address": "Sports Direct Arena Newcastle upon Tyne NE1 4ST",
          "phone": null,
          "website": "http://www.nufc.co.uk",
          "email": "admin@nufc.co.uk",
          "founded": 1881,
          "clubColors": "Black / White",
          "venue": "St. James' Park",
          "lastUpdated": "2019-12-05T02:27:42Z"
        },
        {
          "id": 68,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Norwich City FC",
          "shortName": "Norwich",
          "tla": "NOR",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/8/8c/Norwich_City.svg",
          "address": "Carrow Road Norwich NR1 1JE",
          "phone": null,
          "website": "http://www.canaries.co.uk",
          "email": "reception@ncfc-canaries.co.uk",
          "founded": 1902,
          "clubColors": "Yellow / Green",
          "venue": "Carrow Road",
          "lastUpdated": "2019-12-05T02:27:45Z"
        },
        {
          "id": 73,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Tottenham Hotspur FC",
          "shortName": "Tottenham",
          "tla": "TOT",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg",
          "address": "Bill Nicholson Way, 748 High Road London N17 OAP",
          "phone": "+44 (0844) 4995000",
          "website": "http://www.tottenhamhotspur.com",
          "email": "customer.care@tottenhamhotspur.com",
          "founded": 1882,
          "clubColors": "Navy Blue / White",
          "venue": "Tottenham Hotspur Stadium",
          "lastUpdated": "2019-12-05T02:27:51Z"
        },
        {
          "id": 76,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Wolverhampton Wanderers FC",
          "shortName": "Wolverhampton",
          "tla": "WOL",
          "crestUrl": "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
          "address": "Waterloo Road Wolverhampton WV1 4QR",
          "phone": "+44 (0871) 2222220",
          "website": "http://www.wolves.co.uk",
          "email": "info@wolves.co.uk",
          "founded": 1877,
          "clubColors": "Black / Gold",
          "venue": "Molineux Stadium",
          "lastUpdated": "2019-12-05T02:29:51Z"
        },
        {
          "id": 328,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Burnley FC",
          "shortName": "Burnley",
          "tla": "BUR",
          "crestUrl": "https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png",
          "address": "Harry Potts Way Burnley BB10 4BX",
          "phone": "+44 (0871) 2211882",
          "website": "http://www.burnleyfootballclub.com",
          "email": "info@burnleyfc.com",
          "founded": 1881,
          "clubColors": "Claret / Sky Blue",
          "venue": "Turf Moor",
          "lastUpdated": "2019-12-05T02:28:00Z"
        },
        {
          "id": 338,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Leicester City FC",
          "shortName": "Leicester City",
          "tla": "LEI",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png",
          "address": "The Walkers Stadium, Filbert Way Leicester LE2 7FL",
          "phone": "+44 (0844) 8156000",
          "website": "http://www.lcfc.com",
          "email": null,
          "founded": 1884,
          "clubColors": "Royal Blue / White",
          "venue": "King Power Stadium",
          "lastUpdated": "2019-12-05T02:28:05Z"
        },
        {
          "id": 340,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Southampton FC",
          "shortName": "Southampton",
          "tla": "SOU",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg",
          "address": "Britannia Road Southampton SO14 5FP",
          "phone": null,
          "website": "http://www.saintsfc.co.uk",
          "email": "sfc@saintsfc.co.uk",
          "founded": 1885,
          "clubColors": "Red / White / Black",
          "venue": "St. Mary's Stadium",
          "lastUpdated": "2019-12-05T02:28:06Z"
        },
        {
          "id": 346,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Watford FC",
          "shortName": "Watford",
          "tla": "WAT",
          "crestUrl": "https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg",
          "address": "Vicarage Road Watford WD18 0ER",
          "phone": null,
          "website": "http://www.watfordfc.com",
          "email": "yourvoice@watfordfc.com",
          "founded": 1881,
          "clubColors": "Yellow / Black",
          "venue": "Vicarage Road Stadium",
          "lastUpdated": "2019-12-05T02:28:13Z"
        },
        {
          "id": 354,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Crystal Palace FC",
          "shortName": "Crystal Palace",
          "tla": "CRY",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_%282013%29.png",
          "address": "Whitehorse Lane London SE25 6PU",
          "phone": "+44 (020) 87686000",
          "website": "http://www.cpfc.co.uk",
          "email": "info@cpfc.co.uk",
          "founded": 1905,
          "clubColors": "Red / Blue",
          "venue": "Selhurst Park",
          "lastUpdated": "2019-12-05T02:28:21Z"
        },
        {
          "id": 356,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Sheffield United FC",
          "shortName": "Sheffield Utd",
          "tla": "SHE",
          "crestUrl": "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg",
          "address": "Bramall Lane Sheffield, Yorkshire S2 4SU",
          "phone": "+44 (0871) 9951899",
          "website": "http://www.sufc.co.uk",
          "email": "info@sufc.co.uk",
          "founded": null,
          "clubColors": "Red / White / Black",
          "venue": "Bramall Lane",
          "lastUpdated": "2019-12-05T02:28:23Z"
        },
        {
          "id": 397,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "Brighton & Hove Albion FC",
          "shortName": "Brighton Hove",
          "tla": "BHA",
          "crestUrl": "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
          "address": "44 North Road Brighton & Hove BN1 1YR",
          "phone": "+44 (01273) 878288",
          "website": "http://www.seagulls.co.uk",
          "email": "seagulls@bhafc.co.uk",
          "founded": 1898,
          "clubColors": "Blue / White",
          "venue": "The American Express Community Stadium",
          "lastUpdated": "2019-12-05T02:28:38Z"
        },
        {
          "id": 563,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "West Ham United FC",
          "shortName": "West Ham",
          "tla": "WHU",
          "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg",
          "address": "Green Street, Upton Park London E13 9AZ",
          "phone": "+44 (020) 85482794",
          "website": "http://www.whufc.com",
          "email": "yourcomments@westhamunited.co.uk",
          "founded": 1895,
          "clubColors": "Claret / Sky Blue",
          "venue": "London Stadium",
          "lastUpdated": "2019-12-05T02:28:46Z"
        },
        {
          "id": 1044,
          "area": {
            "id": 2072,
            "name": "England"
          },
          "name": "AFC Bournemouth",
          "shortName": "Bournemouth",
          "tla": "BOU",
          "crestUrl": "https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg",
          "address": "Dean Court, Kings Park Bournemouth BH7 7AF",
          "phone": "+44 (01202) 726300",
          "website": "http://www.afcb.co.uk",
          "email": "admin@afcb.co.uk",
          "founded": 1890,
          "clubColors": "Red / Black",
          "venue": "Vitality Stadium",
          "lastUpdated": "2019-12-05T02:28:48Z"
        }
      ]


export default { getResultsByTeamAndCompetition, getClubsByLeagueId, PLClubs1920, LEAGUE_IDS }