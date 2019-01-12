import React, { Component } from 'react';
import { Link } from 'gatsby';

import styles from './header-nav.module.css';
import './transforms.css';
import hamburger from '../images/hamburger.svg';

class HeaderNav extends Component {
  componentDidMount() {
    let clickDiv = document.getElementById('navButtonClick');
    let changeDiv = document.getElementById('navSliderSlide');

    clickDiv.addEventListener('click', function() {
      changeDiv.classList.toggle('easy');
      console.log(changeDiv);
    });
  }

  render() {
    return (
      <nav className={styles.headerNav}>
        <button id="navButtonClick" className={styles.navButton}>
          <img
            className={styles.hamburgerImage}
            src={hamburger}
            alt="Navigation"
          />
        </button>
        <div id="navSliderSlide" className={styles.navSlider}>
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
