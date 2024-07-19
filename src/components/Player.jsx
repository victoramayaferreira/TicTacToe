import { useState } from "react"

export default function Player({name, symbol}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditClick() {
        setIsEditing(editing => !editing);//don't use the previous state value directly
        //--setIsEditing(!isEditing); //This is wrong as React schedule this calls
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required placeholder={playerName} onChange={handleChange}/>;
        btnCaption = 'Save';
    }

    return <li>
        <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
}