import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import HeaderNav from './header-nav';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#0D646A',
      paddingBottom: '5rem',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem,1rem,10rem,1rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <HeaderNav />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
