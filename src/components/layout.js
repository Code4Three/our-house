import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import HeaderNav from './header-nav';
import Header from './header';
import './layout.css';
import { relative } from 'path';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="main-wrapper">
        <HeaderNav />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="content-wrapper">{children}</div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
