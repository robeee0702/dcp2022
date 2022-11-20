import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "../style/header.css";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';



const Header = ({size}) => {


  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 180);
  });
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <Link to="/">
              <img className="dentalImg" src="/images/dental.png" alt=""/>
            </Link>
          </div>
          <div className="phonenumber">
            {/* <p>+36 20 956 5480</p> */}
          </div>
          <div className="nav">
              <ul
                className={sidebar ? "nav-links-sidebar" : "nav-links"}
                onClick={() => setSidebar(false)}
              >
                <li style={{marginTop:"5px"}}>
                  <Link style={{fontSize:"18px"}} 
                  to="/shop">Termékek</Link>
                </li>
                <li style={{marginTop:"5px"}}>
                  <Link style={{fontSize:"18px"}} to="/service">Szolgáltatások</Link>
                </li>
                <li style={{marginTop:"5px"}}>
                  <Link style={{fontSize:"18px"}} to="/about">Rólunk</Link>
                </li>
                <li style={{marginTop:"5px"}}>
                  <Link style={{fontSize:"18px"}} to="/contact">Kapcsolat</Link>
                </li>
                <li className="icon" >
                  <Link to="/cart">
                  <ShoppingCartIcon style={{fontSize:"28px"}} className="HeaderIcon" /><span>{size}</span> 
                  </Link>
                  <a href="https://www.facebook.com/kft.dentalcoopplus/"><FacebookIcon style={{fontSize:"32px",color:"blue"}} className="HeaderIcon" /></a>
                </li>
                <li>
                <div className="search" style={{display:"flex",flexDirection:"column",marginTop:"10px"}}>
                  
                 <h6><PhoneIcon/> +36 94 318 590</h6>
                 <h6><EmailIcon/>info@dentalcoopplus.hu</h6>

                </div>
                </li>
              </ul>

            {/* <div
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              
            </div> */}
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <CloseIcon sx={{color:"white"}} /> : <MenuIcon sx={{color:"white"}}/>}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
