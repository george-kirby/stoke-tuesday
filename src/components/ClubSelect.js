import React from 'react';
import '../stylesheets/ClubSelect.css'

const ClubSelect = ( { clubs, setSelectedClubId } ) => {
    return (
        <div>
            {clubs.map(club => {
                return (
                    <div key={club.id} className="club-card" onClick={() => setSelectedClubId(club.id)}>{club.name}
                        <img className="club-crest" src={club.crestUrl}/>
                    </div>
                )
            })}
        </div>
    );
}

export default ClubSelect;
