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
    this.allMongodbOurHouseJobs = this.props.data.allMongodbOurHouseJobs
    this.state = {
      userId: 0,
      users: this.allMongodbOurHouseJobs.edges,
      numUsers: this.allMongodbOurHouseJobs.edges.length,
    }
  }

  //increment the user id
  incUserId() {
    if (!(this.state.userId >= this.state.numUsers - 1)) {
      this.setState({
        userId: this.state.userId + 1,
      })
    } else {
      this.setState({
        userId: 0,
      })
    }
  }

  //decrement the user id
  decUserId() {
    if (!(this.state.userId - 1 <= 0)) {
      this.setState({
        userId: this.state.userId - 1,
      })
    } else {
      this.setState({
        userId: this.state.numUsers - 1,
      })
    }
  }

  render() {
    //const { allMongodbOurHouseJobs } = this.props.data
    //const residents = allMongodbOurHouseJobs.edges.find(
    //  user => user.node.userId === this.state.userId
    //)
    //const numResidents = allMongodbOurHouseJobs.edges.length
    const currentUser = this.state.users[this.state.userId].node
    return (
      <Layout>
        <SEO title="Jobs Board" />
        <UserCard
          incAction={this.incUserId}
          decAction={this.decUserId}
          user={currentUser.userName}
        />
        <JobCard day="Monday" job={currentUser.Monday} />
        <JobCard day="Tuesday" job={currentUser.Tuesday} />
        <JobCard day="Wednesday" job={currentUser.Wednesday} />
        <JobCard day="Thursday" job={currentUser.Thursday} />
        <JobCard day="Friday" job={currentUser.Friday} />
        <JobCard day="Saturday" job={currentUser.Saturday} />
        <JobCard day="Sunday" job={currentUser.Sunday} />
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
