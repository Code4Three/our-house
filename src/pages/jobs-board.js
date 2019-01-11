import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DayCard from '../components/day-card';
import JobCard from '../components/job-card';
import { node } from 'prop-types';

import '../components/layout.css';

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
    const currentDayId = this.state.currentDayId;
    const day = this.jobData.edges.filter(function(e) {
      return e.node.dayId == currentDayId;
    });
    return day[0].node.dayName;
  }

  getTasks() {
    const currentDayId = this.state.currentDayId;
    const tasks = this.jobData.edges.filter(function(e) {
      return e.node.dayId == currentDayId;
    });
    return tasks;
  }

  render() {
    return (
      <Layout>
        <SEO title="Jobs Board" />
        <DayCard
          incAction={this.incDayId}
          decAction={this.decDayId}
          day={this.getDayName()}
        />

        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '70',
          }}
        >
          {this.getTasks().map((e, index) => {
            return <JobCard key={index} user={e.user} job={e.job} />;
          })}
        </ul>
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
