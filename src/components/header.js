import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './layout.css';

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
      background: '#0D646A',
      padding: '0.3rem 2rem 5rem 0',
      boxSizing: 'border-box',
    }}
  >
    <h1 style={{ display: 'flex', justifyContent: 'center' }}>
      <Link
        to="/"
        style={{
          color: 'var(--dark-grey)',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
