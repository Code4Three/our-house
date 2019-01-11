import React, { Component } from 'react';
import styles from './job-card.module.css';

class JobCard extends Component {
  render() {
    return (
      <li className={styles.jobCard}>
        <h3 className={styles.userName}>{this.props.user}</h3>
        <h4 className={styles.job}>{this.props.job}</h4>
      </li>
    );
  }
}

export default JobCard;
