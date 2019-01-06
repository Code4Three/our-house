import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DayCard from '../components/day-card';
import JobCard from '../components/job-card';
import { node } from 'prop-types';

class JobsBoard extends React.Component {
  constructor(props) {
    super(props);

    //get data from graphql query
    this.jobData = this.props.data.allMongodbOurHouseJobs;

    //bind functions to constructor
    this.incDayId = this.incDayId.bind(this);
    this.decDayId = this.decDayId.bind(this);

    //set current day
    this.day = new Date();

    this.state = {
      currentDayId: this.day.getDay(),
    };
  }

  //increment the user id
  //gets passed to child component and then enacted from button click to update this.state
  incDayId() {
    if (!(this.state.currentDayId >= 6)) {
      this.setState({
        currentDayId: this.state.currentDayId + 1,
      });
    } else {
      this.setState({
        currentDayId: 0,
      });
    }
  }

  //decrement the user id
  //gets passed to child component and then enacted from button click to update this.state
  decDayId() {
    if (!(this.state.currentDayId <= 0)) {
      this.setState({
        currentDayId: this.state.currentDayId - 1,
      });
    } else {
      this.setState({
        currentDayId: 6,
      });
    }
  }

  getDayName() {
    this.jobData.edges.forEach(e => {
      if (e.node.dayId == this.state.currentDayId) {
        console.log(e.node.dayName);
        return e.node.dayName;
      }
    });
  }

  render() {
    // console.log(this.state.currentDayId);
    //console.log(this.jobData.edges[this.state.currentDayId].node.tasks[0].job);
    return (
      <Layout>
        <SEO title="Jobs Board" />
        <DayCard
          incAction={this.incDayId}
          decAction={this.decDayId}
          day={this.getDayName()}
        />
        <ul>
          {this.jobData.edges[this.state.currentDayId].node.tasks.map(
            (e, index) => {
              console.log(e);
              return <JobCard key={index} user={e.user} job={e.job} />;
            }
          )}
        </ul>
        {/*<JobCard user={e.node.tasks[0].user} job={e.node.tasks[0].job} />
        <JobCard user={'Sean'} job="1" />
        <JobCard day="Kim" job={currentUser.Tuesday} />
        <JobCard day="Layla" job={currentUser.Wednesday} />
        <JobCard day="Thursday" job={currentUser.Thursday} />
        <JobCard day="Friday" job={currentUser.Friday} />
        <JobCard day="Saturday" job={currentUser.Saturday} />
        <JobCard day="Sunday" job={currentUser.Sunday} />
        */}
      </Layout>
    );
  }
}

export default JobsBoard;

//Graphql query to Madlabs MongoDB
export const pageQuery = graphql`
  query {
    allMongodbOurHouseJobs {
      edges {
        node {
          dayId
          dayName
          tasks {
            user
            job
          }
        }
      }
    }
  }
`;
