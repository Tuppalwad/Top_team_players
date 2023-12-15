import React from "react";
import Data from "../TopPlayes.js";
import { Link } from "react-router-dom";
function ListofPlayers() {
  return (
    <div>
      <h1 className="text-center playerlist">
        List of Top Players in the World 2023
      </h1>
      <div className="container">
        {/* bootstrap cards hear  */}
        <div className="row mt-5">
          {Data.map((player) => (
            <div className="col-md-4 my-3" key={player.id}>
              <div className="card">
                <div className="card-header">
                  <h3>{player.Name}</h3>
                </div>
                <div className="card-body d-flex">
                  <img
                    src={player.img}
                    alt={player.Runs}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                  <ul
                    className="
                   pl-3 pt-3
                  "
                  >
                    <li className="list-group-item">
                      <b>Runs: {player.Runs}</b>
                    </li>
                    <li className="list-group-item">
                      Highest Score: {player.HighestScore}*
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <Link to={`/player/${player.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListofPlayers;
