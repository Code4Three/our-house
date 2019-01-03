import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import UserCard from '../components/user-card'
import JobCard from '../components/job-card'

class JobsBoard extends Component {
  constructor(props) {
    super(props)

    //bind functions to constructor
    this.incDayId = this.incDayId.bind(this)
    this.decDayId = this.decDayId.bind(this)

    //get data from graphql query
    this.allMongodbOurHouseJobs = this.props.data.allMongodbOurHouseJobs
    this.today = new Date()

    this.state = {
      dayId: this.today.getDay(),
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      data: this.allMongodbOurHouseJobs.edges,
      numdays: this.allMongodbOurHouseJobs.edges.length,
    }
  }

  //increment the user id
  //gets passed to child component and then enacted from button click to update this.state
  incDayId() {
    if (!(this.state.dayId >= 6)) {
      this.setState({
        dayId: this.state.dayId + 1,
      })
    } else {
      this.setState({
        dayId: 0,
      })
    }
  }

  //decrement the user id
  //gets passed to child component and then enacted from button click to update this.state
  decDayId() {
    if (!(this.state.dayId <= 0)) {
      this.setState({
        dayId: this.state.dayId - 1,
      })
    } else {
      this.setState({
        dayId: 6,
      })
    }
  }

  render() {
    const data = this.state.data
    const jobs = []
    const users = []
    const days = this.state.days

    for (let i = 0; i < 5; i++) {
      console.log(data[i].node.Monday)
      jobs.push(data[i].node.Monday)
    }

    for (let i = 0; i < 5; i++) {
      console.log(data[i].node.userName)
      users.push(data[i].node.userName)
    }

    const currentDay = 1

    console.log(jobs)
    console.log(users)
    console.log(this.state.dayId)
    return (
      <Layout>
        <SEO title="Jobs Board" />
        <UserCard
          incAction={this.incDayId}
          decAction={this.decDayId}
          user={days[this.state.dayId]}
        />
        <JobCard day={users[0]} job={jobs[0]} />
        <JobCard day={users[1]} job={jobs[1]} />
        <JobCard day={users[2]} job={jobs[2]} />
        <JobCard day={users[3]} job={jobs[3]} />
        <JobCard day={users[4]} job={jobs[4]} />
      </Layout>
    )
  }
}

//Graphql query to Madlabs MongoDB
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
