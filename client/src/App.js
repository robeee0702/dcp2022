import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CookieConsent from "react-cookie-consent";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import ShopPage from "./pages/ShopPage";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";
import React, { useEffect, useState } from "react";
import Privacy from "./components/Privacy";
import Impressum from "./components/Impressum";
import Szechenyi from "./components/Szechenyi";
import PickUpSite from "./components/PickUpSite";
import Dpi from "./components/Dpi";

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(item);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  useEffect(() => {
    console.log("Cart Changed");
  }, [cart]);

  return (
    <div>
      <Router>
        <div className="App">
          <Header size={cart.length} />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route
              path="/shop"
              render={(routeProps) => {
                return <ShopPage handleClick={handleClick} {...routeProps} />;
              }}
            />
            <Route
              path="/cart"
              render={(routeProps) => {
                return (
                  <CartPage
                    cart={cart}
                    setCart={setCart}
                    handleChange={handleChange}
                    {...routeProps}
                  />
                );
              }}
            />
            <Route
              path="/product/:productID"
              render={(routeProps) => {
                return (
                  <DetailsPage handleClick={handleClick} {...routeProps} />
                );
              }}
            />
            <Route path="/service" component={ServicePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/privacy" component={Privacy}/>
            <Route path="/dpi" component={Dpi}/>
            <Route path="/impresszum" component={Impressum}/>
            <Route path="/szechenyi" component={Szechenyi}/>
            <Route path="/thanks" component={PickUpSite}/>
          </Switch>
          <Footer />
          <CookieConsent
            location="bottom"
            buttonText="Rendben van!"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "18px" }}
            // expires={0}
          >
            Ez a weboldal a jobb felhasználói élmény érdekében cookie-kat használ{" "}
            <span style={{ fontSize: "10px" }}>
              *Kérem jelölje be.
            </span>
          </CookieConsent>
        </div>
      </Router>
    </div>
  );
}

export default App;
