import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);

    const addPlayer=()=>{
        const newTeam=team + 1;
        setTeam(newTeam);
    }
    const removePlayer=()=>{
        setTeam(team - 1);
    }


    const styleTeam={
        border:'2px solid red',
        borderRadius:'15px',
        padding:'10px',
        margin:'10px'
    }

    return(
        <div style={styleTeam}>
            <h3>Team-{team}</h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}