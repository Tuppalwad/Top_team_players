import React, { useEffect, useState } from "react";
import Detail from "../Details.js";
import { useParams } from "react-router-dom";

function PlayerDetail() {
  const [player, setPlayer] = useState({}); 
  const id = useParams();
  useEffect(() => {
    setPlayer(Detail.find((player) => player.id === parseInt(id.id)));
  }, [id]);
  console.log(player);
  return (
    <div className="p-2 ">

        <h1 className="text-center my-2 heading"
        
        >Player Details</h1>
      <div className="container">
      <div className="row my-4 ">
        <div
          className="col-md-4 text-center h-100 leftbox my-2"
          
        >
            <img className="image" src={player.img} alt={player.Name} />
            <h2>{player.full_name}</h2>
            <h4>{player.role}</h4>
            <table 
            className="table table-striped table-bordered shadow-lg p-3 mb-5 bg-white rounded "
            >
                <thead 
                
                >
                    <tr>
                        <th>Total Runs</th>
                        <th>High Score</th>
                        <th>Centuries</th>
                        <th>Half Centuries</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{player.TotalRuns}</td>
                        <td>{player.HighestScore}</td>
                        <td>{player.centuries}</td>
                        <td>{player.fifties}</td>
                    </tr>
                </tbody>
            </table>

           

        </div>
        <div className="col-md-8 my-2" 
        
          style={{
            overflowX: "scroll",
            // hide the scrollbar
            scrollbarWidth: "none",

          }}
        >
          <table className="table table-bordered table-striped  shadow-lg p-3 mb-5 bg-white rounded 
          "
          
          >
            <thead className="text-center">
              <tr>
                <th>Match No.</th>
                <th>Runs</th>
                <th>balls</th>
                <th>fours</th>
                <th>sixes</th>
                <th>Opponent</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {player.score?.map((match, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{match.run}</td>
                  <td>{match.balls}</td>
                  <td>{match.fours}</td>
                  <td>{match.sixes}</td>
                  <td>{match.Opponent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}

export default PlayerDetail;
