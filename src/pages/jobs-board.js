import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import UserCard from '../components/user-card'
import JobCard from '../components/job-card'

class JobsBoard extends Component {
  constructor(props) {
    super(props)

    this.incUserId = this.incUserId.bind(this)
    this.decUserId = this.decUserId.bind(this)
    this.state = { userId: 1 }
  }

  incUserId() {
    if (!(this.state.userId >= 5)) {
      this.setState({
        userId: this.state.userId + 1,
      })
    } else {
      this.setState({
        userId: 1,
        allMongodbOurHouseJobs: this.props.data,
        residents: this.allMongodbOurHouseJobs.edges.find(
          user => user.node.userId === this.state.userId
        ),
        numResidents: this.allMongodbOurHouseJobs.edges.length,
      })
    }
  }

  decUserId() {
    if (!(this.state.userId <= 1)) {
      this.setState({
        userId: this.state.userId - 1,
      })
    } else {
      this.setState({
        userId: 5,
      })
    }
  }

  render() {
    const { allMongodbOurHouseJobs } = this.props.data
    const residents = allMongodbOurHouseJobs.edges.find(
      user => user.node.userId === this.state.userId
    )
    const numResidents = allMongodbOurHouseJobs.edges.length
    console.log(allMongodbOurHouseJobs.edges.length)
    console.log(this.state.residents)
    console.log(this.state)
    return (
      <Layout>
        <SEO title="Jobs Board" />
        <UserCard
          incAction={this.incUserId}
          decAction={this.decUserId}
          user={residents.node.userName}
        />
        <JobCard day="Monday" job={residents.node.Monday} />
        <JobCard day="Tuesday" job={residents.node.Tuesday} />
        <JobCard day="Wednesday" job={residents.node.Wednesday} />
        <JobCard day="Thursday" job={residents.node.Thursday} />
        <JobCard day="Friday" job={residents.node.Friday} />
        <JobCard day="Saturday" job={residents.node.Saturday} />
        <JobCard day="Sunday" job={residents.node.Sunday} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMongodbOurHouseJobs {
      edges {
        node {
          userId
          userName
          Monday
          Tuesday
          Wednesday
          Thursday
          Friday
          Saturday
          Sunday
        }
      }
    }
  }
`

export default JobsBoard
