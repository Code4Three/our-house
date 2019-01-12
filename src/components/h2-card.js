import React, { Component } from 'react';
import styles from './h2-card.module.css';

class DayCard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{this.props.title}</h2>
      </div>
    );
  }
}

export default DayCard;
