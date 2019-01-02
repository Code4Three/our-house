import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Our House"
          keywords={['gatsby', 'application', 'react', 'Our House']}
        />
      </Layout>
    )
  }
}

export default IndexPage
