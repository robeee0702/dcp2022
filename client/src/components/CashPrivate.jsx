import { Card, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../style/privateship.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CashPrivate = (cartData) => {

  const [datas, setDatas] = useState([]);

  const deliverInfo = "Személyes átvétellel történt magáncélú rendelés"

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");


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

  //console.log("Second object:", datak);


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
      console.log({ email, phonenumber, fullName, city, address, postalCode, deliverInfo });

      const body = {
        deliverInfo,
        datak,
        email,
        phonenumber,
        fullName,
        city,
        address,
        postalCode,
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
            type="email"
            label="Email cím"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
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
            type="text"
            label="Telefonszám"
            value={phonenumber}
            required
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </Card>
        <span style={{ padding: "14px" }}>
          *Üzletünkben csak készpénzes vásárlásra van lehetőség
        </span>
        <div style={{margin:"16px"}}>
          <input type="checkbox" onClick={onCheckboxClick} />
          <span>Kijelentem, hogy megismerkedtem a fiókomra vonatkozó valamint az  Adatkezelési Tájékoztató oldalán található, 
            a személyes adatok feldolgozására vonatkozó szabályzatok tartalmaival.* (Hozzájárulás szükséges)
          </span>
        </div>
        <button type="submit" disabled={isDisabled}  className="cartButton">Megrendelés</button>
      </form>
    </div>
  );
};

export default CashPrivate;
