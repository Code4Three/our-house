import React, { Component } from 'react';
import HomeCard from '../components/home-card.js';
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
        <HomeCard title="Our House" tag="Our Life, Our Story" />
        <MainCard />
      </Layout>
    );
  }
}

export default IndexPage;
