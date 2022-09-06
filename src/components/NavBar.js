import React from "react";
import logo from './../assets/logo.jpeg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css"


const Header = ()=> {
    return (
        <header>
        <img src={logo} alt="logo" />
        <h1> Wait for it</h1>
        <nav>
            <ul>
           <li> <a href="">Comida</a></li>
           <li> <a href="">Bebidas</a></li>
           <li> <a href="">Postres</a></li>
           </ul>
        </nav>
        <ShoppingCartIcon id="carrito"  sx={{ fontSize: 40 }} />
        <i class="ri-shopping-cart-line"></i>
        </header>
  
    )
  }
  
  export default Header;