import React, { useEffect, useState } from "react";
import NotShipping from "../components/NotShipping";
import Shipping from "../components/Shipping";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import "../style/cartpage.css";




const CartPage = ({ cart, setCart, handleChange}) => {


  const [price, setPrice] = useState(0);

  const [glsPrice, setGlsPrice] = useState(0);
  
  const [cartData, setCartData] = useState([]);

  const [glsBool, setGlsBool] = useState(false);
  

  const [delivers, setDelivers] = useState("");
  
  const [shipping, setShipping] = useState(false);
  const [onCash, setOnCash] = useState(false);
  
console.log(cartData)
  
  const handleOnChange = (e) => {
    setDelivers(e.target.value);
  };

  useEffect(() => {
    glsBool === true ? setGlsPrice(1905) : setGlsPrice(0);
  }, [glsBool]);

  useEffect(() => {
    delivers === "Futárszolgálat" ? setGlsBool(true) : setShipping(false);
    delivers === "SzemélyesÁtvétel" ? setGlsBool(false) : setShipping(true);
    delivers === "Futárszolgálat" ? setShipping(true) : setShipping(false);
    delivers === "SzemélyesÁtvétel" ? setOnCash(true) : setOnCash(false);
  }, [delivers]);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item._id !== id);
    setCart(arr);
    handlePrice();
  };




  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };


  useEffect(() => {
    handlePrice();
  });




  const format = (price) => {
    return Number(price)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  useEffect (() => {
    let orderData = cart.map((item, i) => ({
            key: i,
            id: item._id,
            name: item.name,
            totalPrice: item.price,
            totalAmount: item.amount
        })
    );
    setCartData(orderData);
  }, [cart,setCart]);

  



  return (
    <div className="cartContainer">
      <div className="cartContainer1">
        <div>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: "300",
              lineHeight: "52px",
              letterSpacing: "0px",
              marginBottom: "36px",
            }}
          >
            KOSÁR TARTALMA <ShoppingCartIcon style={{fontSize:"34px"}}/>
          </h1>
        </div>
        <div className="cartMenu">
          <h4>Termék név</h4>
          <h4>Mennyiség</h4>
          <h4>Ár</h4>
        </div>
        {cart.map((item,i) => (
          <div className="cartBox" key={item._id}>
            <img src={item.image} alt="" />
            <div className="cartImg">
              <p>{item.name}</p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "300",
                }}
              >
                {item.subcategory}
              </p>
            </div>
            <div className="cartIncrement">
              <button
                style={{
                  backgroundColor: "white",
                  border: "1px solid grey",
                  borderRadius: "10px",
                }}
                onClick={() => handleChange(item, 1 )}
              >
                +
              </button>
                <button
                style={{
                  backgroundColor: "white",
                  border: "1px solid grey",
                  borderRadius: "10px",
                }}>
                    {item.amount}
                </button>
              
              <button
                style={{
                  backgroundColor: "white",
                  border: "1px solid grey",
                  borderRadius: "10px",
                }}
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>
            </div>
            <div className="cartPrice">
              <span
               style={{ margin: "8px" }}>{format(item.price)},-Ft</span>
              <button
                className="cartDelete"
                style={{ border: "none", fontWeight: "400", margin: "8px" }}
                onClick={() => handleRemove(item._id)}
              >
                Törlés
              </button>
            </div>
          </div>
        )) }
        <div>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: "300",
              lineHeight: "52px",
              letterSpacing: "0px",
              marginTop: "24px",
              marginBottom: "36px",
            }}
          >
            SZÁLLÍTÁSI ÉS SZÁMLÁZÁSI ADATOK <DocumentScannerIcon style={{fontSize: "38px"}}/>
          </h1>
        </div>
        <div className="card-container">
          <div className="deliverContainer">
            <div className="selectMenu">
              <select
                className="selectInner"
                placeholder="Kérem válasszon"
                value={delivers}
                onChange={handleOnChange}
                
              >
                <option value="choice">Kérem válasszon</option>
                <option value="Futárszolgálat">
                  GLS Futárszolgálattal (Bruttó 1.905,-Ft)
                </option>
                <option value="SzemélyesÁtvétel">Személyes átvétel üzletünkben</option>
              </select>
            </div>
            <div className="deliverChoice">
            
              {shipping && <Shipping cartData={cartData} delivers={delivers} />}
              {onCash && <NotShipping cartData={cartData} delivers={delivers} />}
            </div>
          </div>
        </div>
      </div>
      <div className="cartContainer2">
        <div className="total">
          <h5
            style={{
              color: "black",
              justifyContent: "center",
              padding: "8px",
              marginTop: "15px",
            }}
          >

            Rendelés összegzése
          </h5>


          <div style={{ marginTop: "20px" }}>
            {cart.map((item, i) => (
              <div
                key={item._id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>- {item.name}</p>
                <p style={{ paddingLeft: "36px" }}>
                  {item.amount}
                  <span
                    style={{
                      paddingLeft: "2px",
                      fontSize: "15px",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    db
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div className="cartLine"></div>
          </div>
          <span
                     
            style={{
              marginTop: "14px",
              paddingLeft: "2px",
              fontSize: "13px",
              color: "black",
              fontWeight: "400",
            }}
          >
            Szállítási költség: {format(glsPrice)}
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div className="cartLine"></div>
          </div>
          <span
            style={{
              color: "black",
              marginTop: "22px",
              marginBottom: "22px",
              height: "20px",
              padding: "10px",
            }}
          >
            Végösszeg : {format(price + glsPrice)} ,-Ft
          </span>
          
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "14px",
            alignItems: "center",
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default CartPage;
