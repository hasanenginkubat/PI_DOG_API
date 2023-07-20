import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import style from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={style.navbar}>
      <div className={style.searchBar}>
        <SearchBar />
      </div>
      <div className={style.menu}>
        <Link className={style.link} to="/home">
          <h3 className={style.navItem}>Home</h3>
        </Link>
        <Link className={style.link} to="/about">
          <h3 className={style.navItem}>About</h3>
        </Link>
        <Link className={style.link} to="/favorites">
          <h3 className={style.navItem}>Favorites</h3>
        </Link>
        <Link className={style.link} to="/createDog">
          <h3 className={style.navItem}>Create Dog</h3>
        </Link>
        <Link className={style.link} to="/filterTemperament">
          <h3 className={style.navItem}>Filtered Temperament</h3>
        </Link>
      </div>
    </div>
  );
}
