import React, { Component } from 'react';
import { Link } from 'gatsby';

class HeaderNav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ color: '#000000' }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs-board/" style={{ color: '#000000' }}>
              Jobs board
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderNav;
