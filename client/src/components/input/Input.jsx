import React, { useEffect, useState } from "react";
import "./input.css";

const domainSuffixes = {
  suffixes: [
    "ify",
    "ly",
    "hub",
    "base",
    "stack",
    "labs",
    "lab",
    "gen",
    "loop",
    "flow",
    "kit",
    "craft",
    "nest",
    "verse",
    "space",
    "box",
    "io",
    "ai",
    "app",
    "dev",
    "co",
    "to",
    "zilla",
    "storm",
    "spark",
    "cloud",
    "engine",
    "nation",
  ],
  tlds: [
    ".com", // Commercial
    ".net", // Network
    ".org", // Organization
    ".co", // Company or Colombia (popular alt to .com)
    ".io", // British Indian Ocean (popular with tech startups)
    ".dev", // Developers
    ".app", // Mobile/web apps
    ".ai", // Artificial Intelligence
    ".tech", // Technology
    ".site", // General use
    ".web", // Web-related
    ".xyz", // Modern/general use
    ".online", // Broad usage
    ".store", // E-commerce
    ".space", // Creative/flexible use
    ".cloud", // SaaS, cloud-based
    ".tools", // Developer or productivity tools
    ".studio", // Creatives and agencies
    ".digital", // Digital services
    ".systems", // Infrastructure
    ".solutions", // Consulting, tech services
  ],
};

function Input({
  setRandomDomainNames,
  randomDomainNames,
  chosenDomain,
  setChosenDomain,
}) {
  const [domainName, setDomainName] = useState(chosenDomain);
  const [tld, setTld] = useState(".com");

  console.log("chosenDomain", chosenDomain);
  console.log("domainName", domainName);
  console.log("randomDomainNames", randomDomainNames);

  const getDomainName = (e) => {
    setDomainName(e.target.value);
  };

  const genRandomDomainNames = () => {
    setRandomDomainNames(
      domainName && !chosenDomain
        ? domainSuffixes.suffixes.map((el) => domainName.concat(el).concat(tld))
        : []
    );
  };

  const getTld = (e) => {
    setTld(e.target.value);
  };

  useEffect(() => {
    !domainName && setChosenDomain("");
    genRandomDomainNames();
  }, [domainName, tld]);

  useEffect(() => {
    setDomainName(chosenDomain);
  }, [chosenDomain]);

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Enter the domain name.."
        value={domainName}
        onChange={(e) => getDomainName(e)}
        maxLength={8}
      />
      <select name="Tlds" onChange={(e) => getTld(e)}>
        {domainSuffixes.tlds.map((el, i) => (
          <option value={el} key={i}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Input;
