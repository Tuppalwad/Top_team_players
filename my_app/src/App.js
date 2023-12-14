import Box from "./Component/Box";
import CreateContext from "./Component/Context/CreateContext";
import Header from "./Component/Header";
import InputBox from "./Component/InputBox";
import React from "react";
function App() {
  
  return (
    <>
      <Header />
      <div className="container mt-3 w-75">
        <InputBox />
       <Box />
      </div>
    </>
  );
}

export default App;
