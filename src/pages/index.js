import React, { Component } from 'react';
import MainCard from '../components/main-card.js';

import Layout from '../components/layout';
import SEO from '../components/seo';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Our House"
          keywords={['gatsby', 'application', 'react', 'Our House']}
        />
        <MainCard />
      </Layout>
    );
  }
}

export default IndexPage;
