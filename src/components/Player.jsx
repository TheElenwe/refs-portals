import { useState, useRef } from "react";

export default function Player(){
    const playerName = useRef();

    const [enteredPlayerName, setEnteredPLayerName] = useState(null);

    function handleClick(){
        setEnteredPLayerName(playerName.current.value);
        playerName.current.value='';
    }

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
            <p>
                <input ref={playerName} type="text" />
                <button onClick={handleClick}>SetName</button>
            </p>
        </section>
    )
}