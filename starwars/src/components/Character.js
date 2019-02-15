import React from 'react';

function Character(props) {
    return (
        <div className="character-box">
        <h3>{props.starwarsChars}</h3>
        </div>
    )
}


export default Character;