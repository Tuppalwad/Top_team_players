import React,{useEffect, useState} from 'react'
import CreateContext from './CreateContext'
function Dataprovider(prop) {
   const [players,setPlayers] = useState([])
    
   const [year, setYear] = useState('')
   const [team1, setTeam1] = useState('')
   const [team2, setTeam2] = useState('')
   const [matchId, setMatchId] = useState('')
 
   const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        console.log(players)
    },[players])

   const Handlesubmit = (e) => {
    e.preventDefault()
    const player = {
      year,
      team1,
      team2,
      matchId
    }

    console.log(player)
    try {
      fetch('http://localhost:5000/get_top_players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(player)
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
            if (result.status === 'ok') {
                const newdat={
                    team1_players:result.players[0]["team1_players"],
                    team2_players:result.players[0]["team2_players"]    
                }
                setPlayers([newdat])
            }
            else{
                alert(result.message)
            }
          setRefresh(true)
        }
      )
    } catch (error) {
      console.log(error)
    }
    
    
  }

  console.log(players.length)
  return (
    <CreateContext.Provider value={{
        players,
        setPlayers,
        year,
        setYear,
        team1,
        setTeam1,
        team2,
        setTeam2,
        matchId,
        setMatchId,
        refresh,
        setRefresh,
        Handlesubmit
    }}>
        {prop.children}
    </CreateContext.Provider>

  )
}

export default Dataprovider