import React, { useEffect, useState } from "react";
import CashCompany from "./CashCompany";
import CashPrivate from "./CashPrivate";

const NotShipping = (cartData,delivers) => {
  const [choice, setChoice] = useState("");

  const [privat, setPrivat] = useState(false);
  const [company, setCompany] = useState(false);

  const handleOnChange = (e) => {
    setChoice(e.target.value);
  };

  useEffect(() => {
    choice === "privat" ? setPrivat(true) : setPrivat(false);
    choice === "company" ? setCompany(true) : setCompany(false);
  }, [choice]);

  return (
    <div>
      <select
      className="selectInner"
        placeholder="Kérem válasszon"
        value={choice}
        onChange={handleOnChange}
      >
        <option value="choice">Kérem válasszon</option>
        <option value="company">Cégként vásárolok</option>
        <option value="privat">Magánszemélyként vásárolok</option>
      </select>

      <div style={{marginTop:"20px"}}>
        {privat && <CashPrivate cartData={cartData} delivers={delivers}/>}
        {company && <CashCompany cartData={cartData} delivers={delivers}/>}
      </div>
    </div>
  );
};

export default NotShipping;
