import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i
              style={{ fontSize: "22px" ,
              textShadow: "1px 1px 5px #000000",
              fontWeight: "bold",
            }}
            >WCC 2023</i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
