import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <div className={styles.menu}>
        <Link className={styles.link} to="/home">
          <h3 className={styles.navItem}>Home</h3>
        </Link>
        <Link className={styles.link} to="/about">
          <h3 className={styles.navItem}>About</h3>
        </Link>
        <Link className={styles.link} to="/favorites">
          <h3 className={styles.navItem}>Favorites</h3>
        </Link>
        <Link className={styles.link} to="/createDog">
          <h3 className={styles.navItem}>Create Dog</h3>
        </Link>
      </div>
    </div>
  );
}
