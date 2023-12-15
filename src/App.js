import Header from "./Component/Header";
import React from "react";
import ListofPlayers from "./Component/ListofPlayers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerDetail from "./Component/PlayerDetail";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ListofPlayers />} />
          <Route path="/player/:id" element={<PlayerDetail />} />
          <Route
            path="*"
            element={<h1 className="notfound">Not Found 404</h1>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
