import { useState } from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() { 
    return (
      <header id="header" className={`${styles.header} fixed-top d-flex align-items-center`}>
        <div className="d-flex align-items-center">
          <i className={`bi bi-list d-flex align-items-center pe-4 ${styles.toggleSidebarBtn}`}></i>
          <a href="index.html" className={`${styles.logo} d-flex align-items-center`}>
            <img src="images/logo.png" alt="" />
            <span className="d-none d-lg-block">CLINICA ZENTENO</span>
          </a>
        </div>

        <div className={styles.searchBar}>
          <form className={`${styles.searchForm} d-flex align-items-center`} method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
          </form>
        </div>

        <nav className={`${styles.headerNav} ms-auto`}>
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">

              <a className={`nav-link ${styles.navProfile} d-flex align-items-center pe-0`} href="#" data-bs-toggle="dropdown">
                <img src="images/profile-img.jpg" alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">UserName</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Juan Marcelo Zenteno Molina</h6>
                  <span>Cash agent</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-person"></i>
                    <span>Change password</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>

              </ul>
            </li>
          </ul>
        </nav>
      </header>  
    )
}