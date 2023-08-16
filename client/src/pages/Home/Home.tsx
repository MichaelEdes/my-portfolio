import React from "react";
import styled from "./Home.module.scss";
import "../../styles/global.scss";

function Home() {
  return (
    <div className="App">
      <header className={styled.header}>
        <div>
          <h1 className="hello">hello</h1>
        </div>
      </header>
    </div>
  );
}

export default Home;
