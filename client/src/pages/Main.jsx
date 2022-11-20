import React from "react";
// import About from "../components/About";
import Home from "../components/Home";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Clients from "../components/Clients";
import Companies from "../components/Companies";

const Main = () => {
  return (
    <>
      <Home />
      <div style={{ marginBottom: "40px" }}></div>
      <Slider />
      <Companies />
      {/* <About /> */}
      <Services />
      <Clients />
    </>
  );
};

export default Main;
