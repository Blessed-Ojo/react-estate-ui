import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const[Open,setOpen] =useState(false)
  return (
    <div className="Navbar">
      <div className="leftbar">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>PrinceEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="rightbar">
        <a href="">Sign In</a>
        <a href="" className="reg">
          Sign Up
        </a>
        <div className="menuicon">
          <img src="/menu.png" alt="" onClick={()=>setOpen(!Open)}/>
        </div>
        <div className={Open ? 'menu active':'menu'}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign In</a>
          <a href=""> Sign Up </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
