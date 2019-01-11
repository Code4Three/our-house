import React, { Component } from 'react';
import { Link } from 'gatsby';

import './header-nav.css';
import hamburger from '../images/hamburger.svg';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let clickDiv = document.getElementById('nav-button');
    let changeDiv = document.getElementById('nav-drop-down');

    clickDiv.addEventListener('click', function() {
      changeDiv.classList.toggle('ease-out');
    });
  }

  render() {
    return (
      <nav id="header-nav">
        <button id="nav-button">
          <img id="hamburger-image" src={hamburger} alt="Menu" />
        </button>
        <div id="nav-drop-down">
          <ul id="nav-ul">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/jobs-board/">Jobs board</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderNav;
