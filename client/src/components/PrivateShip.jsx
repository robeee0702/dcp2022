import { Card, TextField } from "@mui/material";
import React, { useState } from "react";
import "../style/privateship.css";
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PrivateShip = (cartData) => {



  const [datas, setDatas] = useState([]);

  const deliverInfo = "GLS futárszolgálattal és magáncélú rendelés"


  console.log(datas);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [payment, setPayment] = useState("");

  const [bfullName, setFullNameb] = useState("");
  const [bphonenumber, setPhonenumberb] = useState("");
  const [bcity, setCityb] = useState("");
  const [baddress, setAddressb] = useState("");
  const [bpostalCode, setPostalCodeb] = useState("");
  

  const [checked, setChecked] = useState(false);


  const [isDisabled, setIsDisabled] = useState(true);
  const [checkButton, setCheckButton] = useState(false);

  const manageSite = useHistory();



  const canBeSubmitted = () => {
    return checkButton ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setCheckButton(!checkButton);
    return canBeSubmitted();
  };




  const handleCheckChange = () => {
    setChecked(!checked);
  };


  const handleSelectChange = (e) => {
    setPayment(e.target.value);
  };

  

  Object.values(cartData?.cartData).map((x) => x);

  useEffect(() => {
    setDatas(
      cartData?.cartData?.cartData.map((item) => ({
        productId: item.id,
        productName: item.name,
        totalPrice: item.totalPrice,
        totalAmount: item.totalAmount,
      }))
    );
  }, [cartData]);


  const datak = JSON.stringify(datas, null, "\t");


  const handleSubmit = async (e) => {
    if (
      deliverInfo &&
      datak &&
      email &&
      phonenumber &&
      fullName &&
      city &&
      address &&
      postalCode !== ""
    ) {
      e.preventDefault();
      console.log({
        deliverInfo,
        datak,
        email,
        phonenumber,
        fullName,
        city,
        address,
        postalCode,
        bfullName,
        bphonenumber,
        bcity,
        baddress,
        bpostalCode,
        payment,
      });

      const body = {
        deliverInfo,
        datak,
        email,
        phonenumber,
        fullName,
        city,
        address,
        postalCode,
        bfullName,
        bphonenumber,
        bcity,
        baddress,
        bpostalCode,
        payment,
      };

      await axios
        .post("/api/shopmail", body, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          alert("A megrendelés sikeres volt");
          manageSite.push("/thanks")
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Kérem töltse ki a megadott mezőket");
    }
  };

  console.log();

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <Card className="shippingCardPerson">
          <h5>Számlázási adatok:</h5>

          <TextField
            style={{ margin: "5px 10px 15px 10px" }}
            type="text"
            label="Teljes név"
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          />

          <TextField
            style={{ margin: "5px 10px 15px 10px" }}
            type="text"
            label="Irányítószám"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />

          <TextField
            style={{ margin: "5px 10px 15px 10px" }}
            type="text"
            label="Város,Község"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />

          <TextField
            style={{ margin: "5px 10px 15px 10px" }}
            type="text"
            label="Utca házszám"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />

          <TextField
            style={{ margin: "5px 10px 15px 10px" }}
            type="email"
            label="Email cím"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            style={{ margin: "5px 10px 15px 10px" }}
            type="text"
            label="Telefonszám"
            value={phonenumber}
            required
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </Card>

        <input
          className="checkInput"
          type="checkbox"
          checked={checked}
          onChange={handleCheckChange}
        ></input>
        <span>*Kérem jelölje be a négyzetet,ha eltér a szállítási adat!</span>

        <div className={`checkbox ${!checked ? "checkbox--active" : ""}`}>
          <Card className="shippingCardPerson" style={{ marginTop: "30px" }}>
            <h5>Szállítási adatok:</h5>
          
            <TextField
              style={{ margin: "5px 10px 15px 10px" }}
              type="text"
              label="Teljes név"
              value={bfullName}
              onChange={(e) => setFullNameb(e.target.value)}
            />

            <TextField
              style={{ margin: "5px 10px 15px 10px" }}
              type="text"
              label="Irányítószám"
              value={bpostalCode}
              onChange={(e) => setPostalCodeb(e.target.value)}
            />

            <TextField
              style={{ margin: "5px 10px 15px 10px" }}
              type="text"
              label="Város,Község"
              value={bcity}
              onChange={(e) => setCityb(e.target.value)}
            />

            <TextField
              style={{ margin: "5px 10px 15px 10px" }}
              type="text"
              label="Utca házszám"
              value={baddress}
              onChange={(e) => setAddressb(e.target.value)}
            />

            <TextField
              style={{ margin: "5px 10px 15px 10px" }}
              type="text"
              label="Telefonszám"
              value={bphonenumber}
              onChange={(e) => setPhonenumberb(e.target.value)}
            />
          </Card>
        </div>
        
        <h5 style={{marginTop:"50px"}}>Fizetési mód:</h5>
        <select
          className="selectInner"
          value={payment}
          onChange={handleSelectChange}
        >
          <option value='Banki átutalás'>Banki átutalás</option>
          <option value='Utánvét'>Utánvét</option>
        </select>

        <div style={{margin:"16px"}}>
          <input type="checkbox" onClick={onCheckboxClick} />
          <span>Kijelentem, hogy megismerkedtem a fiókomra vonatkozó valamint az  Adatkezelési Tájékoztató oldalán található,
             a személyes adatok feldolgozására vonatkozó szabályzatok tartalmaival.* (Hozzájárulás szükséges)
          </span>
        </div>
        <button
        type="submit" disabled={isDisabled} className="cartButton">
          Megrendelés
        </button>
      </form>
    </div>
  );
};

export default PrivateShip;
