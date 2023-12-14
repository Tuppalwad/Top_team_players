import React,{useContext, useEffect} from "react";
import CreateContext from "./Context/CreateContext";
function InputBox() {

  const {year, setYear,team1, setTeam1,team2, setTeam2,matchId, setMatchId,Handlesubmit} = useContext(CreateContext)

  

  
  return (
    <>
      <h1 className="text-center">Top Three players of the World cup match</h1>
      <div className="row  mt-5">
        <div className="col-md-3 my-2  ">
          <select class="form-select" aria-label="Default select example"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          >
            <option selected>Year</option>
            <option value="2023">
              2023
            </option>
            <option value="2019">
              2019
            </option>
            <option value="2015">
              2015
            </option>
          </select>
        </div>
        <div className="col-md-3 my-2">
          <select class="form-select" aria-label="Default select example"
          value={team1}
          onChange={(e) => setTeam1(e.target.value)}
          >
            <option selected>Team Name 1</option>
            < option value="India">India</option>
            <option value="South Africa">South Africa</option>
            <option value="England">England</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Pakistan">Pakistan</option>
            <option value="West Indies">West Indies</option>
          </select>
        </div>
        <div className="col-md-3 my-2">
          <select class="form-select" aria-label="Default select example"
          value={team2}
          onChange={(e) => setTeam2(e.target.value)}
          >
            <option selected>Team Name 2</option>
            < option value="India">India</option>
            <option value="South Africa">South Africa</option>
            <option value="England">England</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Pakistan">Pakistan</option>
            <option value="West Indies">West Indies</option>
          </select>
        </div>
        <div className="col-md-3 my-2 ">
          <select class="form-select" aria-label="Default select example"
          value={matchId}
          onChange={(e) => setMatchId(e.target.value)}
          >
            <option selected>Mach ID</option>
            <option value="101">101</option>
            <option value="102">102</option>
            <option value="103">103</option>
            <option value="104">104</option>
            <option value="105">105</option>
            <option value="106">106</option>
          </select>
        </div>

        <div className="col-md-3 mt-3 ">
          <button type="button" onClick={Handlesubmit} className="btn btn-primary">
            Search Player
          </button>
          </div>
      </div>


    </>
  );
}

export default InputBox;
