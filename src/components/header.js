import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './header.module.css';

import './layout.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.siteHeader}>
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
