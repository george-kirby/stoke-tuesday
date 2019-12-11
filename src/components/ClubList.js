import React from 'react';
import '../stylesheets/ClubList.css'

const ClubList = ( { clubs, setSelectedClubId } ) => {
    return (
        <div>
            {clubs.map(club => {
                return (
                    <div key={club.id} className="club-card" onClick={() => setSelectedClubId(club.id)}>{club.shortName}
                        <img className="club-crest" src={club.crestUrl} alt={`${club.name} crest`}/>
                    </div>
                )
            })}
        </div>
    );
}

export default ClubList;
