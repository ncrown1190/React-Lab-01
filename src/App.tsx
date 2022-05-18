import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { AdDesigner } from "./AdDesigner";
import { Votes } from "./Votes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
