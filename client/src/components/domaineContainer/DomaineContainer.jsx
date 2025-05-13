import React, { useState } from "react";
import "./domaineContainer.css";
import DomaineName from "../availableDomaines/DomaineName";

function DomaineContainer({ randomDomainNames, setChosenDomain }) {
  return (
    <div className="domainNameContainer">
      {randomDomainNames.length > 0 &&
        randomDomainNames.map((el, i) => (
          <DomaineName {...{ el, setChosenDomain }} key={i} />
        ))}
    </div>
  );
}

export default DomaineContainer;
