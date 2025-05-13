import React, { useEffect, useState } from "react";
import "./domaineName.css";
import Loading from "../animation/Loading";
import { FcCancel } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";

function DomaineName({ el, setChosenDomain }) {
  console.log(el);
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState(false);
  const checkDomainAvailability = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://rdap.org/domain/${el}`);
      setLoading(false);
      if (!res.ok) {
        setAvailability(true);
      }
    } catch (err) {
      console.log("error", err);
      setLoading(false);
    }
  };

  const handleBtnClick = () => {
    setChosenDomain(el);
  };

  useEffect(() => {
    //set debounce
    const fetchDebouce = setTimeout(() => {
      checkDomainAvailability();
    }, 500);
    return () => {
      clearTimeout(fetchDebouce);
    };
  }, [el]);

  return (
    <div
      className={availability ? "domainName  hover" : "domainName"}
      onClick={() => availability && handleBtnClick()}
    >
      {el ? <h3>{el}</h3> : null}

      {loading ? (
        <Loading />
      ) : availability ? (
        <FcCheckmark size={30} />
      ) : (
        <FcCancel size={30} />
      )}
    </div>
  );
}

export default DomaineName;
