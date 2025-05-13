import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import DomaineContainer from "./components/domaineContainer/DomaineContainer";
import Input from "./components/input/Input";

function App() {
  const [randomDomainNames, setRandomDomainNames] = useState([]);
  const [chosenDomain, setChosenDomain] = useState("");

  return (
    <div className="container">
      <Header />
      <Input
        {...{
          setRandomDomainNames,
          randomDomainNames,
          chosenDomain,
          setChosenDomain,
        }}
      />
      <DomaineContainer {...{ randomDomainNames, setChosenDomain }} />
    </div>
  );
}

export default App;
