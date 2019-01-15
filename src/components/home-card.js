import React, { Component } from 'react';
import styles from './home-card.module.css';

class HomeCard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h5 className={styles.tag}>{this.props.tag}</h5>
        <h2 className={styles.title}>{this.props.title}</h2>
      </div>
    );
  }
}

export default HomeCard;
