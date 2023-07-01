import React from "react";
import {  Link  } from "react-router-dom"
import SearchBar from "../SearchBar/searchBar";



export default function Nav() {
  
  
    return (
      <div>
        <SearchBar />
        <Link to="/about">
            <h3>About</h3>
        </Link>
        <Link to="/home">
            <h3>Home</h3>
        </Link>
        <Link to="/favorites">
            <h3>Favorites</h3>
        </Link>
        
      </div>
    );
  }
  