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
      <nav>
        <button id="nav-button">
          <img id="nav-hamburger" src={hamburger} alt="Menu" />
        </button>
        <div id="nav-drop-down">
          <ul id="nav-ul">
            <li class="nav-item">
              <Link to="/" style={{ color: '#000000' }}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/jobs-board/" style={{ color: '#000000' }}>
                Jobs board
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderNav;
