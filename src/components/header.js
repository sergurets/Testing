import React, { Component } from "react";
import Search from "./search.js";
import Link from "./link.js";

import '../styles/header.css';

function Header(props) {
 // throw new Error('error in header');
      return (
        <div className="header">
          <h2>Netflix search</h2>
          <h1>FIND YOUR MOVIE</h1>
          <Search onClick = {props.onClick}/>
          <Link  title={'LINK'} url={'LINK'}/>
        </div>
      );
  }
  
  export default Header;