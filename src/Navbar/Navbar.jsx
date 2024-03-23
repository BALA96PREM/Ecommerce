import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
const Navbar = () => {

  const [menu, setMenu] = useState('shop')
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}> <Link to='/'></Link> Shop {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Mens") }}><Link to='Mens'></Link>Men{menu === "Mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to='womens'></Link>Women{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Kids") }}><Link to='Kids'></Link>Kids{menu === "Kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count"></div>
      </div>
    </div>
  );
};

export default Navbar;
