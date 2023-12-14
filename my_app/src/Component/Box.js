import React,{useContext, useEffect} from 'react'
import CreateContext from './Context/CreateContext'
import ThreePlayerBox from './ThreePlayerBox'
function Box() {
    const { players } = useContext(CreateContext);
    useEffect(() => {
        console.log(players)
    },[players]);
    console.log(players.length)
  return (
    <div> {players.length>0? (
        <>
          <p className="h3 text-center">Team one Players</p>

          <ThreePlayerBox data={{ team1: players[0]["team1_players"] }} />
          <p className="h3 text-center">Team two Players</p>
          <ThreePlayerBox data={{ team2: players[0]["team2_players"] }} />
        </>
      ) : (
        <p className="h3 text-center">No Data Found</p>
      )}</div>
  )
}

export default Box