import React, { Component } from 'react';
import H2Card from '../components/h2-card.js';
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
        <H2Card title="2914" />
        <MainCard />
      </Layout>
    );
  }
}

export default IndexPage;
