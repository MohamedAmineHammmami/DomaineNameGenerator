import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import DomaineContainer from "./components/domaineContainer/DomaineContainer";
import Input from "./components/input/Input";

function App() {
  return (
    <div className="container">
      <Header />
      <Input />
      <DomaineContainer />
    </div>
  );
}

export default App;
