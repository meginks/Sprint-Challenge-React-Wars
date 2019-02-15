import React from 'react';
import './StarWars.css';


function Character(props) {
    return (
        <div className="character-box">
        <h1>{props.character.name}</h1>
        <p>{props.character.height} centimeters tall</p>
        <p>{props.character.mass} kg</p>
        <p>Hair color: {props.character.hair_color}</p>
        <p>Skin color: {props.character.skin_color}</p>
        <p>Eye color: {props.character.eye_color}</p>
        <p>Gender: {props.character.gender}</p>
        </div>
    )
}


export default Character;