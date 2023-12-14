import React from "react";
function ThreePlayerBox(props) {

    console.log(props.data)
    
  return (
    <div className="my-4">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Player Name</th>
            <th scope="col">Type</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
         {
                props.data.team1?(
                    props.data.team1.map((data,index)=>{
                        return(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{data.name}</td>
                                <td>{data.type}</td>
                                <td>{data.runs?data.runs:data.wickets}</td>
                            </tr>
                        )
                    })
                ):(
                    props.data.team2.map((data,index)=>{
                        return(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{data.name}</td>
                                <td>{data.type}</td>
                                <td>{data.runs?data.runs:data.wickets}</td>
                            </tr>
                        )
                    })
                    
                )
         }
         
        </tbody>
      </table>
    </div>
  );
}

export default ThreePlayerBox;
