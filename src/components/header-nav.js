import React, { Component } from 'react';
import { Link } from 'gatsby';

import styles from './header-nav.module.css';
import hamburger from '../images/hamburger.svg';

class HeaderNav extends Component {
  componentDidMount() {
    let clickDiv = document.querySelector('#navButtonClick');
    let changeDiv = document.querySelector('#navDropDownSlide');

    clickDiv.addEventListener('click', function() {
      changeDiv.classList.toggle('easeOut');
    });
  }

  render() {
    return (
      <nav className={styles.headerNav}>
        <button id="navButtonClick" className={styles.navButton}>
          <img className={styles.hamburgerImage} src={hamburger} alt="Menu" />
        </button>
        <div id="navDropDownSlide" className={styles.navDropDown}>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/jobs-board/">Jobs board</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderNav;
